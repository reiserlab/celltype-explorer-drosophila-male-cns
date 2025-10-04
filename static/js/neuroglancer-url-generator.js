/**
 * Neuroglancer URL Generator
 *
 * This module provides functionality to generate Neuroglancer URLs dynamically
 * on the client side, replacing server-side template generation.
 * The template is embedded directly for file:// URL compatibility.
 */
// Embedded neuroglancer template - complete configuration as JavaScript object
const NEUROGLANCER_TEMPLATE = {
  "title": "WEBSITE_TITLE_PLACEHOLDER",
  "dimensions": {
    "x": [
      8e-9,
      "m"
    ],
    "y": [
      8e-9,
      "m"
    ],
    "z": [
      8e-9,
      "m"
    ]
  },
  "position": [
    48311.90234375,
    25295.765625,
    28509.505859375
  ],
  "crossSectionScale": 88.13122564876332,
  "projectionOrientation": [
    0,
    -0.002181659685447812,
    0,
    0.999997615814209
  ],
  "projectionScale": 99656.51830908704,
  "layers": [
    {
      "type": "image",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/em/em-clahe-jpeg",
        "subsources": {
          "default": true
        },
        "enableDefaultSubsources": false
      },
      "tab": "rendering",
      "name": "em-clahe"
    },
    {
      "type": "segmentation",
      "source": [
        {
          "url": "precomputed://gs://flyem-male-cns/v0.9/segmentation",
          "subsources": {
            "default": true,
            "mesh": true
          },
          "enableDefaultSubsources": false
        },
        {
          "url": "precomputed://gs://flyem-male-cns/v0.9/segmentation/type_property",
          "subsources": {
            "default": true
          },
          "enableDefaultSubsources": false
        },
        {
          "url": "precomputed://gs://flyem-male-cns/v0.9/segmentation/tags_property",
          "subsources": {
            "default": true
          },
          "enableDefaultSubsources": false
        },
        {
          "url": "precomputed://gs://flyem-male-cns/v0.9/segmentation/numeric_properties",
          "subsources": {
            "default": true
          },
          "enableDefaultSubsources": false
        },
        {
          "url": "precomputed://gs://flyem-male-cns/v0.9/segmentation/instance_property",
          "enableDefaultSubsources": false
        },
        {
          "url": "precomputed://gs://flyem-male-cns/v0.9/segmentation/flywireType_property",
          "enableDefaultSubsources": false
        },
        {
          "url": "precomputed://gs://flyem-male-cns/v0.9/segmentation/meshes-malecns/single-res-meshes",
          "enableDefaultSubsources": false
        }
      ],
      "toolBindings": {
        "Q": "selectSegments"
      },
      "tab": "segments",
      "segments": [],
      "segmentQuery": "NEURON_QUERY_PLACEHOLDER",
      "name": "cns-seg"
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/fullbrain-major-shells",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "rendering",
      "selectedAlpha": 0,
      "saturation": 0,
      "meshSilhouetteRendering": 7,
      "segments": [
        "1",
        "2",
        "3"
      ],
      "segmentDefaultColor": "#ffffff",
      "name": "brain-neuropil-shell"
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/brain-shell-v2.2",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "rendering",
      "selectedAlpha": 0,
      "saturation": 0,
      "meshSilhouetteRendering": 7,
      "segments": [
        "1"
      ],
      "segmentDefaultColor": "#ffffff",
      "name": "brain-shell",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/brain-shell-with-lamina-v2.1",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "rendering",
      "selectedAlpha": 0,
      "saturation": 0,
      "meshSilhouetteRendering": 7,
      "segments": [
        "1"
      ],
      "segmentDefaultColor": "#ffffff",
      "name": "brain-shell-with-lamina",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/vnc-neuropil-shell",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "rendering",
      "selectedAlpha": 0,
      "saturation": 0,
      "meshSilhouetteRendering": 7,
      "segments": [
        "1"
      ],
      "segmentDefaultColor": "#ffffff",
      "name": "vnc-neuropil-shell"
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/vnc-shell",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "rendering",
      "selectedAlpha": 0,
      "saturation": 0,
      "meshSilhouetteRendering": 7,
      "segments": [
        "1"
      ],
      "segmentDefaultColor": "#ffffff",
      "name": "vnc-shell",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/fullbrain-roi-v4",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "selectedAlpha": 0,
      "meshSilhouetteRendering": 4,
      "segments": [
        "1",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "2",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "3",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "4",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "5",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "6",
        "60",
        "61",
        "62",
        "63",
        "64",
        "65",
        "66",
        "67",
        "68",
        "69",
        "7",
        "70",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "8",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "9",
        "93",
        "94",
        "96"
      ],
      "name": "brain-neuropils"
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/malecns-vnc-neuropil-roi-v0",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "selectedAlpha": 0,
      "meshSilhouetteRendering": 4,
      "segments": [
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "5",
        "6",
        "7",
        "8",
        "9"
      ],
      "name": "vnc-neuropils"
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/malecns-vnc-nerve-roi-v2",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "meshSilhouetteRendering": 3,
      "segments": [
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "2",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "3",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ],
      "name": "vnc-nerves",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/malecns-major-compartments-v2",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "tab": "segments",
      "meshSilhouetteRendering": 4,
      "segments": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "name": "major-compartments",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": "precomputed://gs://flyem-male-cns/rois/pointcloud-shells",
      "pick": false,
      "tab": "segments",
      "selectedAlpha": 0,
      "saturation": 0,
      "segments": [
        "1",
        "2"
      ],
      "segmentDefaultColor": "#ffffff",
      "name": "pointcloud-shells",
      "archived": true
    },
    {
      "type": "annotation",
      "source": "precomputed://gs://flyem-male-cns/v0.9/malecns-v0.9-soma-points",
      "tab": "rendering",
      "annotationColor": "#ffffff",
      "shader": "#uicontrol float radius slider(min=1, max=30, step=1, default=5)\n#uicontrol bool color_by_birthtime checkbox(default=false)\n#uicontrol bool color_by_itoleeHl checkbox(default=false)\n#uicontrol bool color_by_trumanHl checkbox(default=false)\n\n#uicontrol bool color_by_top_input_compartment checkbox(default=false)\n#uicontrol bool color_by_top_output_compartment checkbox(default=false)\n\n#uicontrol bool color_by_top_input_neuropil checkbox(default=false)\n#uicontrol bool color_by_top_output_neuropil checkbox(default=false)\n\n#uicontrol bool color_by_optic_column checkbox(default=false)\n#uicontrol bool color_by_top_input_optic_layer checkbox(default=false)\n#uicontrol bool color_by_top_output_optic_layer checkbox(default=false)\n\n#uicontrol int color_seed slider(min=0, max=4294967295, default=0);\n#uicontrol bool hide_uncolored checkbox(default=true)\n#uicontrol bool hide_vnc checkbox(default=false)\n#uicontrol bool hide_brain checkbox(default=false)\n#uicontrol bool hide_tosoma checkbox(default=false)\n\n\nuint hash_function(uint state, uint value) {\n    uint k1 = 0xcc9e2d51u;\n    uint k2 = 0x1b873593u;\n    \n    value = value * k1;\n    value = (value << 15) | (value >> 17);\n    value = value * k2;\n    state = state ^ value;\n    state = (state << 13) | (state >> 19);\n    state = state * 5u + 0xe6546b64u;\n    \n    return state;\n}\n\nvec3 hsv_to_rgb(float h, float s, float v) {\n    h *= 6.0;\n    float hue_index = floor(h);\n    float remainder = h - hue_index;\n    float val1 = v * (1.0 - s);\n    float val2 = v * (1.0 - (s * remainder));\n    float val3 = v * (1.0 - (s * (1.0 - remainder)));\n    \n    int hue_remainder = int(hue_index) % 6;\n    \n    if (hue_remainder == 0) {\n        return vec3(v, val3, val1);\n    } else if (hue_remainder == 1) {\n        return vec3(val2, v, val1);\n    } else if (hue_remainder == 2) {\n        return vec3(val1, v, val3);\n    } else if (hue_remainder == 3) {\n        return vec3(val1, val2, v);\n    } else if (hue_remainder == 4) {\n        return vec3(val3, val1, v);\n    } else { // hue_remainder == 5\n        return vec3(v, val1, val2);\n    }\n}\n\nvec3 color_from_segment_id(uint color_seed_, uint segment_id) {\n    uint result = hash_function(color_seed_, segment_id);\n    \n    // We only support 32-bit segment IDs, so newvalue is always 0,\n    // and (id >> 32) would be undefined behavior!\n    // uint newvalue = id >> 32;\n    \n    uint newvalue = 0u;\n    uint result2 = hash_function(result, newvalue);\n    \n    float c0 = float(result2 & 0xFFu) / 255.0;\n    float c1 = float((result2 >> 8) & 0xFFu) / 255.0;\n    \n    float h = c0;\n    float s = 0.5 + 0.5 * c1;\n    float v = 1.0;\n    \n    return hsv_to_rgb(h, s, v);\n}\n\nvoid set_color_for_id(uint id) {\n    if (id == 0u) {\n        if (hide_uncolored) {\n            discard;\n        }\n        //setPointMarkerBorderWidth(0.2);\n        //setPointMarkerColor(vec4(vec3(0.0, 0.0, 0.0), 0.0));\n        //setPointMarkerBorderColor(vec3(1.0, 1.0, 1.0));\n    }\n    else {\n        setColor(color_from_segment_id(uint(color_seed), id));\n    }\n}\n\nvoid main() {\n    setPointMarkerSize(radius);\n    setPointMarkerBorderWidth(1.0);\n    setPointMarkerBorderColor(vec3(0.0, 0.0, 0.0));\n    \n    if (hide_vnc && prop_is_vnc() == 1u) {\n        discard;\n    }\n    \n    if (hide_brain && prop_is_vnc() == 0u) {\n        discard;\n    }\n    \n    if (prop_kind() == 1u && hide_tosoma)\n    discard;\n    \n    // default color: soma vs. tosoma\n    if (prop_kind() == 1u) {\n        setColor(vec3(0.0, 1.0, 1.0));\n    }\n    else {\n        setColor(vec3(1.0, 1.0, 1.0));\n    }\n    \n    if (\n        int(color_by_top_input_compartment) +\n        int(color_by_top_output_compartment) +\n        int(color_by_top_input_neuropil) +\n        int(color_by_top_output_neuropil) +\n        int(color_by_top_input_optic_layer) +\n        int(color_by_top_output_optic_layer) +\n        int(color_by_optic_column) +\n        int(color_by_birthtime) +\n        int(color_by_itoleeHl || color_by_trumanHl)\n        > 1) {\n        discard;\n    }\n        \n    if (color_by_top_input_compartment) {\n        set_color_for_id(uint(prop_top_input_compartment()));\n        return;\n    }\n    if (color_by_top_output_compartment) {\n        set_color_for_id(uint(prop_top_output_compartment()));\n        return;\n    }\n    if (color_by_top_input_neuropil) {\n        set_color_for_id(uint(prop_top_input_neuropil()));\n        return;\n    }\n    if (color_by_top_output_neuropil) {\n        set_color_for_id(uint(prop_top_output_neuropil()));\n        return;\n    }\n    if (color_by_top_input_optic_layer) {\n        set_color_for_id(uint(prop_top_input_optic_layer()));\n        return;\n    }\n    if (color_by_top_output_optic_layer) {\n        set_color_for_id(uint(prop_top_output_optic_layer()));\n        return;\n    }\n    if (color_by_optic_column) {\n        set_color_for_id(uint(prop_assigned_optic_column()));\n        return;\n    }\n    if (color_by_birthtime) {\n        set_color_for_id(uint(prop_birthtime()));\n        return;\n    }\n    \n    // We permit showing both itoleeHl and trumanHl simultaneously\n    if (color_by_itoleeHl && color_by_trumanHl) {\n        uint id = bool(prop_itoleeHl()) ? uint(prop_itoleeHl()) : uint(prop_trumanHl());\n        set_color_for_id(id);\n        return;\n    }\n    \n    if (color_by_itoleeHl) {\n        set_color_for_id(uint(prop_itoleeHl()));\n        return;\n    }\n    if (color_by_trumanHl) {\n        set_color_for_id(uint(prop_trumanHl()));\n        return;\n    }\n}",
      "shaderControls": {
        "hide_tosoma": true
      },
      "linkedSegmentationLayer": {
        "body": "cns-seg"
      },
      "filterBySegmentation": [
        "body"
      ],
      "name": "soma-points",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/v0.9/malecns-v0.9-nuclei-seg-16nm",
        "subsources": {
          "default": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "tab": "rendering",
      "segments": [],
      "name": "nuclei",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": [
        {
          "url": "precomputed://gs://flyem-male-cns/v0.9/segmentation/meshes-malecns-mirrored/single-res-meshes",
          "subsources": {
            "default": true,
            "properties": true
          },
          "enableDefaultSubsources": false
        },
        {
          "url": "precomputed://gs://flyem-male-cns/v0.9/segmentation/skeletons-malecns-mirrored/skeletons-precomputed",
          "subsources": {
            "properties": true
          },
          "enableDefaultSubsources": false
        }
      ],
      "tab": "segments",
      "linkedSegmentationColorGroup": "cns-seg",
      "segments": [],
      "name": "cns-mirror",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/fullbrain-defects",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "tab": "segments",
      "meshSilhouetteRendering": 2,
      "segments": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "name": "brain-defects",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/vnc-defects",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "meshSilhouetteRendering": 2,
      "segments": [
        "1",
        "2"
      ],
      "name": "vnc-defects",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/ME(R)-columns-v8",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "segments": [],
      "name": "ME(R)-columns",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/ME(R)-layers-v8",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "segments": [],
      "name": "ME(R)-layers",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/LO(R)-columns-v8",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "segments": [],
      "name": "LO(R)-columns",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/LO(R)-layers-v8",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "segments": [],
      "name": "LO(R)-layers",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/LOP(R)-columns-v8",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "segments": [],
      "name": "LOP(R)-columns",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/LOP(R)-layers-v8",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "segments": [],
      "name": "LOP(R)-layers",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/ME(L)-columns-v3",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "segments": [],
      "name": "ME(L)-columns",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/ME(L)-layers-v3",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "segments": [],
      "name": "ME(L)-layers",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/LO(L)-columns-v3",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "segments": [],
      "name": "LO(L)-columns",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/LO(L)-layers-v3",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "segments": [],
      "name": "LO(L)-layers",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/LOP(L)-columns-v3",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "segments": [],
      "name": "LOP(L)-columns",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/LOP(L)-layers-v3",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "segments",
      "segments": [],
      "name": "LOP(L)-layers",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/OL(R)-v0",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "rendering",
      "meshSilhouetteRendering": 4,
      "segments": [
        "1"
      ],
      "segmentDefaultColor": "#ffffff",
      "name": "OL(R)",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/rois/OL(R)-release",
        "subsources": {
          "default": true,
          "properties": true,
          "mesh": true
        },
        "enableDefaultSubsources": false
      },
      "pick": false,
      "tab": "rendering",
      "meshSilhouetteRendering": 4,
      "segments": [
        "1"
      ],
      "segmentDefaultColor": "#00ffff",
      "name": "OL(R)-release-mask",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": [
        "precomputed://gs://flyem-male-cns/rois/hemibrain_mask_in_malecns_coords/mesh",
        "precomputed://gs://flyem-male-cns/rois/hemibrain_mask_in_malecns_coords/segment_properties"
      ],
      "tab": "segments",
      "objectAlpha": 0.41,
      "segments": [
        "1"
      ],
      "segmentDefaultColor": "#ffffff",
      "name": "hemibrain-region",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": "gs://flyem-male-cns/hemibrain2mcns_meshes/|neuroglancer-precomputed:",
      "tab": "segments",
      "segments": [],
      "segmentDefaultColor": "#e90002",
      "name": "hemibrain-meshes",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": "gs://flyem-male-cns/flywire2mcns_meshes/783/|neuroglancer-precomputed:",
      "tab": "segments",
      "segments": [],
      "segmentDefaultColor": "#d400ff",
      "name": "flywire-meshes",
      "archived": true
    },
    {
      "type": "segmentation",
      "source": {
        "url": "precomputed://gs://flyem-male-cns/malecns-semantic-masks",
        "subsources": {
          "default": true,
          "properties": true
        },
        "enableDefaultSubsources": false
      },
      "tab": "segments",
      "segments": [],
      "name": "semantic-masks",
      "archived": true
    },
    {
      "type": "annotation",
      "source": "precomputed://gs://flyem-male-cns/v0.9/male-cns-v0.9-synapses-precomputed/",
      "tab": "rendering",
      "annotationColor": "#000000",
      "codeVisible": false,
      "shader": "#uicontrol bool show_pre checkbox(default=true)\n#uicontrol bool show_post_partners checkbox(default=false)\n\n#uicontrol float pre_size slider(min=1.0, max=20.0, default=6.0)\n#uicontrol float post_size slider(min=1.0, max=20.0, default=4.0)\n\n#uicontrol vec3 pre_default color(default=\"red\")\n#uicontrol vec3 post_default color(default=\"blue\")\n\n#define acetylcholine_code 0\n#define dopamine_code 1\n#define gaba_code 2\n#define glutamate_code 3\n#define histamine_code 4\n#define octopamine_code 5\n#define serotonin_code 6\n#define unknown_nt_code 7\n\n#uicontrol bool color_by_neurotransmitter checkbox(default=true)\n\n#uicontrol vec3 acetylcholine color(default=\"#1f77b4\")\n#uicontrol vec3 dopamine color(default=\"#ff7f0e\")\n#uicontrol vec3 gaba color(default=\"#2ca02c\")\n#uicontrol vec3 glutamate color(default=\"#d62728\")\n#uicontrol vec3 histamine color(default=\"#9467bd\")\n#uicontrol vec3 octopamine color(default=\"#8c564b\")\n#uicontrol vec3 serotonin color(default=\"#e377c2\")\n#uicontrol vec3 unknown_nt color(default=\"#7f7f7f\")\n\n#uicontrol bool color_by_nt_probability checkbox(default=false)\n#uicontrol bool color_by_nt_confidence checkbox(default=false)\n\n#uicontrol bool color_by_tbar_fanout checkbox(default=false)\n#uicontrol float max_fanout_display slider(min=1.0, max=20.0, step=1.0, default=10.0)\n\n#define unknown_compartment_code 0\n#define axon_code 1\n#define dendrite_code 2\n#define linker_code 3\n#define cell_body_fiber_code 4\n\n#uicontrol bool color_by_compartment checkbox(default=true)\n\n#uicontrol vec3 axon color(default=\"#1f77b4\")\n#uicontrol vec3 dendrite color(default=\"#ff7f0e\")\n#uicontrol vec3 linker color(default=\"#2ca02c\")\n#uicontrol vec3 cell_body_fiber color(default=\"#d62728\")\n#uicontrol vec3 unknown_compartment color(default=\"#7f7f7f\")\n\n#uicontrol int color_seed slider(min=0, max=4294967295, default=0);\n#uicontrol bool color_by_neuropil checkbox(default=true)\n#uicontrol bool color_by_optic_column checkbox(default=false)\n#uicontrol bool color_by_optic_layer checkbox(default=false)\n#uicontrol bool color_by_neuron_id checkbox(default=false)\n#uicontrol bool hide_uncolored checkbox(default=true)\n\nvec3 viridis(float t) {\n\n    const vec3 c0 = vec3(0.2777273272234177, 0.005407344544966578, 0.3340998053353061);\n    const vec3 c1 = vec3(0.1050930431085774, 1.404613529898575, 1.384590162594685);\n    const vec3 c2 = vec3(-0.3308618287255563, 0.214847559468213, 0.09509516302823659);\n    const vec3 c3 = vec3(-4.634230498983486, -5.799100973351585, -19.33244095627987);\n    const vec3 c4 = vec3(6.228269936347081, 14.17993336680509, 56.69055260068105);\n    const vec3 c5 = vec3(4.776384997670288, -13.74514537774601, -65.35303263337234);\n    const vec3 c6 = vec3(-5.435455855934631, 4.645852612178535, 26.3124352495832);\n\n    return c0+t*(c1+t*(c2+t*(c3+t*(c4+t*(c5+t*c6)))));\n}\n  \nuint hash_function(uint state, uint value) {\n    uint k1 = 0xcc9e2d51u;\n    uint k2 = 0x1b873593u;\n    \n    value = value * k1;\n    value = (value << 15) | (value >> 17);\n    value = value * k2;\n    state = state ^ value;\n    state = (state << 13) | (state >> 19);\n    state = state * 5u + 0xe6546b64u;\n    \n    return state;\n}\n\nvec3 hsv_to_rgb(float h, float s, float v) {\n    h *= 6.0;\n    float hue_index = floor(h);\n    float remainder = h - hue_index;\n    float val1 = v * (1.0 - s);\n    float val2 = v * (1.0 - (s * remainder));\n    float val3 = v * (1.0 - (s * (1.0 - remainder)));\n    \n    int hue_remainder = int(hue_index) % 6;\n    \n    if (hue_remainder == 0) {\n        return vec3(v, val3, val1);\n    } else if (hue_remainder == 1) {\n        return vec3(val2, v, val1);\n    } else if (hue_remainder == 2) {\n        return vec3(val1, v, val3);\n    } else if (hue_remainder == 3) {\n        return vec3(val1, val2, v);\n    } else if (hue_remainder == 4) {\n        return vec3(val3, val1, v);\n    } else { // hue_remainder == 5\n        return vec3(v, val1, val2);\n    }\n}\n\nvec3 color_from_segment_id(uint color_seed_, uint segment_id) {\n    uint result = hash_function(color_seed_, segment_id);\n    \n    // We only support 32-bit segment IDs, so newvalue is always 0,\n    // and (id >> 32) would be undefined behavior!\n    // uint newvalue = id >> 32;\n    \n    uint newvalue = 0u;\n    uint result2 = hash_function(result, newvalue);\n    \n    float c0 = float(result2 & 0xFFu) / 255.0;\n    float c1 = float((result2 >> 8) & 0xFFu) / 255.0;\n    \n    float h = c0;\n    float s = 0.5 + 0.5 * c1;\n    float v = 1.0;\n    \n    return hsv_to_rgb(h, s, v);\n}\n\nvec3 get_color_for_id(uint id) {\n    if (id == 0u) {\n        if (hide_uncolored) {\n            discard;\n        }\n        //setPointMarkerBorderWidth(0.2);\n        vec3 white = vec3(1.0, 1.0, 1.0);\n        return white;\n    }\n    else {\n        return color_from_segment_id(uint(color_seed), id);\n    }\n}\n\nvec3 get_nt_color() {\n    vec3 pre_color;\n    \n    switch (int(prop_predicted_nt())) {\n        case acetylcholine_code:\n            pre_color = acetylcholine;\n            break;\n        case dopamine_code:\n            pre_color = dopamine;\n            break;\n        case gaba_code:\n            pre_color = gaba;\n            break;\n        case glutamate_code:\n            pre_color = glutamate;\n            break;\n        case histamine_code:\n            pre_color = histamine;\n            break;\n        case octopamine_code:\n            pre_color = octopamine;\n            break;\n        case serotonin_code:\n            pre_color = serotonin;\n            break;\n        case unknown_nt_code:\n            pre_color = unknown_nt;\n            break;\n        default:\n            pre_color = vec3(1.0, 1.0, 1.0);\n            break;\n    }\n    return pre_color;\n}\n\nvec3 get_compartment_color(int compartment_code) {\n    vec3 color;\n\n    switch (compartment_code) {\n        case axon_code:\n            color = axon;\n            break;\n        case dendrite_code:\n            color = dendrite;\n            break;\n        case linker_code:\n            color = linker;\n            break;\n        case cell_body_fiber_code:\n            color = cell_body_fiber;\n            break;\n        case unknown_compartment_code:\n            color = unknown_compartment;\n            break;\n        default:\n            color = vec3(1.0, 1.0, 1.0);\n            break;\n    }\n    return color;\n}\n\nvoid main() {    \n    vec3 pre_color = pre_default;\n    vec3 post_color = post_default;\n    bool show_post = show_post_partners;\n\n    setLineColor(vec3(1.0, 1.0, 1.0));\n    setEndpointMarkerColor(\n        vec4(pre_color, 1.0), vec4(post_color, 1.0)\n    );\n\n    if (int(color_by_neurotransmitter) + \n        int(color_by_nt_probability) + \n        int(color_by_nt_confidence) + \n        int(color_by_tbar_fanout) + \n        int(color_by_compartment) + \n        int(color_by_neuropil) + \n        int(color_by_optic_column) + \n        int(color_by_optic_layer) + \n        int(color_by_neuron_id)\n    > 1) {\n        // No special color if the user has invalid selections.\n    }\n    else if (color_by_neurotransmitter) {\n        pre_color = get_nt_color();\n    }\n    else if (color_by_nt_probability) {\n       pre_color = viridis(prop_predicted_nt_prob());\n    }\n    else if (color_by_nt_confidence) {\n       pre_color = viridis(prop_nt_tbar_confidence_score());\n    }\n    else if (color_by_tbar_fanout) {\n       float display_fanout = min(float(max_fanout_display), float(prop_tbar_fanout())) / float(max_fanout_display);\n       pre_color = viridis(display_fanout);\n    }\n    else if (color_by_compartment) {\n        pre_color = get_compartment_color(int(prop_compartment_pre()));\n        post_color = get_compartment_color(int(prop_compartment_post()));\n    }\n    else if (color_by_neuropil) {\n        pre_color = post_color = get_color_for_id(uint(prop_primary_roi()));\n    }\n    else if (color_by_optic_column) {\n        pre_color = post_color = get_color_for_id(uint(prop_optic_column()));\n    }\n    else if (color_by_optic_layer) {\n        pre_color = post_color = get_color_for_id(uint(prop_optic_layer()));\n    }\n    else if (color_by_neuron_id) {\n        pre_color = get_color_for_id(uint(prop_body_pre_u32()));\n        post_color = get_color_for_id(uint(prop_body_post_u32()));\n    }\n\n    setEndpointMarkerColor(\n        vec4(pre_color, 1.0), vec4(post_color, 1.0)\n    );\n\n    if (show_pre && show_post) {\n        setLineWidth(1.0);\n        setEndpointMarkerSize(pre_size, post_size);\n    }\n    else if (show_post) {\n        setLineWidth(0.0);\n        setEndpointMarkerSize(0.0, post_size);\n    }\n    else if (show_pre) {\n        setLineWidth(0.0);\n        setEndpointMarkerSize(pre_size, 0.0);\n    }\n    else {\n        setLineWidth(0.0);\n        setEndpointMarkerSize(0.0, 0.0);\n    }\n}\n",
      "shaderControls": {
        "color_by_neurotransmitter": false,
        "color_by_compartment": false,
        "color_by_neuropil": false
      },
      "linkedSegmentationLayer": {
        "body_pre": "cns-seg",
        "body_post": "cns-seg"
      },
      "filterBySegmentation": [
        "body_pre"
      ],
      "name": "presyn",
      "visible": false
    },
    {
      "type": "annotation",
      "source": "precomputed://gs://flyem-male-cns/v0.9/male-cns-v0.9-synapses-precomputed/",
      "tab": "rendering",
      "codeVisible": false,
      "shader": "#uicontrol bool show_pre_partners checkbox(default=true)\n#uicontrol bool show_post checkbox(default=false)\n\n#uicontrol float pre_size slider(min=1.0, max=20.0, default=6.0)\n#uicontrol float post_size slider(min=1.0, max=20.0, default=4.0)\n\n#uicontrol vec3 pre_default color(default=\"red\")\n#uicontrol vec3 post_default color(default=\"blue\")\n\n#define acetylcholine_code 0\n#define dopamine_code 1\n#define gaba_code 2\n#define glutamate_code 3\n#define histamine_code 4\n#define octopamine_code 5\n#define serotonin_code 6\n#define unknown_nt_code 7\n\n#uicontrol bool color_by_neurotransmitter checkbox(default=true)\n\n#uicontrol vec3 acetylcholine color(default=\"#1f77b4\")\n#uicontrol vec3 dopamine color(default=\"#ff7f0e\")\n#uicontrol vec3 gaba color(default=\"#2ca02c\")\n#uicontrol vec3 glutamate color(default=\"#d62728\")\n#uicontrol vec3 histamine color(default=\"#9467bd\")\n#uicontrol vec3 octopamine color(default=\"#8c564b\")\n#uicontrol vec3 serotonin color(default=\"#e377c2\")\n#uicontrol vec3 unknown_nt color(default=\"#7f7f7f\")\n\n#uicontrol bool color_by_nt_probability checkbox(default=false)\n#uicontrol bool color_by_nt_confidence checkbox(default=false)\n\n#uicontrol bool color_by_tbar_fanout checkbox(default=false)\n#uicontrol float max_fanout_display slider(min=1.0, max=20.0, step=1.0, default=10.0)\n\n#define unknown_compartment_code 0\n#define axon_code 1\n#define dendrite_code 2\n#define linker_code 3\n#define cell_body_fiber_code 4\n\n#uicontrol bool color_by_compartment checkbox(default=true)\n\n#uicontrol vec3 axon color(default=\"#1f77b4\")\n#uicontrol vec3 dendrite color(default=\"#ff7f0e\")\n#uicontrol vec3 linker color(default=\"#2ca02c\")\n#uicontrol vec3 cell_body_fiber color(default=\"#d62728\")\n#uicontrol vec3 unknown_compartment color(default=\"#7f7f7f\")\n\n#uicontrol int color_seed slider(min=0, max=4294967295, default=0);\n#uicontrol bool color_by_neuropil checkbox(default=true)\n#uicontrol bool color_by_optic_column checkbox(default=false)\n#uicontrol bool color_by_optic_layer checkbox(default=false)\n#uicontrol bool color_by_neuron_id checkbox(default=false)\n#uicontrol bool hide_uncolored checkbox(default=true)\n\nvec3 viridis(float t) {\n\n    const vec3 c0 = vec3(0.2777273272234177, 0.005407344544966578, 0.3340998053353061);\n    const vec3 c1 = vec3(0.1050930431085774, 1.404613529898575, 1.384590162594685);\n    const vec3 c2 = vec3(-0.3308618287255563, 0.214847559468213, 0.09509516302823659);\n    const vec3 c3 = vec3(-4.634230498983486, -5.799100973351585, -19.33244095627987);\n    const vec3 c4 = vec3(6.228269936347081, 14.17993336680509, 56.69055260068105);\n    const vec3 c5 = vec3(4.776384997670288, -13.74514537774601, -65.35303263337234);\n    const vec3 c6 = vec3(-5.435455855934631, 4.645852612178535, 26.3124352495832);\n\n    return c0+t*(c1+t*(c2+t*(c3+t*(c4+t*(c5+t*c6)))));\n}\n  \nuint hash_function(uint state, uint value) {\n    uint k1 = 0xcc9e2d51u;\n    uint k2 = 0x1b873593u;\n    \n    value = value * k1;\n    value = (value << 15) | (value >> 17);\n    value = value * k2;\n    state = state ^ value;\n    state = (state << 13) | (state >> 19);\n    state = state * 5u + 0xe6546b64u;\n    \n    return state;\n}\n\nvec3 hsv_to_rgb(float h, float s, float v) {\n    h *= 6.0;\n    float hue_index = floor(h);\n    float remainder = h - hue_index;\n    float val1 = v * (1.0 - s);\n    float val2 = v * (1.0 - (s * remainder));\n    float val3 = v * (1.0 - (s * (1.0 - remainder)));\n    \n    int hue_remainder = int(hue_index) % 6;\n    \n    if (hue_remainder == 0) {\n        return vec3(v, val3, val1);\n    } else if (hue_remainder == 1) {\n        return vec3(val2, v, val1);\n    } else if (hue_remainder == 2) {\n        return vec3(val1, v, val3);\n    } else if (hue_remainder == 3) {\n        return vec3(val1, val2, v);\n    } else if (hue_remainder == 4) {\n        return vec3(val3, val1, v);\n    } else { // hue_remainder == 5\n        return vec3(v, val1, val2);\n    }\n}\n\nvec3 color_from_segment_id(uint color_seed_, uint segment_id) {\n    uint result = hash_function(color_seed_, segment_id);\n    \n    // We only support 32-bit segment IDs, so newvalue is always 0,\n    // and (id >> 32) would be undefined behavior!\n    // uint newvalue = id >> 32;\n    \n    uint newvalue = 0u;\n    uint result2 = hash_function(result, newvalue);\n    \n    float c0 = float(result2 & 0xFFu) / 255.0;\n    float c1 = float((result2 >> 8) & 0xFFu) / 255.0;\n    \n    float h = c0;\n    float s = 0.5 + 0.5 * c1;\n    float v = 1.0;\n    \n    return hsv_to_rgb(h, s, v);\n}\n\nvec3 get_color_for_id(uint id) {\n    if (id == 0u) {\n        if (hide_uncolored) {\n            discard;\n        }\n        //setPointMarkerBorderWidth(0.2);\n        vec3 white = vec3(1.0, 1.0, 1.0);\n        return white;\n    }\n    else {\n        return color_from_segment_id(uint(color_seed), id);\n    }\n}\n\nvec3 get_nt_color() {\n    vec3 pre_color;\n    \n    switch (int(prop_predicted_nt())) {\n        case acetylcholine_code:\n            pre_color = acetylcholine;\n            break;\n        case dopamine_code:\n            pre_color = dopamine;\n            break;\n        case gaba_code:\n            pre_color = gaba;\n            break;\n        case glutamate_code:\n            pre_color = glutamate;\n            break;\n        case histamine_code:\n            pre_color = histamine;\n            break;\n        case octopamine_code:\n            pre_color = octopamine;\n            break;\n        case serotonin_code:\n            pre_color = serotonin;\n            break;\n        case unknown_nt_code:\n            pre_color = unknown_nt;\n            break;\n        default:\n            pre_color = vec3(1.0, 1.0, 1.0);\n            break;\n    }\n    return pre_color;\n}\n\nvec3 get_compartment_color(int compartment_code) {\n    vec3 color;\n\n    switch (compartment_code) {\n        case axon_code:\n            color = axon;\n            break;\n        case dendrite_code:\n            color = dendrite;\n            break;\n        case linker_code:\n            color = linker;\n            break;\n        case cell_body_fiber_code:\n            color = cell_body_fiber;\n            break;\n        case unknown_compartment_code:\n            color = unknown_compartment;\n            break;\n        default:\n            color = vec3(1.0, 1.0, 1.0);\n            break;\n    }\n    return color;\n}\n\nvoid main() {    \n    vec3 pre_color = pre_default;\n    vec3 post_color = post_default;\n    bool show_pre = show_pre_partners;\n\n    setLineColor(vec3(1.0, 1.0, 1.0));\n    setEndpointMarkerColor(\n        vec4(pre_color, 1.0), vec4(post_color, 1.0)\n    );\n\n    if (int(color_by_neurotransmitter) + \n        int(color_by_nt_probability) + \n        int(color_by_nt_confidence) + \n        int(color_by_tbar_fanout) + \n        int(color_by_compartment) + \n        int(color_by_neuropil) + \n        int(color_by_optic_column) + \n        int(color_by_optic_layer) + \n        int(color_by_neuron_id)\n    > 1) {\n        // No special color if the user has invalid selections.\n    }\n    else if (color_by_neurotransmitter) {\n        pre_color = get_nt_color();\n    }\n    else if (color_by_nt_probability) {\n       pre_color = viridis(prop_predicted_nt_prob());\n    }\n    else if (color_by_nt_confidence) {\n       pre_color = viridis(prop_nt_tbar_confidence_score());\n    }\n    else if (color_by_tbar_fanout) {\n       float display_fanout = min(float(max_fanout_display), float(prop_tbar_fanout())) / float(max_fanout_display);\n       pre_color = viridis(display_fanout);\n    }\n    else if (color_by_compartment) {\n        pre_color = get_compartment_color(int(prop_compartment_pre()));\n        post_color = get_compartment_color(int(prop_compartment_post()));\n    }\n    else if (color_by_neuropil) {\n        pre_color = post_color = get_color_for_id(uint(prop_primary_roi()));\n    }\n    else if (color_by_optic_column) {\n        pre_color = post_color = get_color_for_id(uint(prop_optic_column()));\n    }\n    else if (color_by_optic_layer) {\n        pre_color = post_color = get_color_for_id(uint(prop_optic_layer()));\n    }\n    else if (color_by_neuron_id) {\n        pre_color = get_color_for_id(uint(prop_body_pre_u32()));\n        post_color = get_color_for_id(uint(prop_body_post_u32()));\n    }\n\n    setEndpointMarkerColor(\n        vec4(pre_color, 1.0), vec4(post_color, 1.0)\n    );\n\n    if (show_pre && show_post) {\n        setLineWidth(1.0);\n        setEndpointMarkerSize(pre_size, post_size);\n    }\n    else if (show_post) {\n        setLineWidth(0.0);\n        setEndpointMarkerSize(0.0, post_size);\n    }\n    else if (show_pre) {\n        setLineWidth(0.0);\n        setEndpointMarkerSize(pre_size, 0.0);\n    }\n    else {\n        setLineWidth(0.0);\n        setEndpointMarkerSize(0.0, 0.0);\n    }\n}\n",
      "shaderControls": {
        "color_by_neurotransmitter": false,
        "color_by_compartment": false,
        "color_by_neuropil": false
      },
      "linkedSegmentationLayer": {
        "body_post": "cns-seg",
        "body_pre": "cns-seg"
      },
      "filterBySegmentation": [
        "body_post"
      ],
      "name": "postsyn",
      "visible": false
    }
  ],
  "showSlices": false,
  "gpuMemoryLimit": 2000000000,
  "systemMemoryLimit": 4000000000,
  "selectedLayer": {
    "flex": 1.57,
    "size": 415,
    "visible": true,
    "layer": "cns-seg"
  },
  "layout": "3d",
  "selection": {
    "side": "left",
    "row": 3,
    "flex": 0.5,
    "visible": false
  },
  "layerListPanel": {
    "flex": 0.93
  }
};

