// Neuron Page Static JavaScript Functions
// Functions that don't require Jinja2 template variables

// General cumulative percentage calculation for ROI tables (input/output percentages)
function calculateCumulativePercentages(table, cumulativeCol, roiPreciseData) {
  var cumulativeSum = 0;

  // Get all rows in current display order
  table.rows({ order: "current", search: "applied" }).every(function (rowIdx) {
    var rowNode = this.node();
    var rowId = rowNode.id;

    // Extract index from row ID (format: r0, r1, r2, etc.)
    var index = parseInt(rowId.substring(1));

    var preciseValue = roiPreciseData[index] || 0;

    cumulativeSum += preciseValue;

    var cellNode = this.cell(rowIdx, cumulativeCol).node();

    var gradientStyle = "--s: " + cumulativeSum.toFixed(1) + "%;";

    cellNode.setAttribute("style", gradientStyle);
    var titleText =
      "+" +
      preciseValue.toFixed(5) +
      "%, cumulative: " +
      cumulativeSum.toFixed(5) +
      "%";
    cellNode.setAttribute("title", titleText);
  });
}

// Custom search function for connections per neuron filtering
function createConnectionsFilter(tableId, connectionsColumnIndex) {
  return function (settings, data, dataIndex) {
    // Only apply this filter to the specific table it was created for
    if (settings.sTableId !== tableId) return true;

    var sliderId = settings.sTableId.replace("-table", "-connections-slider");
    var slider = document.getElementById(sliderId);
    if (!slider) return true;

    if (parseFloat(slider.value) == parseFloat(slider.min)) {
      return true;
    }

    var logValue = parseFloat(slider.value);
    var minPercentage = Math.pow(10, logValue);
    var actualPercentage =
      parseFloat(data[connectionsColumnIndex].replace("%", "")) || 0;

    return actualPercentage >= minPercentage;
  };
}

// Create and insert slider into DataTables header
function createConnectionsSliderInHeader(tableId, neuronType) {
  var sliderId = tableId.replace("-table", "-connections-slider");
  var valueId = tableId.replace("-table", "-slider-value");

  // Create the slider HTML
  var sliderHtml = `
        <div class="connections-filter-header">
            <label for="${sliderId}">Min connections per ${neuronType}</label>
            <div class="slider-container-header">
                <input type="range" id="${sliderId}" class="percentage-slider-header"
                       min="-1" max="3" value="0" step="0.1">
                <span class="slider-value-header" id="${valueId}">1.0</span>
            </div>
        </div>
    `;
  return sliderHtml;
}

// Setup slider functionality with logarithmic scale
function setupConnectionsSlider(sliderId, valueId, table) {
  var slider = document.getElementById(sliderId);
  var valueDisplay = document.getElementById(valueId);

  if (slider && valueDisplay) {
    // Initialize slider at position representing 1.0 connection (log10(1) = 0)
    slider.value = Math.log10(1); // This equals 0

    // Set initial display value
    var initialValue = Math.pow(10, parseFloat(slider.value));
    valueDisplay.textContent = initialValue.toFixed(1);

    slider.addEventListener("input", function () {
      // Convert from logarithmic scale to actual value
      var actualValue = Math.pow(10, parseFloat(this.value));
      valueDisplay.textContent = actualValue.toFixed(1);
      table.draw();
    });

    // Trigger initial filter application
    table.draw();
  }
}

// Custom search function for ROI percentage filtering
function createROIPercentageFilter(tableId) {
  return function (settings, data, dataIndex) {
    // Only apply this filter to the specific table it was created for
    if (settings.sTableId !== tableId) return true;

    var sliderId = settings.sTableId.replace("-table", "-percentage-slider");
    var slider = document.getElementById(sliderId);
    if (!slider) return true;

    if (parseFloat(slider.value) == parseFloat(slider.min)) {
      return true;
    }

    var logValue = parseFloat(slider.value);
    var minPercentage = Math.pow(10, logValue);
    var percentIn = parseFloat(data[2].replace("%", "")) || 0;
    var percentOut = parseFloat(data[5].replace("%", "")) || 0;

    // Show row if either % In or % Out is >= minPercentage
    return percentIn >= minPercentage || percentOut >= minPercentage;
  };
}

// Create and insert ROI slider into DataTables header
function createROIPercentageSliderInHeader(tableId) {
  var sliderId = tableId.replace("-table", "-percentage-slider");
  var valueId = tableId.replace("-table", "-slider-value");

  // Create the slider HTML with logarithmic scale
  var sliderHtml = `
        <div class="percentage-filter-header">
            <label for="${sliderId}">Min % Input or Output</label>
            <div class="slider-container-header">
                <input type="range" id="${sliderId}" class="percentage-slider-header"
                       min="-1.4" max="2" value="0.176" step="0.01">
                <span class="slider-value-header" id="${valueId}">1.5%</span>
            </div>
        </div>
    `;
  return sliderHtml;
}

