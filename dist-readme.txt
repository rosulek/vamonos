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
    ├── d3.js
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

v2.0.0 : released 4-8-2014
--------------------------

API
* Graph - change styleEdges to edgeCssAttributes - use css to style paths.
* New Widget - ResultProperty. Provide it with a mapping from
  qualified variable names to a side-effecting functions that take
  their variable as input. It will call the functions at displayStart
  event, using the final frame of the visualization.
* ArrayGuts - new constructor argument "firstCellBlank". Adds
  left-margin of 26px to array, for aligning 1-indexed with 0-indexed
  arrays.
* ArrayGuts - new constructor argument "maxInputLength". Allows custom
  limit to the length of the value in each cell.
* CallStack - new constructor argument "formatArgumentValues"
* CallStack - new constructor argument "formatReturnValue"

DEMOS
* Simplified Longest Increasing Subsequence
* Karatsuba Multiplication
* Recursive Addition
* Dijkstra's Quiz

GUTS
* Reimplemented the graph widget using d3.
* If hash-string decode fails, load Vamonos normally
* Set titles on all demos
* Overwrite history entry when a new querystring is appended to url
* Added LZW compression to the querystring
* When user pushes the "Run" button the browser location is updated to
  reflect the current state of the visualization inputs.
* New event: "externalInput", sends parsed JSON object from query
  string. Which should be a stringified inputScope from the
  Visualizer. Graphs and Arrays support saved input states.
* Vamonos.arrayToNum and .numToArray - methods for translating back
  and forth between 1234 and [1,2,3,4].* When user pushes the "Run"
  button the browser location is updated to reflect the current state
  of the visualization inputs.
* New event: "externalInput", sends parsed JSON object from query
  string. Which should be a stringified inputScope from the
  Visualizer. Graphs and Arrays support saved input states.
* Vamonos.arrayToNum and .numToArray - methods for translating back
  and forth between 1234 and [1,2,3,4].


v1.2.1 : released 1-13-2014
---------------------------

New Demos
    * Stoogesort
    * Bellman-Ford Shortest Path
    * Krustal's Minimum Spanning Tree
    * Strongly Connected Components

New Features
    * Created disjoint set data structure
    * Visualizer: maxCallStackSnapshotDepth: set the max depth that
      callstack snapshots will be taken at when it is set as a watchvar
    * Graph data structure - eachVertexBy and eachEdgeBy can take custom
      comparators
    * Graph vertexCssAttributes can take a function
    * Added tablet support

Bug Fixes
    * Graph gets hidden instead of tore down when it goes out of scope
    * Edges in directed graphs reuse the jsplumb connection when
      switching direction
    * Added Vamonos.createNColorClasses
    * API: Show default values that are functions as `[function]` instead
      of `undefined`.
    * Removed extra spin through loop in maxflow and bipartite matching
      demos.
    * The setup event sends widgets a callback that they call when they
      are done setting up. this is to allow jsPlumb to load
      asynchronously.
    * Fixed: Creating a potential edge that needed a new connection would
      cause all the endpoints on the source vertex to flip 180 degrees
    * Cloned undirected graphs had edges that weren't accessible from
      both edge(source,target) and edge(target,source)
    * Updated jsPlumb to 1.5.5 and jQuery to 2.0.3


v1.2.0 : released 12-14-2013
----------------------------

Breaking Changes:
    * Graph: edgeLabel is no longer used for setting default edge attr values

Changes:
    * created a page that lists all of our demos - demos/index.html
    * mergesort demo
    * dialed in ford-fulkerson
    * api is sorted alphabetically
    * new array "showCellNumber" option - now you can turn off the
      numbers above each array element (nice for queues)
    * pseudocode uses monospace font
    * subscript available in VarName and Graph variables as "name_sub"
    * demos got prettier

Bugfixes:
    * VarDisplay and Array maintain consistent height
    * arrays that ignore index zero can come in and out of scope
    * graph has 'showChanges' option
    * graph now prevents creation of nodes outside graph container
    * going to display mode after a graph element was selected caused
      strange resizing of graph
    * bidirectional edges in directed graphs got some fixes


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