// Dataset information for conditional behavior
const DATASET_NAME = "male-cns:v0.9";
const IS_FAFB_DATASET = DATASET_NAME.toLowerCase().includes("fafb");

// Neuroglancer base URL from configuration
const NEUROGLANCER_BASE_URL = "https://neuroglancer-demo.appspot.com";


/* ────────────────────────────────────────────────────────────────────────── */
/* Background colour                                                          */
/* ────────────────────────────────────────────────────────────────────────── */

// Theme → NG projection background color
const BG_BY_THEME = { dark: "#1a1a1a", light: "#ffffff" };
let currentNgTheme = "dark";
let currentProjectionBg = BG_BY_THEME[currentNgTheme];

/* ────────────────────────────────────────────────────────────────────────── */
/* Connectivity partners: click-to-toggle bodyIds per type                    */
/* ──────────────────────────────────────────────────────────────────────────


 * Wire click-to-toggle for upstream/downstream partner types in the connectivity tables.
 * Toggle rule:
 *  - If *all* bodyIds for the clicked type are already selected => remove them (OFF).
 *  - Otherwise => add them all (ON).
 * @param {{
 *   websiteTitle: string,
 *   visibleNeurons?: (string|number)[],
 *   neuronQuery?: string,
 *   visibleRois?: string[]
 * }}
 */

