/**
 * Per-neuron file download (skeletons, meshes) for neuron pages.
 *
 * Fetches one file per body ID in the format chosen in the dialog and packs
 * them into a single zip file (built client-side with fflate). Body IDs come
 * from one of two sources:
 *
 *  1. The page's own neuroglancer state (window.neuviewNeuroglancerPageData,
 *     exposed by neuroglancer-url-generator.js). This is what the page sent
 *     to the embedded viewer: the neurons of the type plus ticked partners.
 *  2. A Neuroglancer URL pasted into #swc-url-input (in the modal dialog
 *     opened by the header link). Its state JSON is parsed and the segments
 *     of the neuron segmentation layer are used. This is the only way to
 *     capture selection changes made inside the viewer, because the
 *     cross-origin iframe does not expose its current URL to this page.
 *
 * Formats come from NEUROGLANCER_DOWNLOAD_FORMATS (neuroglancer-url-generator.js),
 * a list of {key, label, url_template, kind, extension}. Supported kinds:
 *   swc     fetched and stored verbatim
 *   ngmesh  Neuroglancer legacy mesh: url_template addresses the "<id>:0"
 *           manifest, fragments are fetched and converted to Wavefront OBJ
 * The hosts must send CORS headers.
 */
(function () {
  "use strict";

  const MAX_FILES_WITHOUT_CONFIRM = 50;
  const CONCURRENCY = 6;

  let running = false;

  function formats() {
    return Array.isArray(NEUROGLANCER_DOWNLOAD_FORMATS)
      ? NEUROGLANCER_DOWNLOAD_FORMATS.filter((f) => f && f.url_template)
      : [];
  }

  function selectedFormat() {
    const all = formats();
    const checked = document.querySelector('input[name="swc-download-format"]:checked');
    if (checked) {
      const match = all.find((f) => f.key === checked.value);
      if (match) return match;
    }
    return all[0];
  }

  function fileUrl(fmt, bodyId) {
    return fmt.url_template.replace("{body_id}", encodeURIComponent(String(bodyId)));
  }

  /** URL of one mesh fragment, derived from the manifest URL template. */
  function fragmentUrl(fmt, bodyId, fragment) {
    const encoded = encodeURIComponent(String(fragment));
    if (fmt.url_template.includes("{body_id}:0")) {
      return fmt.url_template.replace("{body_id}:0", encoded);
    }
    return fmt.url_template.replace("{body_id}", encoded);
  }

  function setStatus(text, isError) {
    const el = document.getElementById("swc-download-status");
    if (!el) return;
    el.textContent = text || "";
    el.classList.toggle("is-error", Boolean(isError));
  }

  function dialogElement() {
    return document.getElementById("swc-download-dialog");
  }

  function openDialog(event) {
    if (event) event.preventDefault();
    const dialog = dialogElement();
    if (!dialog) return;
    if (!running) setStatus("");
    if (typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    const input = document.getElementById("swc-url-input");
    if (input) input.focus();
  }

  function closeDialog(event) {
    if (event) event.preventDefault();
    const dialog = dialogElement();
    if (!dialog) return;
    if (typeof dialog.close === "function") {
      if (dialog.open) dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  function setBusy(busy) {
    running = busy;
    const link = document.getElementById("swc-download-link");
    const button = document.getElementById("swc-download-button");
    if (link) link.classList.toggle("is-busy", busy);
    if (button) button.disabled = busy;
  }

  /**
   * Normalise a neuroglancer segments list to an array of unique, visible
   * body ID strings. Hidden segments are stored with a leading "!".
   */
  function normaliseSegments(segments) {
    const ids = [];
    const seen = new Set();
    (Array.isArray(segments) ? segments : []).forEach((seg) => {
      if (seg === null || seg === undefined) return;
      const str = String(seg).trim();
      if (!str || str.startsWith("!")) return;
      if (!/^\d+$/.test(str)) return;
      if (!seen.has(str)) {
        seen.add(str);
        ids.push(str);
      }
    });
    return ids;
  }

  /**
   * Extract the neuron body IDs from a Neuroglancer URL.
   * @param {string} url
   * @returns {{bodyIds: string[], error?: string}}
   */
  function parseNeuroglancerUrl(url) {
    const text = String(url || "").trim();
    const idx = text.indexOf("#!");
    if (idx === -1) {
      return { bodyIds: [], error: "No Neuroglancer state found in the URL (expected \"#!\" followed by JSON)." };
    }
    const fragment = text.slice(idx + 2);
    if (/^(https?:|gs:|s3:)/i.test(fragment)) {
      return {
        bodyIds: [],
        error: "This URL points to a state stored on a server. Open it in Neuroglancer, then copy the URL again once the JSON state is shown in the address bar.",
      };
    }
    let state;
    try {
      state = JSON.parse(decodeURIComponent(fragment));
    } catch (e1) {
      try {
        state = JSON.parse(fragment);
      } catch (e2) {
        return { bodyIds: [], error: "Could not parse the Neuroglancer state in the URL." };
      }
    }
    const layers = state && Array.isArray(state.layers) ? state.layers : [];
    let layer =
      typeof window.findMainSegmentationLayer === "function"
        ? window.findMainSegmentationLayer(layers)
        : undefined;
    if (!layer) {
      // Fallback for renamed layers: first segmentation layer with segments.
      layer = layers.find(
        (l) => l && l.type === "segmentation" && Array.isArray(l.segments) && l.segments.length > 0,
      );
    }
    if (!layer) {
      return { bodyIds: [], error: "No segmentation layer with selected neurons found in the URL." };
    }
    return { bodyIds: normaliseSegments(layer.segments) };
  }

  /**
   * Determine which body IDs to download.
   * @returns {{bodyIds: string[], source: "url"|"page", error?: string}}
   */
  function collectBodyIds() {
    const input = document.getElementById("swc-url-input");
    const pasted = input ? input.value.trim() : "";
    if (pasted) {
      const parsed = parseNeuroglancerUrl(pasted);
      return { bodyIds: parsed.bodyIds, source: "url", error: parsed.error };
    }
    const pageData = window.neuviewNeuroglancerPageData || {};
    return { bodyIds: normaliseSegments(pageData.visibleNeurons), source: "page" };
  }

  async function fetchBytes(url) {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      const err = new Error(`HTTP ${response.status}`);
      err.status = response.status;
      throw err;
    }
    return new Uint8Array(await response.arrayBuffer());
  }

  /**
   * Convert Neuroglancer legacy mesh fragments to Wavefront OBJ text.
   * Fragment layout: uint32 vertex count, float32 x/y/z per vertex (nm),
   * then uint32 triangle indices until the end of the buffer.
   */
  function ngmeshToObj(fragments, bodyId) {
    const lines = [
      `# body ID ${bodyId}`,
      "# converted from Neuroglancer legacy mesh; vertex units: nanometers",
    ];
    const faces = [];
    let offset = 0;
    fragments.forEach((bytes) => {
      if (bytes.byteLength < 4) return;
      const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
      const nVerts = view.getUint32(0, true);
      const vertBytes = nVerts * 12;
      if (4 + vertBytes > bytes.byteLength) {
        throw new Error("truncated mesh fragment");
      }
      for (let i = 0; i < nVerts; i++) {
        const b = 4 + i * 12;
        lines.push(
          `v ${view.getFloat32(b, true).toFixed(2)} ${view.getFloat32(b + 4, true).toFixed(2)} ${view.getFloat32(b + 8, true).toFixed(2)}`,
        );
      }
      const triStart = 4 + vertBytes;
      const nIdx = Math.floor((bytes.byteLength - triStart) / 4);
      for (let i = 0; i + 2 < nIdx; i += 3) {
        const b = triStart + i * 4;
        faces.push(
          `f ${view.getUint32(b, true) + offset + 1} ${view.getUint32(b + 4, true) + offset + 1} ${view.getUint32(b + 8, true) + offset + 1}`,
        );
      }
      offset += nVerts;
    });
    return lines.concat(faces).join("\n") + "\n";
  }

  async function fetchNgmesh(fmt, bodyId) {
    const manifest = JSON.parse(
      new TextDecoder().decode(await fetchBytes(fileUrl(fmt, bodyId))),
    );
    const names = Array.isArray(manifest.fragments) ? manifest.fragments : [];
    if (names.length === 0) throw new Error("mesh manifest lists no fragments");
    const fragments = [];
    for (const name of names) {
      fragments.push(await fetchBytes(fragmentUrl(fmt, bodyId, name)));
    }
    return fflate.strToU8(ngmeshToObj(fragments, bodyId));
  }

  /** Fetch one neuron in the given format. Never throws; data is null on failure. */
  async function fetchNeuron(fmt, bodyId) {
    try {
      const data =
        fmt.kind === "ngmesh"
          ? await fetchNgmesh(fmt, bodyId)
          : await fetchBytes(fileUrl(fmt, bodyId));
      return { bodyId, data };
    } catch (err) {
      if (err && err.status !== 404) console.warn("[download] failed for", bodyId, err);
      return { bodyId, data: null };
    }
  }

  async function runPool(items, worker, limit, onProgress) {
    const results = new Array(items.length);
    let next = 0;
    let done = 0;
    async function lane() {
      while (next < items.length) {
        const i = next++;
        results[i] = await worker(items[i]);
        done += 1;
        if (onProgress) onProgress(done, items.length);
      }
    }
    const lanes = [];
    for (let i = 0; i < Math.min(limit, items.length); i++) lanes.push(lane());
    await Promise.all(lanes);
    return results;
  }

  function safeFileName(name) {
    return String(name || "neurons")
      .replace(/[^A-Za-z0-9._-]+/g, "_")
      .replace(/^_+|_+$/g, "") || "neurons";
  }

  function zipFileName(fmt) {
    const pageData = window.neuviewNeuroglancerPageData || {};
    const base = pageData.currentNeuronType || pageData.websiteTitle || document.title;
    return `${safeFileName(base)}_${safeFileName(fmt.key)}.zip`;
  }

  function saveBlob(bytes, fileName) {
    const blob = new Blob([bytes], { type: "application/zip" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  }

  async function downloadSwc(event) {
    if (event) event.preventDefault();
    if (running) return;
    const fmt = selectedFormat();
    if (!fmt) {
      setStatus("Downloads are not configured for this dataset.", true);
      return;
    }
    if (typeof fflate === "undefined") {
      setStatus("The zip library (fflate) did not load.", true);
      return;
    }

    const { bodyIds, source, error } = collectBodyIds();
    if (error) {
      setStatus(error, true);
      return;
    }
    if (bodyIds.length === 0) {
      setStatus(
        source === "url"
          ? "The pasted Neuroglancer URL has no visible neurons selected."
          : "No neurons are currently displayed.",
        true,
      );
      return;
    }
    if (bodyIds.length > MAX_FILES_WITHOUT_CONFIRM) {
      const ok = window.confirm(
        `This will fetch ${bodyIds.length} files (${fmt.label}) and pack them into one zip file. Continue?`,
      );
      if (!ok) {
        setStatus("Download cancelled.", false);
        return;
      }
    }

    setBusy(true);
    const origin = source === "url" ? "pasted URL" : "this page";
    const ext = fmt.extension || (fmt.kind === "ngmesh" ? "obj" : "swc");
    setStatus(`Fetching 0 of ${bodyIds.length} ${fmt.label} files (neurons from ${origin})...`);
    try {
      const results = await runPool(
        bodyIds,
        (id) => fetchNeuron(fmt, id),
        CONCURRENCY,
        (done, total) => {
          setStatus(`Fetching ${done} of ${total} ${fmt.label} files (neurons from ${origin})...`);
        },
      );

      const files = {};
      const missing = [];
      results.forEach((r) => {
        if (r.data) {
          files[`${r.bodyId}.${ext}`] = r.data;
        } else {
          missing.push(r.bodyId);
        }
      });

      const found = Object.keys(files).length;
      if (found === 0) {
        setStatus(
          `None of the ${bodyIds.length} neurons has a ${fmt.label} file at the configured location.`,
          true,
        );
        return;
      }
      if (missing.length > 0) {
        files["missing_body_ids.txt"] = fflate.strToU8(
          `Body IDs without a ${fmt.label} file:\n` + missing.join("\n") + "\n",
        );
      }

      setStatus(`Packing ${found} files into a zip archive...`);
      // Meshes are large text files; trade compression for speed there.
      const level = fmt.kind === "ngmesh" ? 3 : 6;
      const zipped = fflate.zipSync(files, { level });
      saveBlob(zipped, zipFileName(fmt));

      const skipped =
        missing.length > 0
          ? `, ${missing.length} without a file (listed in missing_body_ids.txt)`
          : "";
      setStatus(`Downloaded ${found} file${found === 1 ? "" : "s"}${skipped}.`);
    } catch (err) {
      console.error("[download] failed", err);
      setStatus(`Download failed: ${err && err.message ? err.message : err}`, true);
    } finally {
      setBusy(false);
    }
  }

  function init() {
    const link = document.getElementById("swc-download-link");
    const dialog = dialogElement();
    const button = document.getElementById("swc-download-button");
    const closeButtons = [
      document.getElementById("swc-download-close"),
      document.getElementById("swc-download-cancel"),
    ];
    const input = document.getElementById("swc-url-input");

    // The header link opens the dialog; the download starts from its button.
    if (link) link.addEventListener("click", openDialog);
    if (button) button.addEventListener("click", downloadSwc);
    closeButtons.forEach((b) => b && b.addEventListener("click", closeDialog));
    if (dialog) {
      // Click on the backdrop (outside the dialog box) closes it.
      dialog.addEventListener("click", (e) => {
        if (e.target === dialog) closeDialog();
      });
    }
    if (input) {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") downloadSwc(e);
      });
      input.addEventListener("input", () => setStatus(""));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose for debugging and tests.
  window.neuviewSwcDownload = {
    parseNeuroglancerUrl,
    collectBodyIds,
    selectedFormat,
    ngmeshToObj,
    downloadSwc,
    openDialog,
    closeDialog,
  };
})();
