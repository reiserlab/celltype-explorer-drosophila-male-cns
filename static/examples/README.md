# Neuview Iframe Integration

Embed neuron visualization pages in iframes and control them from parent windows.

## Quick Start

### 1. Include the Library

```html
<script src="neuview-iframe-controller.js"></script>
```

### 2. Create an Iframe

```html
<iframe id="neuron-iframe" src="../types/LC11.html"></iframe>
```

### 3. Initialize the Controller

```javascript
const controller = new NeuviewIframeController('#neuron-iframe', {
    onPageLoaded: function(data) {
        console.log('Page loaded:', data.url);
    }
});
```

### 4. Jump to Sections

```javascript
controller.jumpToAnchor('neuron-visualization');
controller.jumpToAnchor('roi-innervation');
```

## Complete Example

See `example.html` for a working demonstration.

## API Reference

### Constructor

```javascript
new NeuviewIframeController(iframe, options)
```

**Parameters:**
- `iframe` - CSS selector string or HTMLIFrameElement
- `options` - Configuration object (optional)

**Options:**
```javascript
{
    targetOrigin: '*',              // Origin to send messages to
    onPageLoaded: function(data),   // Callback when page loads
    onUrlChanged: function(data),   // Callback when iframe URL changes
    onNavigationRequest: function(data),  // Callback when navigation requested
    onAnchorResult: function(data), // Callback when anchor scroll result received
    debug: false                    // Enable console logging
}
```

### Methods

#### `jumpToAnchor(anchor)`
Jump to a specific section in the neuron page.

```javascript
controller.jumpToAnchor('neuron-visualization');
```

**Available anchors:**
- `neuron-visualization` - 3D Neuroglancer viewer
- `roi-innervation` - ROI innervation data table
- `connectivity-inputs` - Upstream connectivity
- `connectivity-outputs` - Downstream connectivity
- `layer-analysis` - Layer analysis section
- `eyemap-section` - Eye map visualizations
- `summary-stats` - Summary statistics

#### `loadPage(url)`
Load a different neuron page in the iframe.

```javascript
controller.loadPage('../types/Mi1.html');
```

#### `navigateTo(url)`
Request the iframe to navigate to a URL via postMessage.

```javascript
controller.navigateTo('../types/Mi1.html');
```

#### `getCurrentUrl()`
Get the current URL of the loaded page.

```javascript
const url = controller.getCurrentUrl();
```

#### `isPageReady()`
Check if the page is loaded and ready.

```javascript
if (controller.isPageReady()) {
    controller.jumpToAnchor('roi-innervation');
}
```

#### `destroy()`
Clean up event listeners.

```javascript
controller.destroy();
```

### Events (Callbacks)

#### onPageLoaded
Called when a neuron page finishes loading.

```javascript
onPageLoaded: function(data) {
    console.log(data.url);  // URL of loaded page
}
```

**Data:**
```javascript
{
    url: 'http://example.com/types/LC11.html'
}
```

#### onUrlChanged
Called when the iframe URL changes (after page load).

```javascript
onUrlChanged: function(data) {
    console.log('Changed from:', data.previousUrl);
    console.log('Changed to:', data.currentUrl);
}
```

**Data:**
```javascript
{
    previousUrl: 'http://example.com/types/LC11.html',
    currentUrl: 'http://example.com/types/Mi1.html'
}
```

**Note:** The first page load will have `previousUrl` as `null`.

#### onNavigationRequest
Called when user clicks an internal link in the iframe.

```javascript
onNavigationRequest: function(data) {
    console.log(data.url);   // URL being navigated to
    console.log(data.text);  // Link text
    
    // Optionally intercept navigation
    controller.loadPage(data.url);
}
```

**Data:**
```javascript
{
    url: 'http://example.com/types/Mi1.html',
    text: 'Mi1',
    isInternal: true
}
```

#### onAnchorResult
Called after attempting to scroll to an anchor.

```javascript
onAnchorResult: function(data) {
    if (data.found) {
        console.log('Successfully scrolled to ' + data.anchor);
    } else {
        console.log('Anchor not found: ' + data.anchor);
    }
}
```

**Data:**
```javascript
{
    anchor: 'neuron-visualization',
    found: true
}
```

### Static Properties

#### KNOWN_ANCHORS
Array of standard section anchors.

```javascript
NeuviewIframeController.KNOWN_ANCHORS
// ['neuron-visualization', 'roi-innervation', ...]
```