// Robust JSON.parse for data-body-ids
const safeParseIds = (s) => {
  try {
    const v = JSON.parse(s || "[]");
    return Array.isArray(v) ? v : []; // coalesce "null" → []
  } catch {
    return [];
  }
};

/**
 * Get all body IDs that come from connectivity partners
 * @returns {Set<string>} Set of all body IDs from partner cells
 */
function getAllConnectivityBodyIds() {
  const connectivityBodyIds = new Set();
  document.querySelectorAll("td.p-c").forEach((td) => {
    const bodyIds = safeParseIds(td.dataset.bodyIds);
    bodyIds.forEach((id) => connectivityBodyIds.add(String(id)));
  });
  return connectivityBodyIds;
}

/**
 * Check if any connectivity body IDs are currently active in visibleNeurons
 * @param {string[]} visibleNeurons - Array of currently visible neuron IDs
 * @returns {boolean} True if any connectivity body IDs are active
 */
function hasActiveConnectivityBodies(visibleNeurons) {
  const connectivityBodyIds = getAllConnectivityBodyIds();
  const visibleSet = new Set((visibleNeurons || []).map(String));

  console.log(
    "[CONNECTIVITY CHECK] connectivityBodyIds:",
    Array.from(connectivityBodyIds),
    "visibleNeurons:",
    visibleNeurons,
  );

  for (const bodyId of connectivityBodyIds) {
    if (visibleSet.has(bodyId)) {
      console.log(
        "[CONNECTIVITY ACTIVE] Found active connectivity body:",
        bodyId,
      );
      return true;
    }
  }
  return false;
}