// Setup ROI slider functionality with logarithmic scale
function setupROIPercentageSlider(sliderId, valueId, table) {
  var slider = document.getElementById(sliderId);
  var valueDisplay = document.getElementById(valueId);

  if (slider && valueDisplay) {
    // Initialize slider at position representing 1.5% (log10(1.5) ≈ 0.176)
    slider.value = Math.log10(1.5);

    // Set initial display value
    var initialValue = Math.pow(10, parseFloat(slider.value));
    valueDisplay.textContent = initialValue.toFixed(1) + "%";

    slider.addEventListener("input", function () {
      // Convert from logarithmic scale to actual percentage
      var actualValue = Math.pow(10, parseFloat(this.value));
      valueDisplay.textContent = actualValue.toFixed(1) + "%";
      table.draw();
    });

    // Trigger initial filter application
    table.draw();
  }
}

// Helper function to set up tooltip event listeners
function setupTooltipListeners(element, tooltipText, tooltip, titleElement) {
  element.addEventListener("mouseenter", function (e) {
    // Hide native title temporarily if it exists
    if (titleElement) {
      titleElement.textContent = "";
    }

    // Show custom tooltip
    tooltip.innerHTML = tooltipText.replace(/\n/g, "<br>");
    tooltip.style.display = "block";

    // Position tooltip near mouse
    var updateTooltipPosition = function (event) {
      var x = event.clientX + window.scrollX;
      var y = event.clientY + window.scrollY;
      tooltip.style.left = x + 10 + "px";
      tooltip.style.top = y - 10 + "px";
    };

    updateTooltipPosition(e);

    // Follow mouse movement
    var mouseMoveHandler = updateTooltipPosition;
    document.addEventListener("mousemove", mouseMoveHandler);

    // Store cleanup function
    element._svgTooltipCleanup = function () {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  });

  element.addEventListener("mouseleave", function () {
    // Restore native title if it exists
    if (titleElement) {
      titleElement.textContent = tooltipText;
    }

    // Hide custom tooltip
    tooltip.style.display = "none";

    // Clean up mouse move listener
    if (element._svgTooltipCleanup) {
      element._svgTooltipCleanup();
      delete element._svgTooltipCleanup;
    }
  });
}

// General title attribute tooltip functionality
function initializeTitleTooltips() {
  // Create tooltip element if it doesn't exist
  var tooltip = document.getElementById("title-tooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "title-tooltip";
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "#333";
    tooltip.style.color = "white";
    tooltip.style.padding = "8px 12px";
    tooltip.style.borderRadius = "4px";
    tooltip.style.fontSize = "14px";
    tooltip.style.pointerEvents = "none";
    tooltip.style.zIndex = "9999";
    tooltip.style.display = "none";
    tooltip.style.maxWidth = "300px";
    tooltip.style.wordWrap = "break-word";
    tooltip.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    document.body.appendChild(tooltip);
  }

  // Find all elements with title attributes (excluding abbr elements which are handled separately)
  document.querySelectorAll("[title]").forEach(function (element) {
    var tooltipText = element.getAttribute("title");
    if (
      tooltipText &&
      tooltipText.trim() &&
      !element._titleTooltipInitialized
    ) {
      // Mark as initialized to prevent duplicates
      element._titleTooltipInitialized = true;

      element.addEventListener("mouseenter", function (e) {
        // Temporarily remove title to suppress default browser tooltip
        var currentTitle = element.getAttribute("title");
        element.removeAttribute("title");

        // Show custom tooltip
        tooltip.textContent = currentTitle;
        tooltip.style.display = "block";

        // Position tooltip near mouse
        var updateTooltipPosition = function (event) {
          var x = event.clientX + window.scrollX;
          var y = event.clientY + window.scrollY;
          tooltip.style.left = x + 10 + "px";
          tooltip.style.top = y - 10 + "px";
        };

        updateTooltipPosition(e);

        // Follow mouse movement
        var mouseMoveHandler = updateTooltipPosition;
        document.addEventListener("mousemove", mouseMoveHandler);

        // Store cleanup function
        element._titleTooltipCleanup = function () {
          document.removeEventListener("mousemove", mouseMoveHandler);
        };
      });

      element.addEventListener("mouseleave", function () {
        // Restore title attribute
        element.setAttribute("title", tooltipText);

        // Hide custom tooltip
        tooltip.style.display = "none";

        // Clean up mouse move listener
        if (element._titleTooltipCleanup) {
          element._titleTooltipCleanup();
          delete element._titleTooltipCleanup;
        }
      });
    }
  });
}

// Responsive Navigation Menu Logic
function initializeResponsiveNavigation() {
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("hamburgerBtn");
    var dropdown = document.getElementById("hamburgerDropdown");
    var menu = document.getElementById("hamburgerMenu");

    if (!dropdown || !menu) return;

    // Handle button click and hover (only relevant on small screens)
    if (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.classList.toggle("open");
        menu.classList.toggle("menu-open");
      });

      // Handle hover to open menu on small screens
      btn.addEventListener("mouseenter", function (e) {
        dropdown.classList.add("open");
        menu.classList.add("menu-open");
      });
    }

    // Handle hover over entire menu area
    if (menu) {
      menu.addEventListener("mouseenter", function (e) {
        dropdown.classList.add("open");
        menu.classList.add("menu-open");
      });

      // Close menu when mouse leaves the entire menu area
      menu.addEventListener("mouseleave", function (e) {
        dropdown.classList.remove("open");
        menu.classList.remove("menu-open");
      });
    }

    // Close when clicking outside (only on small screens)
    document.body.addEventListener("click", function (e) {
      if (!menu.contains(e.target)) {
        dropdown.classList.remove("open");
        menu.classList.remove("menu-open");
      }
    });

    // All menu links are now pre-rendered in HTML
    // Add click handlers for smooth scrolling and menu closing
    var menuLinks = dropdown.querySelectorAll("a.hamburger-link");

    menuLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        // Close menu on small screens
        dropdown.classList.remove("open");
        menu.classList.remove("menu-open");

        // Smooth scroll to target
        e.preventDefault();
        var targetId = this.getAttribute("href").substring(1); // Remove #
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

