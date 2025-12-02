/**
 * Iframe Communication Bridge for Neuron Pages
 *
 * This script enables secure cross-origin communication between neuron pages
 * displayed in iframes and their parent windows. It supports:
 * - Jumping to specific sections/anchors in the page
 * - Notifying parent when navigation occurs
 *
 * Usage in iframe: Include this script in neuron pages
 * Usage in parent: See parent-iframe-controller.html for example
 */

(function () {
  "use strict";

  // Configuration
  const CONFIG = {
    // List of allowed parent origins (can be configured via data attribute)
    // Use ['*'] to allow all origins (less secure but more flexible)
    allowedOrigins: ["*"],

    // Message types
    messageTypes: {
      SCROLL_TO_ANCHOR: "scrollToAnchor",
      PAGE_LOADED: "pageLoaded",
      NAVIGATION_REQUEST: "navigationRequest",
      ANCHOR_AVAILABLE: "anchorAvailable",
    },
  };

  // State
  let parentOrigin = null;

  /**
   * Check if origin is allowed
   */
  function isOriginAllowed(origin) {
    if (CONFIG.allowedOrigins.includes("*")) {
      return true;
    }
    return CONFIG.allowedOrigins.includes(origin);
  }

  /**
   * Send message to parent window
   */
  function sendToParent(type, data = {}) {
    if (!window.parent || window.parent === window) {
      // Not in an iframe
      return;
    }

    const message = {
      source: "neuview-iframe",
      type: type,
      data: data,
      timestamp: Date.now(),
    };

    // If we know the parent origin, use it; otherwise send to '*'
    const targetOrigin = parentOrigin || "*";
    window.parent.postMessage(message, targetOrigin);
  }

  /**
   * Scroll to a specific anchor/element
   */
  function scrollToAnchor(anchorId) {
    let element = null;

    // Try to find element by ID (with or without #)
    const id = anchorId.replace(/^#/, "");
    element = document.getElementById(id);

    // If not found, try as a querySelector
    if (!element) {
      try {
        element = document.querySelector(anchorId);
      } catch (e) {
        console.warn("Invalid selector:", anchorId);
      }
    }

    if (element) {
      // Smooth scroll to element
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Send confirmation
      sendToParent(CONFIG.messageTypes.ANCHOR_AVAILABLE, {
        anchor: anchorId,
        found: true,
      });

      return true;
    } else {
      // Send failure notification
      sendToParent(CONFIG.messageTypes.ANCHOR_AVAILABLE, {
        anchor: anchorId,
        found: false,
      });

      console.warn("Anchor not found:", anchorId);
      return false;
    }
  }

  /**
   * Handle messages from parent window
   */
  function handleParentMessage(event) {
    // Validate origin
    if (!isOriginAllowed(event.origin)) {
      console.warn("Message from unauthorized origin:", event.origin);
      return;
    }

    // Store parent origin for future communication
    if (!parentOrigin && event.origin !== "null") {
      parentOrigin = event.origin;
    }

    // Validate message format
    if (!event.data || typeof event.data !== "object") {
      return;
    }

    // Only process messages intended for neuview
    if (event.data.target !== "neuview-iframe") {
      return;
    }

    const { type, data } = event.data;

    switch (type) {
      case CONFIG.messageTypes.SCROLL_TO_ANCHOR:
        if (data && data.anchor) {
          scrollToAnchor(data.anchor);
        }
        break;

      case CONFIG.messageTypes.NAVIGATION_REQUEST:
        if (data && data.url) {
          window.location.href = data.url;
        }
        break;

      default:
        console.log("Unknown message type from parent:", type);
    }
  }

  /**
   * Notify parent of page load
   */
  function notifyPageLoaded() {
    sendToParent(CONFIG.messageTypes.PAGE_LOADED, {
      url: window.location.href,
    });
  }

  /**
   * Intercept link clicks to notify parent before navigation
   */
  function setupNavigationInterception() {
    document.addEventListener(
      "click",
      function (event) {
        const link = event.target.closest("a");

        if (!link) return;

        const href = link.getAttribute("href");

        // Skip if no href, external link, or anchor-only link
        if (!href) return;
        if (href.startsWith("#")) return;
        if (link.target === "_blank") return;
        if (link.hostname && link.hostname !== window.location.hostname) return;

        // Check if it's an internal navigation (relative URL or same origin)
        const isInternal =
          !href.match(/^https?:\/\//) ||
          link.hostname === window.location.hostname;

        if (isInternal) {
          // Notify parent before navigation
          sendToParent(CONFIG.messageTypes.NAVIGATION_REQUEST, {
            url: link.href,
            text: link.textContent.trim(),
            isInternal: true,
          });
        }
      },
      true,
    ); // Use capture phase to catch before any other handlers
  }

  /**
   * Initialize the iframe bridge
   */
  function initialize() {
    // Only run if we're in an iframe
    if (window.parent === window) {
      console.log("Not in iframe, skipping iframe bridge initialization");
      return;
    }

    console.log("Initializing Neuview iframe bridge");

    // Set up message listener
    window.addEventListener("message", handleParentMessage, false);

    // Set up navigation interception
    setupNavigationInterception();

    // Notify parent when page is loaded
    if (document.readyState === "complete") {
      notifyPageLoaded();
    } else {
      window.addEventListener("load", notifyPageLoaded);
    }
  }

  // Auto-initialize when script loads
  initialize();

  // Expose API for manual control if needed
  window.neuviewIframeBridge = {
    sendToParent: sendToParent,
    scrollToAnchor: scrollToAnchor,
    config: CONFIG,
  };
})();