function syncConnectivityCheckboxes(pageData, limitToDirection = null) {
  const pd = pageData;
  const selected = new Set((pd.visibleNeurons || []).map(String));
  // define tableSelector safely
  const tableSelector = limitToDirection
    ? limitToDirection === "upstream"
      ? "#upstream-table"
      : "#downstream-table"
    : "";

  const cellSelector = limitToDirection ? `${tableSelector} td.p-c` : "td.p-c";

  document.querySelectorAll(cellSelector).forEach((td) => {
    // Get connected bodyIds from table
    const bodyIds = safeParseIds(td.dataset.bodyIds);

    // Check if bodyIds is empty
    const hasNoBodyIds = bodyIds.length === 0;

    // Determine if all body IDs are currently selected
    const allOn =
      bodyIds.length > 0 && bodyIds.every((id) => selected.has(String(id)));

    // Create or update checkbox
    let checkbox = td.querySelector("input[type='checkbox']");
    if (!checkbox) {
      checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "";
      const plural = bodyIds.length > 1 ? "s" : "";
      checkbox.title = `Toggle neuron ${plural} ${bodyIds.join(" and ")} in neuron visualization (above)`;
      checkbox.setAttribute("aria-label", `Toggle partner`);

      // Create label wrapper
      const label = document.createElement("label");
      label.className = "p-c-label";

      // Move existing content to label and add checkbox before
      const existingContent = td.innerHTML;
      label.innerHTML = existingContent;
      td.innerHTML = "";
      td.appendChild(checkbox);
      td.appendChild(label);
    }

    // Check if we should disable this checkbox based on partner type and current neuron
    const partnerType = td.dataset.partnerType;
    const currentNeuronType = pd.currentNeuronType;
    const shouldDisable = partnerType && currentNeuronType &&
                         partnerType === currentNeuronType &&
                         bodyIds.some(id => (pd.visibleNeurons || []).includes(id) || (pd.visibleNeurons || []).includes(String(id)));

    // Handle empty body IDs case or self-reference case
    if (hasNoBodyIds || shouldDisable) {
      if (hasNoBodyIds) {
        console.log("[CHECKBOX] Empty body IDs detected for partner cell:", td);
        td.classList.add("no-body-ids");
      }
      if (shouldDisable) {
        console.log("[CHECKBOX] Disabling checkbox for self-reference:", partnerType, "matches current neuron type:", currentNeuronType, "with visible bodyIds:", bodyIds);
        td.classList.add("self-reference");
      }
      checkbox.disabled = true;
      checkbox.checked = false;
      td.classList.remove("partner-on");
    } else {
      checkbox.disabled = false;
      td.classList.remove("no-body-ids", "self-reference");
      // Update checkbox state
      checkbox.checked = allOn;
      // Apply styling to the wrapper
      td.classList.toggle("partner-on", allOn);
    }
  });
}

