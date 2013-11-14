
================================================================================
                            Description of Files
================================================================================

vamonos/
│
│   
├── readme.txt                  : This file.
│
│   
├── vamonos-all.js              : Vamonos and all of its dependencies, in one
│                               : file.     
│
├── vamonos.css                 : Vamonos' css classes. Required for both
│                               : vamonos-all.js and vamonos.js.
│
├── vamonos.js                  : Vamonos by itself. Demos that use it must
│                               : import necessary dependencies themselves.
│
└── deps/
    ├── jquery-jsplumb.js
    ├── jquery.min.js
    ├── jquery-qtip.min.js
    └── jquery-ui.min.js

================================================================================
                                Basic Usage
================================================================================

To get started, you’ll need to make an HTML file that includes links to the
following things:

    Vamonos Javascript file
    Vamonos default CSS file

You can do that by including the following lines in your HTML file’s <head>
section:

    <link rel="stylesheet" href="path/to/vamonos.css" />
    <script type="text/javascript" src="path/to/vamonos-all.js"></script>

You can follow our guide to creating visualzations at:

    http://rosulek.github.io/vamonos/guide

We also recommend deconstructing some of our pre-made demos, available at:

    http://rosulek.github.io/vamonos

================================================================================
                             Version History
================================================================================

v1.1.0 : released 11-14-2013
----------------------------

Additions:
    * a new premade demo: Ford-Fulkerson Max Flow!
    * an error checking phase of visualization - new "checkErrors" event
    * a new error widget for custom error cases
    * graph widget got an "editable" option for view-only graphs
    * graph data structure got a new toString method
    * edgeLabel can be specific to display/edit mode
    * edgeLabel can take a function - in which case it won't be editable
    * graph widget - collapse bidirectional edges in directed graphs - both
      directions have individually editable attributes

Bugfixes: 
    * with multiple inputVars to the graph widget in edit mode - only the 
      final one was modifiable
    * graph widget - removed unnecessary clearing of graph
    * new vertices are centered at click for all vertex sizes
    * potential edge in directed graph uses existing incoming edge instead
      of creating a new edge
