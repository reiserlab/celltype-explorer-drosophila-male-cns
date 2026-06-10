// Responsive Navigation Menu Logic
// Wires up the hamburger menu / drawer behavior. Safe to load on any page —
// it's a no-op when the hamburger DOM isn't present.
function initializeResponsiveNavigation() {
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("hamburgerBtn");
    var dropdown = document.getElementById("hamburgerDropdown");
    var menu = document.getElementById("hamburgerMenu");
    var backdrop = document.getElementById("hamburgerBackdrop");

    if (!dropdown || !menu) return;

    // Drawer mode is only active under this breakpoint (matches the CSS).
    var DRAWER_BREAKPOINT = 1700;
    function isDrawerMode() {
      return window.innerWidth < DRAWER_BREAKPOINT;
    }

    function openDrawer() {
      dropdown.classList.add("open");
      menu.classList.add("menu-open");
      if (backdrop) backdrop.classList.add("open");
      if (btn) btn.setAttribute("aria-expanded", "true");
      if (isDrawerMode()) document.body.style.overflow = "hidden";
    }
    function closeDrawer() {
      dropdown.classList.remove("open");
      menu.classList.remove("menu-open");
      if (backdrop) backdrop.classList.remove("open");
      if (btn) btn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    function toggleDrawer() {
      if (dropdown.classList.contains("open")) closeDrawer();
      else openDrawer();
    }

    // Button click toggles the drawer.
    if (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleDrawer();
      });

      // On large screens (no drawer), the menu sits open inline — hover-open
      // is a nicety for the floating widget but irrelevant once the drawer
      // owns the small-screen experience. Gate hover behaviors accordingly.
      btn.addEventListener("mouseenter", function () {
        if (!isDrawerMode()) openDrawer();
      });
    }

    if (menu) {
      menu.addEventListener("mouseenter", function () {
        if (!isDrawerMode()) openDrawer();
      });
      menu.addEventListener("mouseleave", function () {
        if (!isDrawerMode()) closeDrawer();
      });
    }

    // Backdrop click closes the drawer (small screens only).
    if (backdrop) {
      backdrop.addEventListener("click", closeDrawer);
    }

    // ESC closes the drawer.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && dropdown.classList.contains("open")) {
        closeDrawer();
      }
    });

    // Click outside the menu (large screens) — keep the legacy behavior.
    document.body.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !isDrawerMode()) {
        closeDrawer();
      }
    });

    // All menu links are now pre-rendered in HTML
    // Add click handlers for smooth scrolling and menu closing
    var menuLinks = dropdown.querySelectorAll("a.hamburger-link");

    menuLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        // Always close menu on click — applies to both in-page anchors and
        // site-nav links.
        closeDrawer();

        // Only intercept same-page anchor links for smooth scrolling; let
        // cross-page links (Home/Types/Help) navigate normally.
        var href = this.getAttribute("href") || "";
        if (!href.startsWith("#")) return;

        e.preventDefault();
        var targetId = href.substring(1);
        var target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          // Update URL after smooth scroll
          setTimeout(function () {
            history.pushState(null, null, "#" + targetId);
          }, 500);
        }
      });
    });
  });
}

initializeResponsiveNavigation();