function wireConnectivityCheckboxes(pageData) {
  const pd = pageData;

  // Handle user toggles using event delegation
  document.addEventListener("change", (e) => {
    const checkbox = e.target;
    if (!(checkbox instanceof HTMLInputElement) || checkbox.type !== "checkbox")
      return;

    const td = checkbox.closest("td.p-c");
    if (!td) return;

    // Skip interaction if checkbox is disabled (no body IDs)
    if (checkbox.disabled) {
      checkbox.checked = false;
      return;
    }

    // Only this cell’s IDs (keep original number types if provided)
    const cellIds = safeParseIds(td.dataset.bodyIds);
    if (cellIds.length === 0) {
      checkbox.checked = false;
      return;
    }

    // Track user intent
    const intended = checkbox.checked;

    // Build a string Set for comparisons
    const selStrings = new Set((pd.visibleNeurons || []).map(String));

    // Keep a numeric array for storage (important for Neuroglancer)
    let current = Array.isArray(pd.visibleNeurons)
      ? pd.visibleNeurons.slice()
      : [];

    // Helpers to keep string/numeric views consistent
    const addId = (id) => {
      const s = String(id);
      if (!selStrings.has(s)) {
        selStrings.add(s);
        current.push(id); // store numeric
      }
    };
    const removeId = (id) => {
      const s = String(id);
      if (selStrings.has(s)) {
        selStrings.delete(s);
        const idx = current.findIndex((x) => String(x) === s);
        if (idx !== -1) current.splice(idx, 1);
      }
    };

    if (intended) {
      // ON: add only this cell's IDs
      cellIds.forEach(addId);
    } else {
      // OFF: remove this cell’s IDs unless another checked cell still selects them
      const otherSelected = new Set();
      document.querySelectorAll("td.p-c").forEach((otherTd) => {
        if (otherTd === td) return;
        const otherCb = otherTd.querySelector("input[type='checkbox']");
        if (otherCb && otherCb.checked && !otherCb.disabled) {
          const ids = safeParseIds(otherTd.dataset.bodyIds);
          ids.forEach((id) => otherSelected.add(String(id)));
        }
      });

      cellIds.forEach((id) => {
        if (!otherSelected.has(String(id))) removeId(id);
      });
    }

    // Store back numeric IDs (critical for Neuroglancer resolution)
    pd.visibleNeurons = current;

    // Style just this cell
    td.classList.toggle("partner-on", intended);

    const ngVisibleNeurons = Array.isArray(pd.visibleNeurons)
      ? pd.visibleNeurons
      : [];
    const ngVisibleRois = Array.isArray(pd.visibleRois) ? pd.visibleRois : [];
    const ngQuery = typeof pd.neuronQuery === "string" ? pd.neuronQuery : "";

    // Update Neuroglancer
    try {
      updateNeuroglancerLinks(
        pd.websiteTitle,
        pd.visibleNeurons, // numeric IDs
        pd.neuronQuery || "",
        pd.visibleRois || [],
        pd.region || "",
        typeof currentProjectionBg !== "undefined" ? currentProjectionBg : null,
      );
    } catch (err) {
      console.error("[NG] updateNeuroglancerLinks failed:", err);
    }
  });

  // Initial sync
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () =>
      syncConnectivityCheckboxes(pd),
    );
  } else {
    syncConnectivityCheckboxes(pd);
  }

  // Re-sync after DataTables redraws (run once)
  if (window.jQuery && jQuery.fn && jQuery.fn.dataTable) {
    jQuery("#upstream-table, #downstream-table").on("draw.dt", () =>
      syncConnectivityCheckboxes(pd),
    );
    jQuery("#roi-table").on("draw.dt", () => {
      if (typeof syncRoiCheckboxes === "function") syncRoiCheckboxes();
      setTimeout(() => {
        const roiTable = document.getElementById("roi-table");
        if (roiTable) {
          roiTable.style.tableLayout = "fixed";
          roiTable.querySelectorAll("tbody td:first-child").forEach((cell) => {
            cell.style.width = "250px";
            cell.style.maxWidth = "250px";
          });
        }
      }, 10);
    });
  }
}