## Usage Examples

### Navigation Sidebar

```html
<nav>
    <button onclick="controller.jumpToAnchor('neuron-visualization')">3D View</button>
    <button onclick="controller.jumpToAnchor('roi-innervation')">ROI Data</button>
    <button onclick="controller.jumpToAnchor('connectivity-inputs')">Inputs</button>
</nav>
<iframe id="neuron-iframe" src="../types/LC11.html"></iframe>

<script src="neuview-iframe-controller.js"></script>
<script>
    const controller = new NeuviewIframeController('#neuron-iframe');
</script>
```

### Load Different Pages

```javascript
controller.loadPage('../types/LC11.html');
controller.loadPage('../types/Mi1.html');
controller.loadPage('../types/T4a.html');
```

### Intercept Navigation

```javascript
const controller = new NeuviewIframeController('#neuron-iframe', {
    onNavigationRequest: function(data) {
        // Load new page in same iframe instead of navigating
        controller.loadPage(data.url);
    }
});
```

### Multiple Iframes

```javascript
const iframe1 = new NeuviewIframeController('#iframe-1');
const iframe2 = new NeuviewIframeController('#iframe-2');

// Sync navigation
function syncJump(anchor) {
    iframe1.jumpToAnchor(anchor);
    iframe2.jumpToAnchor(anchor);
}
```

### Wait for Page Load

```javascript
const controller = new NeuviewIframeController('#neuron-iframe', {
    onPageLoaded: function(data) {
        // Now safe to jump to sections
        controller.jumpToAnchor('neuron-visualization');
    }
});
```

### Track URL Changes

Monitor when the iframe navigates to different neuron pages:

```javascript
const controller = new NeuviewIframeController('#neuron-iframe', {
    onUrlChanged: function(data) {
        console.log('Navigated from:', data.previousUrl);
        console.log('Navigated to:', data.currentUrl);
        
        // Update UI to reflect current page
        document.getElementById('current-url').textContent = data.currentUrl;
        
        // Update browser history (optional)
        const neuronType = extractNeuronType(data.currentUrl);
        history.pushState({}, '', '#' + neuronType);
        
        // Update breadcrumbs or navigation
        updateBreadcrumb(neuronType);
    }
});

function extractNeuronType(url) {
    // Extract neuron type from URL like '../types/LC11.html'
    const match = url.match(/types\/([^.]+)\.html/);
    return match ? match[1] : '';
}
```

**Real-world example - Update page title:**
```javascript
const controller = new NeuviewIframeController('#neuron-iframe', {
    onUrlChanged: function(data) {
        const neuronType = data.currentUrl.match(/types\/([^.]+)\.html/);
        if (neuronType) {
            document.title = 'Viewing: ' + neuronType[1];
        }
    }
});
```

## Security

### Origin Validation

By default, the controller sends messages to any origin (`*`). For production, configure specific origins:

```javascript
const controller = new NeuviewIframeController('#neuron-iframe', {
    targetOrigin: 'https://your-neuron-domain.com'
});
```

### Best Practices

1. Use HTTPS for both parent and iframe pages
2. Configure specific `targetOrigin` for production
3. Validate URLs before loading new pages
4. Use iframe `sandbox` attribute if needed

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Android)

Uses standard APIs:
- `postMessage()` - Cross-origin messaging
- `scrollIntoView()` - Smooth scrolling

## Files

- `neuview-iframe-controller.js` - Controller library
- `example.html` - Working example
- `README.md` - This documentation

## How It Works

The system uses the browser's `postMessage` API for secure cross-origin communication:

1. **Parent window** includes `neuview-iframe-controller.js`
2. **Neuron pages** automatically include `iframe-bridge.js` (in all pages)
3. **Messages** are sent via `postMessage()` between parent and iframe
4. **Security** is enforced through origin validation

## Troubleshooting

**Controller not working?**
- Check that `neuview-iframe-controller.js` is loaded
- Verify iframe element exists
- Open browser console to see debug messages (set `debug: true`)

**Anchor not found?**
- Section may not exist for that neuron type
- Check spelling of anchor ID
- Use `onAnchorResult` callback to detect failures

**Navigation not working?**
- Ensure iframe is fully loaded before sending commands
- Use `onPageLoaded` callback to know when ready
- Check browser console for errors

## License

Part of the Neuview project.