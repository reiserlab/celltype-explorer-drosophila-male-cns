/**
 * Neuview Iframe Controller
 *
 * A simple JavaScript library for controlling neuron visualization pages
 * embedded in iframes from a parent window.
 *
 * @version 1.0.0
 * @license MIT
 */

(function (window) {
  "use strict";

  /**
   * NeuviewIframeController class
   *
   * @param {string|HTMLIFrameElement} iframe - Iframe selector or element
   * @param {Object} options - Configuration options
   */
  function NeuviewIframeController(iframe, options) {
    // Get iframe element
    if (typeof iframe === "string") {
      this.iframe = document.querySelector(iframe);
    } else if (iframe instanceof HTMLIFrameElement) {
      this.iframe = iframe;
    } else {
      throw new Error("Invalid iframe parameter");
    }

    if (!this.iframe) {
      throw new Error("Iframe not found");
    }

    // Configuration
    this.options = Object.assign(
      {
        targetOrigin: "*", // Origin to send messages to
        onPageLoaded: null, // Callback when page loads
        onNavigationRequest: null, // Callback when navigation requested
        onAnchorResult: null, // Callback when anchor scroll result received
        onUrlChanged: null, // Callback when iframe URL changes
        debug: false, // Enable debug logging
      },
      options || {},
    );

    // State
    this.isReady = false;
    this.currentUrl = null;

    // Bind message handler
    this._handleMessage = this._handleMessage.bind(this);

    // Initialize
    this._init();
  }

  /**
   * Initialize the controller
   * @private
   */
  NeuviewIframeController.prototype._init = function () {
    // Listen for messages from iframe
    window.addEventListener("message", this._handleMessage);

    // Listen for iframe load event
    this.iframe.addEventListener("load", () => {
      this._log("Iframe loaded");
    });

    this._log("Controller initialized");
  };

  /**
   * Handle messages from iframe
   * @private
   */
  NeuviewIframeController.prototype._handleMessage = function (event) {
    // Only process messages from neuview iframe
    if (!event.data || event.data.source !== "neuview-iframe") {
      return;
    }

    this._log("Received message:", event.data);

    const { type, data } = event.data;

    switch (type) {
      case "pageLoaded":
        this.isReady = true;
        const previousUrl = this.currentUrl;
        this.currentUrl = data.url;

        if (this.options.onPageLoaded) {
          this.options.onPageLoaded(data);
        }

        // Notify URL change if it's different
        if (previousUrl !== data.url && this.options.onUrlChanged) {
          this.options.onUrlChanged({
            previousUrl: previousUrl,
            currentUrl: data.url,
          });
        }
        break;

      case "navigationRequest":
        if (this.options.onNavigationRequest) {
          this.options.onNavigationRequest(data);
        }
        break;

      case "anchorAvailable":
        if (this.options.onAnchorResult) {
          this.options.onAnchorResult(data);
        }
        break;
    }
  };

  /**
   * Send message to iframe
   * @private
   */
  NeuviewIframeController.prototype._sendMessage = function (type, data) {
    if (!this.iframe.contentWindow) {
      this._log("Error: Iframe content window not available");
      return;
    }

    const message = {
      target: "neuview-iframe",
      type: type,
      data: data || {},
    };

    this.iframe.contentWindow.postMessage(message, this.options.targetOrigin);
    this._log("Sent message:", message);
  };

  /**
   * Debug logging
   * @private
   */
  NeuviewIframeController.prototype._log = function () {
    if (this.options.debug) {
      console.log("[NeuviewIframeController]", ...arguments);
    }
  };

  /**
   * Jump to a specific section/anchor in the neuron page
   *
   * @param {string} anchor - Anchor ID (e.g., 'neuron-visualization', 'roi-innervation')
   * @returns {NeuviewIframeController} - Returns this for chaining
   *
   * @example
   * controller.jumpToAnchor('neuron-visualization');
   */
  NeuviewIframeController.prototype.jumpToAnchor = function (anchor) {
    this._sendMessage("scrollToAnchor", { anchor: anchor });
    return this;
  };

  /**
   * Navigate the iframe to a new URL
   *
   * @param {string} url - URL to navigate to
   * @returns {NeuviewIframeController} - Returns this for chaining
   *
   * @example
   * controller.navigateTo('../types/Mi1.html');
   */
  NeuviewIframeController.prototype.navigateTo = function (url) {
    this._sendMessage("navigationRequest", { url: url });
    return this;
  };

  /**
   * Load a page by setting iframe src
   *
   * @param {string} url - URL to load
   * @returns {NeuviewIframeController} - Returns this for chaining
   *
   * @example
   * controller.loadPage('../types/LC11.html');
   */
  NeuviewIframeController.prototype.loadPage = function (url) {
    this.isReady = false;
    this.iframe.src = url;
    return this;
  };

  /**
   * Get current URL of the iframe
   *
   * @returns {string|null} - Current URL or null if not loaded
   *
   * @example
   * const url = controller.getCurrentUrl();
   */
  NeuviewIframeController.prototype.getCurrentUrl = function () {
    return this.currentUrl;
  };

  /**
   * Check if iframe is ready
   *
   * @returns {boolean} - True if page is loaded and ready
   *
   * @example
   * if (controller.isReady()) {
   *   controller.jumpToAnchor('neuron-visualization');
   * }
   */
  NeuviewIframeController.prototype.isPageReady = function () {
    return this.isReady;
  };

  /**
   * Destroy the controller and clean up event listeners
   *
   * @example
   * controller.destroy();
   */
  NeuviewIframeController.prototype.destroy = function () {
    window.removeEventListener("message", this._handleMessage);
    this._log("Controller destroyed");
  };

  /**
   * Static list of known anchors in neuron pages
   */
  NeuviewIframeController.KNOWN_ANCHORS = [
    "neuron-visualization",
    "roi-innervation",
    "connectivity-inputs",
    "connectivity-outputs",
    "layer-analysis",
    "eyemap-section",
    "summary-stats",
  ];

  // Expose to window
  window.NeuviewIframeController = NeuviewIframeController;
})(window);