/* ────────────────────────────────────────────────────────────────────────── */
/* ROI checkboxes: create checkboxes, sync state, handle toggles              */
/* ────────────────────────────────────────────────────────────────────────── */

/**
 * Creates checkboxes for ROI cells and syncs their state with selectedRoiIds
 * For FAFB datasets, skips checkbox creation since neuroglancer data is not reliable
 */
function syncRoiCheckboxes() {
  document.querySelectorAll("td.roi-cell").forEach((td) => {
    const roiName = td.dataset.roiName;
    if (!roiName) return;

    // Check if it's a brain ROI or VNC neuropil
    let roiId = roiNameToId(roiName);
    if (!roiId) {
      roiId = vncNameToId(roiName);
    }
    if (!roiId) return;

    // Handle both single IDs and arrays of IDs for combined ROIs
    const roiIds = Array.isArray(roiId) ? roiId : [roiId];
    if (roiIds.length === 0) return;

    // Skip checkbox creation for FAFB datasets - neuroglancer data not reliable
    if (IS_FAFB_DATASET) {
      // Just apply width enforcement for consistent table layout
      td.style.width = "250px";
      td.style.maxWidth = "250px";
      return;
    }

    // Determine if this ROI is currently selected
    // For combined ROIs, check if ANY of the sided ROIs are selected
    const isSelected = roiIds.some(id => selectedRoiIds.has(id));

    // Create or update checkbox
    let checkbox = td.querySelector("input[type='checkbox']");
    if (!checkbox) {
      checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "";
      checkbox.setAttribute("aria-label", `Toggle ${roiName}`);

      // Create label wrapper
      const label = document.createElement("label");
      label.className = "roi-cell-label";

      // Move existing content to label and add checkbox before
      const existingContent = td.innerHTML;
      label.innerHTML = existingContent;
      td.innerHTML = "";
      td.appendChild(checkbox);
      td.appendChild(label);
    }

    // Store ROI IDs in checkbox data for event handling
    checkbox.dataset.roiIds = JSON.stringify(roiIds);

    // Update checkbox state
    checkbox.checked = isSelected;

    // Apply styling to the wrapper
    td.classList.toggle("roi-on", isSelected);

    // Simple width enforcement
    td.style.width = "250px";
    td.style.maxWidth = "250px";
  });
}

/**
 * Wire ROI checkbox event handlers
 * For FAFB datasets, this is a no-op since checkboxes are not created
 */
function wireRoiCheckboxes(pageData) {
  // Skip event handling for FAFB datasets since checkboxes don't exist
  if (IS_FAFB_DATASET) {
    return;
  }

  document.addEventListener("change", (e) => {
    const checkbox = e.target;
    if (!(checkbox instanceof HTMLInputElement)) return;
    if (checkbox.type !== "checkbox") return;
    if (!checkbox.closest("td.roi-cell")) return;

    const td = checkbox.closest("td.roi-cell");
    if (!td) return;

    const roiName = td.dataset.roiName;
    if (!roiName) {
      console.warn("[ROI CHECKBOX] Missing data-roi-name on element:", td);
      checkbox.checked = false;
      return;
    }

    // Get ROI IDs from checkbox data (set during syncRoiCheckboxes)
    let roiIds;
    try {
      roiIds = JSON.parse(checkbox.dataset.roiIds || "[]");
    } catch (e) {
      console.warn("[ROI CHECKBOX] Invalid ROI IDs data:", checkbox.dataset.roiIds);
      return;
    }

    if (!Array.isArray(roiIds) || roiIds.length === 0) {
      console.warn("[ROI CHECKBOX] Missing or empty ROI IDs for:", roiName);
      return;
    }

    console.log(
      "[ROI CHECKBOX] name:",
      roiName,
      " -> ids:",
      roiIds,
      "checked:",
      checkbox.checked,
    );

    if (checkbox.checked) {
      roiIds.forEach(id => selectedRoiIds.add(id));
      console.log(
        "[ROI TOGGLE] added",
        roiIds,
        "current:",
        Array.from(selectedRoiIds),
      );
    } else {
      roiIds.forEach(id => selectedRoiIds.delete(id));
      console.log(
        "[ROI TOGGLE] removed",
        roiIds,
        "current:",
        Array.from(selectedRoiIds),
      );
    }

    td.classList.toggle("roi-on", checkbox.checked);

    // Update page data and neuroglancer
    pageData.visibleRois = Array.from(selectedRoiIds);
    console.log("[UPDATE] visibleRois:", pageData.visibleRois);

    updateNeuroglancerLinks(
      pageData.websiteTitle,
      pageData.visibleNeurons,
      pageData.neuronQuery,
      pageData.visibleRois,
      pageData.region,
      currentProjectionBg,
    );
  });
}

/* ────────────────────────────────────────────────────────────────────────── */
/* ROI clicking: map label → segment ID; toggle; style; update NG             */
/* ────────────────────────────────────────────────────────────────────────── */
// Make ROI shell visible when clicked on within the ROI table.
// Eventually retrieve these values programmatically.
const ROI_IDS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 93, 94, 95, 96,
];

const ALL_ROIS = [
  "AL(L)",
  "AL(R)",
  "AME(L)",
  "AME(R)",
  "AMMC(L)",
  "AMMC(R)",
  "AOTU(L)",
  "AOTU(R)",
  "ATL(L)",
  "ATL(R)",
  "AVLP(L)",
  "AVLP(R)",
  "BU(L)",
  "BU(R)",
  "CA(L)",
  "CA(R)",
  "CAN(L)",
  "CAN(R)",
  "CRE(L)",
  "CRE(R)",
  "EB",
  "EPA(L)",
  "EPA(R)",
  "FB",
  "FLA(L)",
  "FLA(R)",
  "GA(L)",
  "GA(R)",
  "GNG",
  "GOR(L)",
  "GOR(R)",
  "IB",
  "ICL(L)",
  "ICL(R)",
  "IPS(L)",
  "IPS(R)",
  "LA(L)",
  "LA(R)",
  "LAL(L)",
  "LAL(R)",
  "LH(L)",
  "LH(R)",
  "LO(L)",
  "LO(R)",
  "LOP(L)",
  "LOP(R)",
  "ME(L)",
  "ME(R)",
  "NO",
  "PB",
  "PED(L)",
  "PED(R)",
  "PLP(L)",
  "PLP(R)",
  "PRW",
  "PVLP(L)",
  "PVLP(R)",
  "ROB(L)",
  "ROB(R)",
  "RUB(L)",
  "RUB(R)",
  "SAD",
  "SCL(L)",
  "SCL(R)",
  "SIP(L)",
  "SIP(R)",
  "SLP(L)",
  "SLP(R)",
  "SMP(L)",
  "SMP(R)",
  "SPS(L)",
  "SPS(R)",
  "VES(L)",
  "VES(R)",
  "WED(L)",
  "WED(R)",
  "a'L(L)",
  "a'L(R)",
  "aL(L)",
  "aL(R)",
  "b'L(L)",
  "b'L(R)",
  "bL(L)",
  "bL(R)",
  "gL(L)",
  "gL(R)",
  "AB(R)",
  "AB(L)",
  "CV-anterior",
  "CRN",
];

const VNC_IDS = [
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27
];

const VNC_NAMES = [
    "CV-posterior", "LegNp(T1)(L)", "LegNp(T1)(R)", "LegNp(T2)(L)", "LegNp(T2)(R)", "LegNp(T3)(L)", "LegNp(T3)(R)",
    "Ov(L)", "Ov(R)", "IntTct", "LTct", "NTct(UTct-T1)(L)", "NTct(UTct-T1)(R)", "NTct(UTct-T2)(L)", "NTct(UTct-T2)(R)", "NTct(UTct-T3)(L)", "NTct(UTct-T3)(R)",
    "ANm", "mVAC(T1)(L)", "mVAC(T1)(R)", "mVAC(T2)(L)", "mVAC(T2)(R)", "mVAC(T3)(L)", "mVAC(T3)(R)"
];

if (ROI_IDS.length !== ALL_ROIS.length) {
  console.warn(
    "[ROI MAP] Length mismatch:",
    ROI_IDS.length,
    "ids vs",
    ALL_ROIS.length,
    "labels",
  );
}

