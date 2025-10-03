# Male CNS – Cell Type Explorer - Dataset Documentation

**Dataset:** male-cns:v0.9
**Server:** neuprint-cns.janelia.org
**Generated:** 2025-10-03 13:25:25 UTC
**Total Neuron Types:** 11732

---

## Overview

This website provides an interactive catalog of neuron types from the male-cns:v0.9 dataset. The catalog allows you to explore detailed information about each neuron type, including connectivity patterns, anatomical distributions, and morphological properties.

## Getting Started

### Using the Index Page

The index page serves as the main entry point for exploring the dataset. It contains several filtering options to help you find specific neurons of interest:

**Filter Options:**
- **Neuron Type Filter**: Use the search box to filter neurons by type name. Type part of a neuron name to see matching results.
- **Hemisphere Filter**: Choose between "All", "Left", or "Right" to filter neurons by their soma hemisphere location.
- **Synapse Count Filters**: Use the slider controls to filter neurons based on their presynaptic and postsynaptic synapse counts.
- **Search and Sort**: All columns in the neuron table are sortable by clicking the column headers. Use the global search box to quickly find specific entries.

**Navigation:**
- Click on any neuron type name in the table to view detailed analysis pages
- Use the pagination controls at the bottom to browse through large datasets
- Column visibility can be toggled using the column visibility button

The filters work together, so you can combine multiple criteria to narrow down your search (e.g., show only left hemisphere neurons with more than 100 presynaptic connections).

### Advanced Filtering Options

The index page provides additional powerful filtering capabilities:

- **Sides**: Filter by hemisphere location
  - *All*: Show neuron types from all hemispheres
  - *Undefined*: Types without specified hemisphere
  - *Only Left*: Types located in the left hemisphere
  - *Only Right*: Types located in the right hemisphere
  - *Only Middle*: Types located in the midline

- **ROI**: Filter by specific regions of interest (brain regions)
  - Choose from available ROIs in the dataset
  - ROIs represent anatomically defined brain regions

- **Region**: Filter by broader anatomical regions
  - Groups related ROIs into larger functional areas
  - Helps focus on specific brain systems

- **Neurotransmitter (NT)**: Filter by predicted neurotransmitter type
  - Based on computational predictions from connectivity and gene expression
  - Common types include Acetylcholine, GABA, Glutamate, etc.

- **Cell Count**: Filter by the number of neurons in each type
  - Useful for focusing on well-represented vs. rare neuron types
  - Ranges from single neurons to large populations

### Search Functionality

Use the search box in the header to quickly find neuron types by name. The search supports:
- Partial name matching
- Case-insensitive search
- Real-time filtering as you type

### Site Navigation

- **Home**: Returns to the main index page
- **Cell Types**: Alternative view of neuron type listings
- **Glossary**: Definitions and explanations of terminology
- **neuPrint**: Direct link to the source neuPrint database at neuprint-cns.janelia.org

## Individual Neuron Type Pages

Each neuron type in the index table links to a comprehensive analysis page containing detailed information about that specific neuron type:

### Summary Statistics
- **Total neuron count** and hemisphere distribution
- **Average synapse counts** (presynaptic and postsynaptic)
- **Log ratio calculations** for hemisphere balance

### Interactive Neuroglancer Visualization
- **3D brain visualization** showing neuron morphology
- **Embedded Neuroglancer viewer** for detailed structural analysis
- **Direct links** to explore neuron reconstructions in 3D space
- **Zoom, rotate, and navigate** through the brain volume
- **View neuron reconstructions** in their anatomical context

### Layer Analysis
- **Detailed breakdown** of neuron presence across brain regions (LA, ME, LO, LOP, AME, Central Brain)
- **Quantitative analysis** of neuron distribution within anatomical layers
- **Interactive tables** showing layer-specific statistics
- **Region-specific counts** for different anatomical areas
- **Layer-specific analysis** for stratified brain regions

### ROI Innervation Analysis
- **Comprehensive table** of Region of Interest (ROI) innervation data
- **Sortable and filterable data** showing neuron presence across brain regions
- **Cumulative percentage calculations** for understanding distribution patterns
- **Search functionality** to quickly find specific brain regions
- **Complete ROI coverage** showing all brain regions innervated
- **Synapse distribution** (presynaptic vs. postsynaptic)