// Initialize all tooltip functionality

function initializeHtmlTooltips() {
  // Find all elements with class "html-tooltip"
  document
    .querySelectorAll(".html-tooltip")
    .forEach(function (tooltipContainer) {
      if (tooltipContainer._htmlTooltipInitialized) {
        return; // Skip if already initialized
      }

      // Mark as initialized to prevent duplicates
      tooltipContainer._htmlTooltipInitialized = true;

      const tooltipContent = tooltipContainer.querySelector(".tooltip-content");
      if (!tooltipContent) {
        return; // Skip if no tooltip content found
      }

      // Ensure tooltip content is hidden by default
      tooltipContent.style.display = "none";

      // Add mouse enter event
      tooltipContainer.addEventListener("mouseenter", function (e) {
        // Show tooltip content
        tooltipContent.style.display = "block";

        // Adjust positioning if tooltip would overflow viewport
        setTimeout(function () {
          const rect = tooltipContent.getBoundingClientRect();
          const containerRect = tooltipContainer.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          const scrollX = window.scrollX;
          const scrollY = window.scrollY;

          // Reset any previous positioning classes
          tooltipContainer.classList.remove(
            "tooltip-right",
            "tooltip-left",
            "tooltip-bottom",
          );

          // Add responsive margins for small screens
          const margin = viewportWidth < 768 ? 10 : 5;

          // Check horizontal overflow
          const overflowsRight = rect.right + margin > viewportWidth;
          const overflowsLeft = rect.left - margin < 0;

          // Check vertical overflow
          const overflowsTop = rect.top - margin < 0;
          const overflowsBottom = rect.bottom + margin > viewportHeight;

          // Determine best positioning strategy
          if (overflowsTop && !overflowsBottom) {
            // Show below if top is blocked but bottom has space
            tooltipContainer.classList.add("tooltip-bottom");
          } else if (overflowsRight && !overflowsLeft) {
            // Show left if right is blocked but left has space
            tooltipContainer.classList.add("tooltip-left");
          } else if (overflowsLeft && !overflowsRight) {
            // Show right if left is blocked but right has space
            tooltipContainer.classList.add("tooltip-right");
          } else if (overflowsRight && overflowsLeft) {
            // If both sides overflow, center and ensure it fits
            tooltipContent.style.left = "50%";
            tooltipContent.style.transform = "translateX(-50%)";
            tooltipContent.style.maxWidth = viewportWidth - 2 * margin + "px";
          }
        }, 10);
      });

      // Add mouse leave event
      tooltipContainer.addEventListener("mouseleave", function () {
        tooltipContent.style.display = "none";
        // Reset positioning classes
        tooltipContainer.classList.remove(
          "tooltip-right",
          "tooltip-left",
          "tooltip-bottom",
        );
      });
    });
}

// Update the initializeAllTooltips function to include HTML tooltips
function initializeAllTooltips() {
  setTimeout(function () {
    initializeTitleTooltips();
    initializeHtmlTooltips();

    // Set up DataTables draw event handlers for tooltip re-initialization
    if (window.jQuery && jQuery.fn && jQuery.fn.dataTable) {
      // Handle ROI table tooltips
      jQuery("#roi-table")
        .off("draw.dt.tooltips")
        .on("draw.dt.tooltips", function () {
          setTimeout(function () {
            initializeTitleTooltips();
            initializeHtmlTooltips();
          }, 50);
        });

      // Handle other tables if they have tooltips
      jQuery("#upstream-table, #downstream-table")
        .off("draw.dt.tooltips")
        .on("draw.dt.tooltips", function () {
          setTimeout(function () {
            initializeTitleTooltips();
            initializeHtmlTooltips();
          }, 50);
        });
    }
  }, 100);
}

// Initialize responsive navigation
initializeResponsiveNavigation();