if (VNC_IDS.length !== VNC_NAMES.length) {
  console.warn(
    "[VNC MAP] Length mismatch:",
    VNC_IDS.length,
    "ids vs",
    VNC_NAMES.length,
    "labels",
  );
}

const ROI_TO_ID = (() => {
  const map = Object.create(null);
  for (let i = 0; i < Math.min(ROI_IDS.length, ALL_ROIS.length); i++) {
    map[ALL_ROIS[i]] = String(ROI_IDS[i]); // ensure string
  }
  return map;
})();

const VNC_TO_ID = (() => {
  const map = Object.create(null);
  for (let i = 0; i < Math.min(VNC_IDS.length, VNC_NAMES.length); i++) {
    map[VNC_NAMES[i]] = String(VNC_IDS[i]); // ensure string
  }
  return map;
})();

/**
 * Find sided ROI IDs for a combined ROI name.
 * For example, "AME" -> ["1", "2"] (IDs for "AME(L)" and "AME(R)")
 *
 * @param {string} baseName - Base ROI name without side suffix (e.g., "AME", "LO")
 * @returns {string[]} Array of neuroglancer IDs for sided versions
 */
function findSidedRoiIds(baseName) {
  const sidedIds = [];

  // Try common side patterns
  const patterns = [
    `${baseName}(L)`,
    `${baseName}(R)`,
    `${baseName}_L`,
    `${baseName}_R`
  ];

  patterns.forEach(pattern => {
    const id = ROI_TO_ID[pattern];
    if (id) {
      sidedIds.push(id);
    }
  });

  return sidedIds;
}

/**
 * Find sided VNC IDs for a combined VNC name.
 * For example, "LegNp(T1)" -> ["4", "5"] (IDs for "LegNp(T1)(L)" and "LegNp(T1)(R)")
 *
 * @param {string} baseName - Base VNC name without side suffix
 * @returns {string[]} Array of neuroglancer IDs for sided versions
 */
function findSidedVncIds(baseName) {
  const sidedIds = [];

  // Try common VNC side patterns
  const patterns = [
    `${baseName}(L)`,
    `${baseName}(R)`,
    `${baseName}_L`,
    `${baseName}_R`
  ];

  patterns.forEach(pattern => {
    const id = VNC_TO_ID[pattern];
    if (id) {
      sidedIds.push(id);
    }
  });

  return sidedIds;
}

/**
 * Resolve an ROI label to its Neuroglancer segment ID (as a string).
 *
 * Looks up the label in the prebuilt ROI_TO_ID table. If the label is not found,
 * tries to find sided equivalents for combined ROI names (e.g., "AME" -> ["AME(L)", "AME(R)"]).
 * For combined ROIs, returns an array of IDs instead of a single ID.
 *
 * @param {string} roiName - ROI label, e.g., "AME(L)", "LO(R)", or "AME" (combined).
 * @returns {string|string[]|null} Segment ID as a string, array of IDs for combined ROIs, or `null` if unknown.
 */
function roiNameToId(roiName) {
  const key = String(roiName).trim();
  const mapped = ROI_TO_ID[key];
  if (mapped) return mapped;

  // Try to find sided equivalents for combined ROI names
  const sidedIds = findSidedRoiIds(key);
  if (sidedIds.length > 0) {
    console.log("[ROI MAP] Combined ROI", key, "mapped to sided IDs:", sidedIds);
    return sidedIds;
  }

  console.warn("[ROI MAP] Shell for ROI not found:", key);
  return null;
}

/**
 * Resolve a VNC neuropil label to its Neuroglancer segment ID (as a string).
 *
 * Looks up the label in the prebuilt VNC_TO_ID table. If the label is not found,
 * tries to find sided equivalents for combined VNC names.
 * For combined VNCs, returns an array of IDs instead of a single ID.
 *
 * @param {string} vncName - VNC neuropil label, e.g., "LegNp(T1)(L)" or "LegNp(T1)" (combined).
 * @returns {string|string[]|null} Segment ID as a string, array of IDs for combined VNCs, or `null` if unknown.
 */
function vncNameToId(vncName) {
  const key = String(vncName).trim();
  const mapped = VNC_TO_ID[key];
  if (mapped) return mapped;

  // Try to find sided equivalents for combined VNC names
  const sidedIds = findSidedVncIds(key);
  if (sidedIds.length > 0) {
    console.log("[VNC MAP] Combined VNC", key, "mapped to sided IDs:", sidedIds);
    return sidedIds;
  }

  console.warn("[VNC MAP] Shell for VNC not found:", key);
  return null;
}

/**
 * Recompute which ROI names should be red, given current pageData/selection.
 * @param {{ visibleRois?: string[] }} pageData
 */
function renderRoiLinkStyles(pageData) {
  const layerVisible =
    pageData.visibleRois &&
    pageData.visibleRois.length > 0 &&
    pageData.visibleRois.length < 96;

  // Update legacy roi-link elements if they exist
  document.querySelectorAll(".roi-link").forEach((el) => {
    const roiName = el.getAttribute("data-roi-name");
    if (!roiName) return;

    // Check if it's a brain ROI or VNC neuropil
    let roiId = roiNameToId(roiName);
    if (!roiId) {
      roiId = vncNameToId(roiName);
    }
    if (!roiId) return;

    const isSelected = selectedRoiIds.has(roiId);
    const isShown = layerVisible && isSelected;

    el.classList.toggle("roi-on", isShown);
  });

  // Update roi-cell elements
  document.querySelectorAll("td.roi-cell").forEach((td) => {
    const roiName = td.dataset.roiName;
    if (!roiName) return;

    // Check if it's a brain ROI or VNC neuropil
    let roiId = roiNameToId(roiName);
    if (!roiId) {
      roiId = vncNameToId(roiName);
    }
    if (!roiId) return;

    // Handle both single IDs and arrays of IDs for combined ROIs
    const roiIds = Array.isArray(roiId) ? roiId : [roiId];
    const isSelected = roiIds.some(id => selectedRoiIds.has(id));
    const isShown = layerVisible && isSelected;

    td.classList.toggle("roi-on", isShown);

    // Update checkbox if it exists
    const checkbox = td.querySelector("input[type='checkbox']");
    if (checkbox) {
      checkbox.checked = isSelected;
    }
  });
}

/** @type {Set<string>} Selected ROI segment IDs (as strings) used for toggling. */
const selectedRoiIds = new Set();

/**
 * Handle clicks on ROI links (class `.roi-link`, attribute `data-roi-name`).
 * Toggles ROI ID in selection, updates pageData.visibleRois, refreshes NG, and restyles.
 * This function is kept for backward compatibility with legacy roi-link elements.
 *
 * @param {Object} pageData - Neuroglancer params object (mutated in place).
 * @param {string} pageData.websiteTitle
 * @param {string[]} pageData.visibleNeurons
 * @param {string} pageData.neuronQuery
 * @param {string[]} pageData.visibleRois
 * @returns {void}
 */