### Connectivity Analysis
- **Upstream Connections**: Detailed table of neurons that provide input to this neuron type
- **Downstream Connections**: Comprehensive view of neurons that receive output from this neuron type
- **Quantitative synapse count data** for each connection
- **Filterable tables** with logarithmic slider controls for exploring connection strength
- **Cumulative percentage analysis** for understanding connectivity patterns
- **Partner neuron type identification** and strength metrics
- **Connection strength**: Number of synaptic connections
- **Percentage breakdown**: Relative connection strengths

### Interactive Features
- **All data tables** include sorting, filtering, and search capabilities
- **Slider controls** for exploring connections based on synapse count thresholds
- **Responsive design** that works across different screen sizes
- **Tooltip help text** for understanding data metrics
- **Sortable tables** for easy analysis

## Understanding the Data

### Neuron Counts
- Numbers represent individual reconstructed neurons in the dataset
- Not all neurons of a type may be reconstructed
- Counts reflect the current state of the dataset

### Connectivity Data
- Based on synaptic connections identified in electron microscopy data
- Connection strengths represent actual synaptic counts
- Percentages show relative connection strengths within each neuron type

### Hemisphere Information
- **Left/Right**: Neurons located in the respective brain hemisphere
- **Middle**: Neurons crossing the midline or in central structures
- **Undefined**: Neurons without clear hemisphere assignment

### ROI (Regions of Interest)
ROIs represent anatomically defined brain regions based on:
- Established neuroanatomical boundaries
- Functional organization
- Developmental origins
- Published brain atlases

### Neurotransmitter Predictions
Neurotransmitter assignments are computational predictions based on:
- Connectivity patterns
- Gene expression data
- Machine learning models
- Known neurotransmitter markers

**Note**: These are predictions and should be validated experimentally.

## Technical Features

### Responsive Design
- **Mobile-friendly** interface that adapts to different screen sizes
- **Touch-friendly** controls for tablets and smartphones
- **Optimized performance** for smooth browsing

### Interactive Elements
- **Sortable tables** - Click column headers to sort data
- **Filterable content** - Real-time filtering without page reloads
- **Expandable sections** - Click to show/hide detailed information
- **Hover tooltips** - Additional information on mouse hover

### Data Export
- **Printable pages** - Browser print function works with all pages
- **Bookmarkable URLs** - Save direct links to specific neuron types
- **Shareable content** - URLs can be shared with colleagues

## Dataset Information

**Source Database**: neuPrint (neuprint-cns.janelia.org)
**Dataset Version**: male-cns:v0.9
**Data Type**: Electron microscopy connectome data
**Species**: *Drosophila melanogaster*
**Resolution**: Synaptic-level connectivity

### Data Reliability
- All connectivity data is based on verified synaptic connections
- Neuron reconstructions are manually proofread
- Data undergoes continuous quality control and updates
- Some connections may be missed due to reconstruction gaps

### Data Limitations
- Dataset represents a snapshot of specific brain samples
- Not all neuron types may be completely reconstructed
- Some rare neuron types may have limited representation
- Connectivity patterns may vary between individual flies

## Citing This Data

When using data from this catalog, please cite:
1. The original neuPrint database and dataset
2. The specific dataset version (male-cns:v0.9)
3. The generation date of this catalog (2025-10-03)

For the most current citation information, visit the neuPrint database at neuprint-cns.janelia.org.

## Getting Help

### Troubleshooting
- **Slow loading**: Large neuron types may take time to load connectivity data
- **Browser compatibility**: Modern browsers recommended (Chrome, Firefox, Safari, Edge)
- **JavaScript required**: Enable JavaScript for full functionality

### Additional Resources
- **neuPrint documentation**: Available at the neuPrint website
- **Original research papers**: Listed in neuPrint database
- **Community forums**: neuPrint user community for technical questions

### Contact Information
For questions about the data or analysis methods, consult the neuPrint database documentation and associated publications.

---

*This catalog was automatically generated from neuPrint data on 2025-10-03 at 13:25:25 UTC. For the most up-to-date information, please consult the original neuPrint database.*