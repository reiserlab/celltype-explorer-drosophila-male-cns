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
 "dimensions": {"x": [8e-09, "m"], "y": [8e-09, "m"], "z": [8e-09, "m"]},
 "position": [48850.046875,31780.1796875,26790.14453125],
 "crossSectionScale": 132.13536694825854,
 "projectionScale": 74323.4144763075,
 "layers": [{"type": "image",
   "source": {"url": "precomputed://gs://cns-full-clahe",
    "subsources": {"default": true},
    "enableDefaultSubsources": false},
   "tab": "source",
   "name": "em-clahe"},
  {"type": "segmentation",
   "source": [{"url": "dvid://https://emdata-mcns.janelia.org/f3969:master/segmentation?dvid-service=https://ngsupport-bmcp5imp6q-uk.a.run.app",
     "subsources": {"default": true, "meshes": true},
     "enableDefaultSubsources": false},
    {"url": "precomputed://https://ngsupport-bmcp5imp6q-uk.a.run.app/neuronjson_segment_properties/emdata-mcns.janelia.org/f3969:master/segmentation_annotations/type",
     "subsources": {"default": true},
     "enableDefaultSubsources": false},
    {"url": "#precomputed://https://ngsupport-bmcp5imp6q-uk.a.run.app/neuronjson_segment_properties/emdata-mcns.janelia.org/f3969:master/segmentation_annotations/type/status",
     "enableDefaultSubsources": false},
    {"url": "precomputed://https://ngsupport-bmcp5imp6q-uk.a.run.app/neuronjson_segment_tags_properties/emdata-mcns.janelia.org/f3969:master/segmentation_annotations/soma_side",
     "subsources": {"default": true},
     "enableDefaultSubsources": false},
    {"url": "#precomputed://https://ngsupport-bmcp5imp6q-uk.a.run.app/neuronjson_segment_synapse_properties/emdata-mcns.janelia.org/f3969:master/synapses_labelsz/250000",
     "enableDefaultSubsources": false},
    {"url": "#precomputed://https://ngsupport-bmcp5imp6q-uk.a.run.app/neuronjson_segment_note_properties/emdata-mcns.janelia.org/f3969:master/neck-fibers-anterior_labelsz/neck-ant/5000",
     "enableDefaultSubsources": false},
    {"url": "#precomputed://https://ngsupport-bmcp5imp6q-uk.a.run.app/neuronjson_segment_note_properties/emdata-mcns.janelia.org/f3969:master/neck-fibers-posterior_labelsz/neck-post/5000",
     "enableDefaultSubsources": false},
    {"url": "#precomputed://https://ngsupport-bmcp5imp6q-uk.a.run.app/neuronjson_segment_note_properties/emdata-mcns.janelia.org/f3969:master/nuclei-centroids_labelsz/nuclei/200000",
     "enableDefaultSubsources": false},
    {"url": "#precomputed://https://ngsupport-bmcp5imp6q-uk.a.run.app/neuronjson_segment_note_properties/emdata-mcns.janelia.org/f3969:master/segmentation_todo_labelsz/todo/200000",
     "enableDefaultSubsources": false},
    {"url": "precomputed://https://ngsupport-bmcp5imp6q-uk.a.run.app/svmesh/emdata-mcns.janelia.org/f3969:master/segmentation_sv_meshes/body",
     "enableDefaultSubsources": false}],
   "toolBindings": {"Q": "selectSegments"},
   "tab": "segments",
   "segments": [],
   "segmentQuery": "NEURON_QUERY_PLACEHOLDER",
   "name": "cns-seg"},
  {"type": "segmentation",
   "source": [{"url": "dvid://https://emdata-mcns.janelia.org/f3969:master/segmentation?dvid-service=https://ngsupport-bmcp5imp6q-uk.a.run.app&supervoxels=true",
     "subsources": {"default": true},
     "enableDefaultSubsources": false},
    "precomputed://https://ngsupport-bmcp5imp6q-uk.a.run.app/svmesh/emdata-mcns.janelia.org/f3969:master/segmentation_sv_meshes/supervoxels"],
   "tab": "segments",
   "name": "supervoxels",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "dvid://https://emdata-mcns.janelia.org/f3969:master/segmentation_mirrored",
    "subsources": {"meshes": true},
    "enableDefaultSubsources": false},
   "tab": "segments",
   "linkedSegmentationGroup": "cns-seg",
   "name": "brain-mirror",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/fullbrain-major-shells",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "rendering",
   "selectedAlpha": 0,
   "saturation": 0,
   "meshSilhouetteRendering": 7,
   "segments": ["1", "2", "3"],
   "colorSeed": 1336242844,
   "segmentDefaultColor": "#ffffff",
   "name": "brain-neuropil-shell"},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/brain-shell-v2.2",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "rendering",
   "selectedAlpha": 0,
   "saturation": 0,
   "meshSilhouetteRendering": 7,
   "segments": ["1"],
   "colorSeed": 1336242844,
   "segmentDefaultColor": "#ffffff",
   "name": "brain-shell",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/brain-shell-with-lamina-v2.1",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "rendering",
   "selectedAlpha": 0,
   "saturation": 0,
   "meshSilhouetteRendering": 7,
   "segments": ["1"],
   "colorSeed": 1336242844,
   "segmentDefaultColor": "#ffffff",
   "name": "brain-shell-with-lamina",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/vnc-neuropil-shell",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "rendering",
   "selectedAlpha": 0,
   "saturation": 0,
   "meshSilhouetteRendering": 7,
   "segments": ["1"],
   "colorSeed": 1336242844,
   "segmentDefaultColor": "#ffffff",
   "name": "vnc-neuropil-shell"},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/vnc-shell",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "rendering",
   "selectedAlpha": 0,
   "saturation": 0,
   "meshSilhouetteRendering": 7,
   "segments": ["1"],
   "colorSeed": 1336242844,
   "segmentDefaultColor": "#ffffff",
   "name": "vnc-shell",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/fullbrain-roi-v4",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "selectedAlpha": 0,
   "meshSilhouetteRendering": 4,
   "segments": ["1",
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
    "95",
    "96"],
   "name": "brain-neuropils",
   "visible": false},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/malecns-vnc-neuropil-roi-v0",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "selectedAlpha": 0,
   "meshSilhouetteRendering": 4,
   "segments": ["10",
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
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"],
   "name": "vnc-neuropils",
   "visible": false},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/malecns-vnc-nerve-roi-v2",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "meshSilhouetteRendering": 3,
   "segments": ["10",
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
    "9"],
   "name": "vnc-nerves",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/malecns-major-compartments-v1",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "tab": "segments",
   "meshSilhouetteRendering": 4,
   "name": "major-compartments",
   "archived": true},
  {"type": "segmentation",
   "source": ["precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/pointcloud-shells",
    "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/pointcloud-shells/segment_props"],
   "pick": false,
   "tab": "rendering",
   "selectedAlpha": 0,
   "saturation": 0,
   "segments": ["1", "2"],
   "colorSeed": 1336242844,
   "segmentDefaultColor": "#ffffff",
   "name": "pointcloud-shells",
   "archived": true},
  {"type": "annotation",
   "source": "dvid://https://emdata-mcns.janelia.org/f3969:master/synapses",
   "tab": "rendering",
   "shader": "#uicontrol bool show_tbars checkbox(default=true)\n#uicontrol bool show_psds checkbox(default=true)\n#uicontrol float confidence_threshold slider(min=0.0, max=1.0, step=0.1, default=0.5)\n\n#uicontrol float radius slider(min=3, max=20, step=1, default=5)\n#uicontrol float opacity slider(min=0, max=1, step=0.1, default=1)\n#uicontrol float opacity3D slider(min=0, max=1, step=0.1, default=1)\n#uicontrol vec3 tbar_color color(default=\"#FFFF00\")\n#uicontrol vec3 psd_color color(default=\"#808080\")\n\nvoid main() {\n  if (prop_confidence() < confidence_threshold) {\n      discard;\n  }\n\n  setPointMarkerSize(radius);\n  float final_opacity = PROJECTION_VIEW ? opacity3D : opacity;\n  setPointMarkerBorderColor(vec4(0, 0, 0, final_opacity));\n\n  if (prop_rendering_attribute() == 4) {\n    if (!show_tbars)\n      discard;\n    setColor(vec4(tbar_color, final_opacity));\n  } else if (prop_rendering_attribute() == 5) {\n    if (!show_psds)\n      discard;\n    setColor(vec4(psd_color, final_opacity));\n  } else {\n    setColor(vec4(defaultColor(), final_opacity));\n  }\n}\n",
   "linkedSegmentationLayer": {"segments": "cns-seg"},
   "filterBySegmentation": ["segments"],
   "name": "synapses",
   "visible": false},
  {"type": "segmentation",
   "source": {"url": "dvid://https://emdata-mcns.janelia.org/f3969:master/nuclei-seg?dvid-service=https://ngsupport-bmcp5imp6q-uk.a.run.app",
    "subsources": {"default": true, "meshes": true, "bounds": true},
    "enableDefaultSubsources": false},
   "tab": "segments",
   "name": "nuclei-seg",
   "archived": true},
  {"type": "annotation",
   "source": "dvid://https://emdata-mcns.janelia.org/f3969:master/nuclei-centroids",
   "tab": "rendering",
   "shader": "#uicontrol float radius slider(min=3, max=20, step=1, default=5)\n#uicontrol float opacity slider(min=0, max=1, step=0.1, default=1)\n#uicontrol float opacity3D slider(min=0, max=1, step=0.1, default=1)\n#uicontrol vec3 color color(default=\"#FFFFFF\")\n\t\nvoid main() {\n  setPointMarkerSize(radius);\n  float finalOpacity = PROJECTION_VIEW ? opacity3D : opacity;\n  setPointMarkerBorderColor(vec4(0, 0, 0, finalOpacity));\n  setColor(vec4(color, finalOpacity));\n}\n",
   "shaderControls": {"radius": 20},
   "linkedSegmentationLayer": {"segments": "cns-seg"},
   "filterBySegmentation": ["segments"],
   "name": "nuclei-centroids",
   "archived": true},
  {"type": "annotation",
   "source": "dvid://https://emdata-mcns.janelia.org/f3969:master/tosoma",
   "tab": "rendering",
   "shader": "#uicontrol float radius slider(min=3, max=20, step=1, default=5)\n#uicontrol float opacity slider(min=0, max=1, step=0.1, default=1)\n#uicontrol float opacity3D slider(min=0, max=1, step=0.1, default=1)\n#uicontrol vec3 color color(default=\"#FFFFFF\")\n\t\nvoid main() {\n  setPointMarkerSize(radius);\n  float finalOpacity = PROJECTION_VIEW ? opacity3D : opacity;\n  setPointMarkerBorderColor(vec4(0, 0, 0, finalOpacity));\n  setColor(vec4(color, finalOpacity));\n}\n",
   "shaderControls": {"radius": 10, "color": "#00ffff"},
   "linkedSegmentationLayer": {"segments": "cns-seg"},
   "filterBySegmentation": ["segments"],
   "name": "tosoma-points",
   "archived": true},
  {"type": "segmentation",
   "source": ["dvid://https://emdata-mcns.janelia.org/f3969dc/semantic-masks-cns?dvid-service=https://ngsupport-bmcp5imp6q-uk.a.run.app",
    "precomputed://https://emdata-mcns.janelia.org/api/node/f3969dc/semantic-masks-ng-segprops/key/cns-segprops-info"],
   "tab": "segments",
   "segmentColors": {"0": "#000000"},
   "name": "semantic-masks",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/fullbrain-defects",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "tab": "segments",
   "meshSilhouetteRendering": 2,
   "segments": ["1", "2", "3", "4", "5"],
   "name": "brain-defects",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/vnc-defects",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "meshSilhouetteRendering": 2,
   "segments": ["1", "2"],
   "name": "vnc-defects",
   "archived": true},
  {"type": "annotation",
   "source": {"url": "local://annotations",
    "transform": {"outputDimensions": {"x": [8e-09, "m"],
      "y": [8e-09, "m"],
      "z": [8e-09, "m"]}}},
   "tool": "annotatePoint",
   "tab": "annotations",
   "annotations": [{"pointA": [39298, 0, 9578],
     "pointB": [41856, 55296, 40316],
     "type": "axis_aligned_bounding_box",
     "id": "7ec7d4d742ac94ed304f4b1d9c535a162c947ab4"},
    {"pointA": [4125.13134765625, 20381.453125, 28350.43359375],
     "pointB": [6771, 48774.40625, 44534.76953125],
     "type": "axis_aligned_bounding_box",
     "id": "dde25826ea384cdc8d89f22f28dc7f5992c43830"}],
   "name": "realigned-tabs",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/halfbrain-roi",
    "transform": {"matrix": [[1, 0, 0, 4096],
      [0, 1, 0, 4096],
      [0, 0, 1, 4096]],
     "outputDimensions": {"x": [8e-09, "m"],
      "y": [8e-09, "m"],
      "z": [8e-09, "m"]}},
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "selectedAlpha": 0.63,
   "saturation": 0.5,
   "meshSilhouetteRendering": 4,
   "segments": ["1",
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
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"],
   "name": "halfbrain-orig-roi",
   "archived": true},
  {"type": "annotation",
   "source": "dvid://https://emdata-mcns.janelia.org/f3969:master/neck-fibers-anterior",
   "tab": "source",
   "annotationColor": "#ff00ff",
   "crossSectionAnnotationSpacing": 55.39433990439313,
   "projectionAnnotationSpacing": 64,
   "shader": "#uicontrol float radius slider(min=3, max=20, step=1, default=5)\n#uicontrol float opacity slider(min=0, max=1, step=0.1, default=1)\n#uicontrol float opacity3D slider(min=0, max=1, step=0.1, default=1)\n\t\nvoid main() {\n  setPointMarkerSize(radius);\n  float finalOpacity = PROJECTION_VIEW ? opacity3D : opacity;\n  setPointMarkerBorderColor(vec4(defaultColor(), finalOpacity));\n  setColor(vec4(defaultColor(), finalOpacity));\n}\n",
   "shaderControls": {"radius": 6},
   "linkedSegmentationLayer": {"segments": "cns-seg"},
   "filterBySegmentation": ["segments"],
   "name": "neck-fibers-anterior",
   "archived": true},
  {"type": "annotation",
   "source": "dvid://https://emdata-mcns.janelia.org/f3969:master/neck-fibers-posterior",
   "tab": "rendering",
   "annotationColor": "#00ffff",
   "crossSectionAnnotationSpacing": 55.39433990439313,
   "projectionAnnotationSpacing": 64,
   "shader": "#uicontrol float radius slider(min=3, max=20, step=1, default=5)\n#uicontrol float opacity slider(min=0, max=1, step=0.1, default=1)\n#uicontrol float opacity3D slider(min=0, max=1, step=0.1, default=1)\n\t\nvoid main() {\n  setPointMarkerSize(radius);\n  float finalOpacity = PROJECTION_VIEW ? opacity3D : opacity;\n  setPointMarkerBorderColor(vec4(defaultColor(), finalOpacity));\n  setColor(vec4(defaultColor(), finalOpacity));\n}\n",
   "shaderControls": {"radius": 6},
   "linkedSegmentationLayer": {"segments": "cns-seg"},
   "filterBySegmentation": ["segments"],
   "name": "neck-fibers-posterior",
   "archived": true},
  {"type": "annotation",
   "source": "dvid://https://emdata-mcns.janelia.org/f3969:master/segmentation_todo",
   "tab": "rendering",
   "annotationColor": "#ff7f00",
   "crossSectionAnnotationSpacing": 55.39433990439313,
   "projectionAnnotationSpacing": 64,
   "shader": "#uicontrol float radius slider(min=3, max=20, step=1, default=5)\n#uicontrol float opacity slider(min=0, max=1, step=0.1, default=1)\n#uicontrol float opacity3D slider(min=0, max=1, step=0.1, default=1)\n\t\nvoid main() {\n  setPointMarkerSize(radius);\n  float finalOpacity = PROJECTION_VIEW ? opacity3D : opacity;\n  setPointMarkerBorderColor(vec4(0.0, 0.0, 0.0, finalOpacity));\n  setColor(vec4(defaultColor(), finalOpacity));\n}\n",
   "shaderControls": {"radius": 6},
   "linkedSegmentationLayer": {"segments": "cns-seg"},
   "filterBySegmentation": ["segments"],
   "name": "todo",
   "archived": true},
  {"type": "segmentation",
   "source": "precomputed://gs://cns-full-seg20230203-grid2k-lowid",
   "tab": "segments",
   "name": "vnc-initial-supervoxels",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "dvid://https://emdata-mcns.janelia.org/f3969dc575d74e4f922a8966709958c8/segmentation?dvid-service=https://ngsupport-bmcp5imp6q-uk.a.run.app",
    "subsources": {"default": true, "meshes": true, "skeletons": true},
    "enableDefaultSubsources": false},
   "tab": "source",
   "colorSeed": 2823534454,
   "name": "brain-initial-supervoxels",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/ME(R)-columns-v7",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "colorSeed": 1119163746,
   "name": "ME(R)-columns",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/ME(R)-layers-v7",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "colorSeed": 1119163746,
   "name": "ME(R)-layers",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/LO(R)-columns-v7",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "colorSeed": 1119163746,
   "name": "LO(R)-columns",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/LO(R)-layers-v7",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "colorSeed": 1119163746,
   "name": "LO(R)-layers",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/LOP(R)-columns-v7",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "colorSeed": 1119163746,
   "name": "LOP(R)-columns",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/LOP(R)-layers-v7",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "colorSeed": 1119163746,
   "name": "LOP(R)-layers",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/ME(L)-columns-v1",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "colorSeed": 1119163746,
   "name": "ME(L)-columns",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/ME(L)-layers-v1",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "colorSeed": 1119163746,
   "name": "ME(L)-layers",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/LO(L)-columns-v1",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "colorSeed": 1119163746,
   "name": "LO(L)-columns",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/LO(L)-layers-v1",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "colorSeed": 1119163746,
   "name": "LO(L)-layers",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/LOP(L)-columns-v1",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "colorSeed": 1119163746,
   "name": "LOP(L)-columns",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/LOP(L)-layers-v1",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "segments",
   "colorSeed": 1119163746,
   "name": "LOP(L)-layers",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/OL(R)-v0",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "rendering",
   "meshSilhouetteRendering": 4,
   "segments": ["1"],
   "segmentDefaultColor": "#ffffff",
   "name": "OL(R)",
   "archived": true},
  {"type": "segmentation",
   "source": {"url": "precomputed://gs://flyem-cns-roi-7c971aa681da83f9a074a1f0e8ef60f4/OL(R)-release",
    "subsources": {"default": true, "properties": true, "mesh": true},
    "enableDefaultSubsources": false},
   "pick": false,
   "tab": "rendering",
   "meshSilhouetteRendering": 4,
   "segments": ["1"],
   "segmentDefaultColor": "#00ffff",
   "name": "OL(R)-release-mask",
   "archived": true},
  {"type": "annotation",
   "source": {"url": "local://annotations",
    "transform": {"outputDimensions": {"x": [8e-09, "m"],
      "y": [8e-09, "m"],
      "z": [8e-09, "m"]}}},
   "tool": "annotatePoint",
   "tab": "rendering",
   "annotations": [{"pointA": [1772, 233, 87],
     "pointB": [1772, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x243556ea45fccdb3"},
    {"pointA": [4096, 233, 87],
     "pointB": [4096, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x7dec88d671198e05"},
    {"pointA": [6772, 233, 87],
     "pointB": [6772, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x46bf5d0615c0e544"},
    {"pointA": [9480, 233, 87],
     "pointB": [9480, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x2f11854225243eb6"},
    {"pointA": [12237, 233, 87],
     "pointB": [12237, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x25e919c8a3070d57"},
    {"pointA": [14970, 233, 87],
     "pointB": [14970, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x1f29bfef086e798f"},
    {"pointA": [17745, 233, 87],
     "pointB": [17745, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x49685a9664cd5ea3"},
    {"pointA": [20450, 233, 87],
     "pointB": [20450, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x76573bf0554e11ce"},
    {"pointA": [23258, 233, 87],
     "pointB": [23258, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x4892a574a9bc8630"},
    {"pointA": [25834, 233, 87],
     "pointB": [25834, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x51b23df95b4c88ca"},
    {"pointA": [28493, 233, 87],
     "pointB": [28493, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x817aa9761d9f8f1"},
    {"pointA": [31198, 233, 87],
     "pointB": [31198, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x4a37da84912ffe89"},
    {"pointA": [33867, 233, 87],
     "pointB": [33867, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x7fd23579453e8356"},
    {"pointA": [36596, 233, 87],
     "pointB": [36596, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0xad319afaad627f7"},
    {"pointA": [39298, 233, 87],
     "pointB": [39298, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x72b06ccda2b4f8f4"},
    {"pointA": [41957, 233, 87],
     "pointB": [41957, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x2213ea1fee6fecce"},
    {"pointA": [44569, 233, 87],
     "pointB": [44569, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x6e2fdf7a5919f90f"},
    {"pointA": [47232, 233, 87],
     "pointB": [47232, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x97089aa1805cb5e"},
    {"pointA": [49915, 233, 87],
     "pointB": [49915, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x7c125a314ef434dc"},
    {"pointA": [52631, 233, 87],
     "pointB": [52631, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x5c1bcd51397f5c56"},
    {"pointA": [55305, 233, 87],
     "pointB": [55305, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x2facad625812f6d"},
    {"pointA": [58055, 233, 87],
     "pointB": [58055, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x79d27c5ac6b72dfc"},
    {"pointA": [60729, 233, 87],
     "pointB": [60729, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x8de0b67b8b3b440"},
    {"pointA": [63415, 233, 87],
     "pointB": [63415, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x63f21a705de3c8f0"},
    {"pointA": [66125, 233, 87],
     "pointB": [66125, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x622892dea8f57603"},
    {"pointA": [68784, 233, 87],
     "pointB": [68784, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x41854e63f48adc92"},
    {"pointA": [71474, 233, 87],
     "pointB": [71474, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0xa6cc84f955bd47a"},
    {"pointA": [74160, 233, 87],
     "pointB": [74160, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x4c39ff50a898a5"},
    {"pointA": [76885, 233, 87],
     "pointB": [76885, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x17bf85a5580dc861"},
    {"pointA": [79462, 233, 87],
     "pointB": [79462, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x53d6f3a6294595f8"},
    {"pointA": [82083, 233, 87],
     "pointB": [82083, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x18ee81115e20d9e7"},
    {"pointA": [84816, 233, 87],
     "pointB": [84816, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x29af8015f3974517"},
    {"pointA": [87468, 233, 87],
     "pointB": [87468, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x4bf2100501516224"},
    {"pointA": [89947, 233, 87],
     "pointB": [89947, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x10cfb14ac3802ccc"},
    {"pointA": [92672, 233, 87],
     "pointB": [92672, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x618dd2df21a4238"},
    {"pointA": [94088, 233, 87],
     "pointB": [94088, 65700, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x34dc55e220983c1f"}],
   "shader": "void main() {\n    //\n    // Bounding Box API\n    //\n    setBoundingBoxBorderWidth(1.0);\n    setBoundingBoxBorderColor(defaultColor());\n    setBoundingBoxFillColor(vec4(defaultColor(), 0.5));\n}\n",
   "name": "brain-hotknife-planes",
   "archived": true},
  {"type": "annotation",
   "source": {"url": "local://annotations",
    "transform": {"outputDimensions": {"x": [8e-09, "m"],
      "y": [8e-09, "m"],
      "z": [8e-09, "m"]}}},
   "tool": "annotatePoint",
   "tab": "source",
   "annotations": [{"pointA": [24949, 35790, 51889],
     "pointB": [74725, 76577, 51889],
     "type": "axis_aligned_bounding_box",
     "id": "0x6c32da08798ccca9"},
    {"pointA": [24949, 35790, 54772],
     "pointB": [74725, 76577, 54772],
     "type": "axis_aligned_bounding_box",
     "id": "0x4d8f213cd8f5e7a9"},
    {"pointA": [24949, 35790, 57433],
     "pointB": [74725, 76577, 57433],
     "type": "axis_aligned_bounding_box",
     "id": "0x7cbbfb949260436e"},
    {"pointA": [24949, 35790, 60110],
     "pointB": [74725, 76577, 60110],
     "type": "axis_aligned_bounding_box",
     "id": "0x72bd53aea7c8b57c"},
    {"pointA": [24949, 35790, 62552],
     "pointB": [74725, 76577, 62552],
     "type": "axis_aligned_bounding_box",
     "id": "0x76a57d208a05b5e1"},
    {"pointA": [24949, 35790, 65281],
     "pointB": [74725, 76577, 65281],
     "type": "axis_aligned_bounding_box",
     "id": "0x70d6dbbebb4f5a41"},
    {"pointA": [24949, 35790, 67999],
     "pointB": [74725, 76577, 67999],
     "type": "axis_aligned_bounding_box",
     "id": "0xc1a08b72a1152c5"},
    {"pointA": [24949, 35790, 70589],
     "pointB": [74725, 76577, 70589],
     "type": "axis_aligned_bounding_box",
     "id": "0xcc6a3d3634ea79d"},
    {"pointA": [24949, 35790, 73307],
     "pointB": [74725, 76577, 73307],
     "type": "axis_aligned_bounding_box",
     "id": "0x5dbb421caca2acad"},
    {"pointA": [24949, 35790, 75940],
     "pointB": [74725, 76577, 75940],
     "type": "axis_aligned_bounding_box",
     "id": "0x7a50f3ebd9817b5f"},
    {"pointA": [24949, 35790, 78592],
     "pointB": [74725, 76577, 78592],
     "type": "axis_aligned_bounding_box",
     "id": "0x90f7467b6b1ded2"},
    {"pointA": [24949, 35790, 81227],
     "pointB": [74725, 76577, 81227],
     "type": "axis_aligned_bounding_box",
     "id": "0x7ccaa8cccc0e952"},
    {"pointA": [24949, 35790, 83989],
     "pointB": [74725, 76577, 83989],
     "type": "axis_aligned_bounding_box",
     "id": "0x4324cb5176e4020c"},
    {"pointA": [24949, 35790, 86767],
     "pointB": [74725, 76577, 86767],
     "type": "axis_aligned_bounding_box",
     "id": "0x362de77472de8a9d"},
    {"pointA": [24949, 35790, 89364],
     "pointB": [74725, 76577, 89364],
     "type": "axis_aligned_bounding_box",
     "id": "0x4f8b76ec8dc50d50"},
    {"pointA": [24949, 35790, 92067],
     "pointB": [74725, 76577, 92067],
     "type": "axis_aligned_bounding_box",
     "id": "0x553c4ba19a1858eb"},
    {"pointA": [24949, 35790, 94768],
     "pointB": [74725, 76577, 94768],
     "type": "axis_aligned_bounding_box",
     "id": "0x75a0be9ad7716eb6"},
    {"pointA": [24949, 35790, 97418],
     "pointB": [74725, 76577, 97418],
     "type": "axis_aligned_bounding_box",
     "id": "0x6e2764422dde5106"},
    {"pointA": [24949, 35790, 100016],
     "pointB": [74725, 76577, 100016],
     "type": "axis_aligned_bounding_box",
     "id": "0x2da03a324634962e"},
    {"pointA": [24949, 35790, 102628],
     "pointB": [74725, 76577, 102628],
     "type": "axis_aligned_bounding_box",
     "id": "0xc67ffbd71d8b2f9"},
    {"pointA": [24949, 35790, 105183],
     "pointB": [74725, 76577, 105183],
     "type": "axis_aligned_bounding_box",
     "id": "0xf11edcbfca0759"},
    {"pointA": [24949, 35790, 107820],
     "pointB": [74725, 76577, 107820],
     "type": "axis_aligned_bounding_box",
     "id": "0x52cb557ecd4da2ae"},
    {"pointA": [24949, 35790, 110536],
     "pointB": [74725, 76577, 110536],
     "type": "axis_aligned_bounding_box",
     "id": "0x15a411e1ada69f21"},
    {"pointA": [24949, 35790, 113250],
     "pointB": [74725, 76577, 113250],
     "type": "axis_aligned_bounding_box",
     "id": "0x5ae5b79d47efb646"},
    {"pointA": [24949, 35790, 116000],
     "pointB": [74725, 76577, 116000],
     "type": "axis_aligned_bounding_box",
     "id": "0x9cb95894e1b67c3"},
    {"pointA": [24949, 35790, 118612],
     "pointB": [74725, 76577, 118612],
     "type": "axis_aligned_bounding_box",
     "id": "0x1c01f89be63c159c"},
    {"pointA": [24949, 35790, 121236],
     "pointB": [74725, 76577, 121236],
     "type": "axis_aligned_bounding_box",
     "id": "0x6063ec9c9e6c89b2"},
    {"pointA": [24949, 35790, 123914],
     "pointB": [74725, 76577, 123914],
     "type": "axis_aligned_bounding_box",
     "id": "0x3043f04242141758"},
    {"pointA": [24949, 35790, 126538],
     "pointB": [74725, 76577, 126538],
     "type": "axis_aligned_bounding_box",
     "id": "0x6f6dc5a588704f80"},
    {"pointA": [24949, 35790, 129234],
     "pointB": [74725, 76577, 129234],
     "type": "axis_aligned_bounding_box",
     "id": "0x592ab073ece33d2b"},
    {"pointA": [24949, 35790, 131913],
     "pointB": [74725, 76577, 131913],
     "type": "axis_aligned_bounding_box",
     "id": "0x6e2b04abb3905f1b"},
    {"pointA": [24949, 35790, 134576],
     "pointB": [74725, 76577, 134576],
     "type": "axis_aligned_bounding_box",
     "id": "0x49dd5ea003870de6"}],
   "shader": "void main() {\n    //\n    // Bounding Box API\n    //\n    setBoundingBoxBorderWidth(1.0);\n    setBoundingBoxBorderColor(defaultColor());\n    setBoundingBoxFillColor(vec4(defaultColor(), 0.5));\n}\n",
   "name": "vnc-hotknife-planes",
   "archived": true},
  {"type": "segmentation",
   "source": "precomputed://https://flyem.mrc-lmb.cam.ac.uk/flyconnectome/hemibrain2mcns",
   "tab": "segments",
   "segmentDefaultColor": "#e90002",
   "name": "hemibrain-meshes",
   "archived": true},
  {"type": "segmentation",
   "source": ["precomputed://https://flyem.mrc-lmb.cam.ac.uk/flyconnectome/flywire2mcns/783_v2",
    "precomputed://https://flyem.mrc-lmb.cam.ac.uk/flyconnectome/dynannint/flytable-info-783"],
   "tab": "segments",
   "segmentDefaultColor": "#d400ff",
   "name": "flywire-meshes",
   "archived": true}],
 "showSlices": false,
  "projectionBackgroundColor": "#1a1a1a",
 "selectedLayer": {"visible": true, "layer": "cns-seg"},
 "layout": "3d"
};

// Dataset information for conditional behavior
const DATASET_NAME = "male-cns:v0.9";
const IS_FAFB_DATASET = DATASET_NAME.toLowerCase().includes("fafb");


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

    // Handle empty body IDs case
    if (hasNoBodyIds) {
      console.log("[CHECKBOX] Empty body IDs detected for partner cell:", td);
      checkbox.disabled = true;
      checkbox.checked = false;
      td.classList.add("no-body-ids");
      td.classList.remove("partner-on");
    } else {
      checkbox.disabled = false;
      td.classList.remove("no-body-ids");
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
    return `https://clio-ng.janelia.org/#!${encodedState}`;
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