function wireRoiClicks(pageData) {
  const table = document.getElementById("roi-table") || document;

  console.log("[wireRoiClicks] binding to:", table.id || "document");

  table.addEventListener("click", (e) => {
    const el = e.target.closest(".roi-link");
    if (!el) return;

    const roiName = el.getAttribute("data-roi-name");
    if (!roiName) {
      console.warn("[ROI CLICK] Missing data-roi-name on element:", el);
      return;
    }

    // Check if it's a brain ROI or VNC neuropil
    let roiId = roiNameToId(roiName);
    if (!roiId) {
      roiId = vncNameToId(roiName);
    }
    console.log("[ROI CLICK] name:", roiName, " -> id:", roiId);

    // Handle both single IDs and arrays of IDs for combined ROIs
    const roiIds = Array.isArray(roiId) ? roiId : [roiId];
    const isCurrentlySelected = roiIds.some(id => selectedRoiIds.has(id));

    if (isCurrentlySelected) {
      // Remove all sided ROI IDs for combined ROIs
      roiIds.forEach(id => selectedRoiIds.delete(id));
      el.classList.remove("selected");
      console.log(
        "[ROI TOGGLE] removed",
        roiIds,
        "current:",
        Array.from(selectedRoiIds),
      );
    } else {
      // Add all sided ROI IDs for combined ROIs
      roiIds.forEach(id => selectedRoiIds.add(id));
      el.classList.add("selected");
      console.log(
        "[ROI TOGGLE] added",
        roiIds,
        "current:",
        Array.from(selectedRoiIds),
      );
    }

    pageData.visibleRois = Array.from(selectedRoiIds);
    console.log("[UPDATE] visibleRois:", pageData.visibleRois);

    updateNeuroglancerLinks(
      pageData.websiteTitle,
      pageData.visibleNeurons,
      pageData.neuronQuery,
      pageData.visibleRois,
      pageData.region,
      currentProjectionBg,
    );
    renderRoiLinkStyles(pageData);
  });
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Neuroglancer URL generation + DOM updates                                  */
/* ────────────────────────────────────────────────────────────────────────── */

/**
 * Generates a Neuroglancer URL based on the provided parameters
 *
 * @param {string} websiteTitle - The title for the neuroglancer session
 * @param {string[]} visibleNeurons - Array of neuron bodyIDs to display
 * @param {string} neuronQuery - Query string for neuron search
 * @param {string[]} visibleRois - List of numbers as strings representing visible ROIs
 * @param {string[]} region - Region the type belongs to. Used for setting NG view.
 * @param {string} projectionBg - Background color for projection
 * @returns {string} The complete Neuroglancer URL
 */
// Inside generateNeuroglancerUrl
function generateNeuroglancerUrl(
  websiteTitle,
  visibleNeurons = [],
  neuronQuery = "",
  visibleRois = [],
  region = "",
  projectionBg = currentProjectionBg,
) {
  try {
    const neuroglancerState = JSON.parse(JSON.stringify(NEUROGLANCER_TEMPLATE));
    neuroglancerState.title = websiteTitle;
    neuroglancerState.projectionBackgroundColor = projectionBg;

    // Check if this is FAFB dataset by looking for the flywire-fafb layer
    const isFAFB = neuroglancerState.layers.some(
      (l) => l.type === "segmentation" && l.name === "flywire-fafb:v783b"
    );

    // Choose NG view based on dataset type and region
    if (isFAFB) {
      // For FAFB dataset, preserve the original position, scale, and orientation from template
      // These values are already set in the template, so we don't need to modify them
    } else if (region === "VNC") {
      // VNC-specific settings for CNS dataset
      neuroglancerState.position = [49613.625, 31780.240234375, 76198.75];
      neuroglancerState.projectionOrientation = [
        0.7071970105171204, 0.0005355576286092401, 0.0005249528330750763,
        0.707016110420227,
      ];
      neuroglancerState.projectionScale = 134532.41491591922;
    } else {
      // Other CNS regions (non-VNC)
      neuroglancerState.position = [
        48850.046875, 31780.1796875, 26790.14453125,
      ];
      neuroglancerState.projectionOrientation = [];
      neuroglancerState.projectionScale = 74323.4144763075;
    }

    // Find the main segmentation layer (flexible for different datasets)
    const mainSegLayer = neuroglancerState.layers.find(
      (l) => l.type === "segmentation" && l.segments !== undefined &&
           (l.name === "cns-seg" || l.name === "flywire-fafb:v783b")
    );

    // Find the neuropil layers (flexible for different datasets)
    const neuropilLayer = neuroglancerState.layers.find(
      (l) => l.name === "brain-neuropils" || l.name === "neuropils"
    );
    const vncNeuropilLayer = neuroglancerState.layers.find(
      (l) => l.name === "vnc-neuropils"
    );

    // Add ROIs
    const rois = Array.isArray(visibleRois)
      ? visibleRois.map(String)
      : visibleRois
        ? [String(visibleRois)]
        : [];
    if (mainSegLayer) {
      mainSegLayer.segments = Array.isArray(visibleNeurons)
        ? visibleNeurons
        : [];

      // Clear segmentQuery if any connectivity body IDs are active
      const hasConnectivityBodies = hasActiveConnectivityBodies(visibleNeurons);
      console.log(
        "[SEGMENT QUERY] hasConnectivityBodies:",
        hasConnectivityBodies,
        "segmentQuery:",
        hasConnectivityBodies ? "CLEARED" : neuronQuery || "",
        "layerName:", mainSegLayer.name
      );
      mainSegLayer.segmentQuery = hasConnectivityBodies ? "" : neuronQuery || "";
    }
    if (neuropilLayer) {
      // Split ROIs between brain and VNC based on their ID arrays
      // VNC ROIs take priority - exclude them from brain ROIs to prevent overlap
      const brainRois = rois.filter(roiId =>
        ROI_IDS.includes(parseInt(roiId)) && !VNC_IDS.includes(parseInt(roiId))
      );

      neuropilLayer.segments = brainRois;
      neuropilLayer.visible = brainRois.length > 0;
    }
    if (vncNeuropilLayer) {
      // Only VNC neuropils go to vnc-neuropils layer
      const vncRois = rois.filter(roiId => VNC_IDS.includes(parseInt(roiId)));

      vncNeuropilLayer.segments = vncRois;
      vncNeuropilLayer.visible = vncRois.length > 0;
    }

    console.log(
      "[generateNeuroglancerUrl] rois:",
      rois,
      "visible:",
      neuropilLayer?.visible,
    );

    const encodedState = encodeURIComponent(JSON.stringify(neuroglancerState));
    return `${NEUROGLANCER_BASE_URL}/#!${encodedState}`;
  } catch (error) {
    console.error("Error generating neuroglancer URL:", error);
    throw error;
  }
}

/**
 * Updates neuroglancer links in the DOM with the provided parameters
 *
 * @param {string} websiteTitle - The title for the neuroglancer session
 * @param {string[]} visibleNeurons - Array of neuron bodyIDs to display
 * @param {string} neuronQuery - Query string for neuron search
 * @param {string[]} visibleRois - List of numbers as strings representing visible ROIs
 * @param {string[]} region - Region the type belongs to. Used for setting NG view.
 * @param {string} projectionBg - Background color for projection
 * @returns {void}
 */
function updateNeuroglancerLinks(
  websiteTitle,
  visibleNeurons = [],
  neuronQuery = "",
  visibleRois = [],
  region = "",
  projectionBg = currentProjectionBg,
) {
  try {
    const neuroglancerUrl = generateNeuroglancerUrl(
      websiteTitle,
      visibleNeurons,
      neuronQuery,
      visibleRois,
      region,
      projectionBg,
    );

    // Update all elements with class 'neuroglancer-link'
    const linkElements = document.querySelectorAll(".neuroglancer-link");
    linkElements.forEach((element) => {
      element.href = neuroglancerUrl;
    });

    // Update all elements with class 'neuroglancer-iframe'
    const iframeElements = document.querySelectorAll(".neuroglancer-iframe");
    iframeElements.forEach((element) => {
      element.src = neuroglancerUrl;
    });
  } catch (error) {
    console.error("Error updating neuroglancer links:", error);
  }
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Initialization                                                             */
/* ────────────────────────────────────────────────────────────────────────── */
/** Initializes neuroglancer links when the DOM is ready
 * This function should be called with the page data
 *
 * @param {Object} pageData - The page data containing neuroglancer parameters
 * @param {string} pageData.websiteTitle - The title for the neuroglancer session
 * @param {string[]} pageData.visibleNeurons - Array of neuron bodyIDs to display
 * @param {string} pageData.neuronQuery - Query string for neuron search
 * @param {string[]} pageData.visibleRois - Array of ROIs to display
 * @param {string[]} pageData.region - Region the type belongs to. Used for setting NG view.
 */
function initializeNeuroglancerLinks(pageData) {
  const run = () => {
    const input = document.getElementById("nv-theme-toggle");
    const saved = localStorage.getItem("nvTheme");
    const initialTheme = saved || (input && input.checked ? "light" : "dark");

    currentNgTheme = initialTheme;
    currentProjectionBg = BG_BY_THEME[initialTheme] || BG_BY_THEME.dark;
    if (input) input.checked = initialTheme === "light";

    updateNeuroglancerLinks(
      pageData.websiteTitle,
      pageData.visibleNeurons,
      pageData.neuronQuery,
      pageData.visibleRois,
      pageData.region,
      currentProjectionBg,
    );
    wireRoiClicks(pageData);
    wireConnectivityCheckboxes(pageData);
    syncConnectivityCheckboxes(pageData);
    wireRoiCheckboxes(pageData);
    syncRoiCheckboxes();

    if (input) {
      input.addEventListener("change", () => {
        currentNgTheme = input.checked ? "light" : "dark";
        currentProjectionBg = BG_BY_THEME[currentNgTheme];
        localStorage.setItem("nvTheme", currentNgTheme);

        updateNeuroglancerLinks(
          pageData.websiteTitle,
          pageData.visibleNeurons,
          pageData.neuronQuery,
          pageData.visibleRois,
          pageData.region,
          currentProjectionBg,
        );
      });
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
}

// Export functions if using modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    generateNeuroglancerUrl,
    updateNeuroglancerLinks,
    initializeNeuroglancerLinks,
    wireRoiClicks,
    syncConnectivityCheckboxes,
    wireConnectivityCheckboxes,
    syncRoiCheckboxes,
    wireRoiCheckboxes,
    getAllConnectivityBodyIds,
    hasActiveConnectivityBodies,
  };
} else if (typeof window !== "undefined") {
  // Make functions globally available for browser use
  window.generateNeuroglancerUrl = generateNeuroglancerUrl;
  window.updateNeuroglancerLinks = updateNeuroglancerLinks;
  window.initializeNeuroglancerLinks = initializeNeuroglancerLinks;
  window.wireRoiClicks = wireRoiClicks;
  window.syncConnectivityCheckboxes = syncConnectivityCheckboxes;
  window.wireConnectivityCheckboxes = wireConnectivityCheckboxes;
  window.syncRoiCheckboxes = syncRoiCheckboxes;
  window.wireRoiCheckboxes = wireRoiCheckboxes;
  window.getAllConnectivityBodyIds = getAllConnectivityBodyIds;
  window.hasActiveConnectivityBodies = hasActiveConnectivityBodies;
  window.roiNameToId = roiNameToId;
  window.vncNameToId = vncNameToId;
}

// Simple ROI table layout fix on page load
function forceRoiTableLayout() {
  const roiTable = document.getElementById("roi-table");
  if (!roiTable) return;

  roiTable.style.tableLayout = "fixed";
  const firstColumnCells = roiTable.querySelectorAll("tbody td:first-child");
  firstColumnCells.forEach((cell) => {
    cell.style.width = "250px";
    cell.style.maxWidth = "250px";
  });
}

// Run on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", forceRoiTableLayout);
} else {
  forceRoiTableLayout();
}
