---
layout: userguide
title: "Vamonos User's Guide: The graph widget"
header: "Vamonos User's Guide"
scriptinclude: "graph.js"
---

# Introduction

This tutorial is for familiarizing you with the `Graph` widget
([docs](../api/widget-graph.html)). We'll be implementing Prim's MST algorithm.
As with the Array Tutorial, basic knowledge of other widgets is assumed.

# Getting Started

We created the start for Prim's Algorithm. It uses a `Queue` widget
([docs](../api/data-queue.html)) which is a very simple wrapper for the `Array`
widget. All that is missing from Prim\'s is a `Graph`!

> [prims1.html](graph-tutorial/prims1.html)
>
> <table class="vamonos">
>     <tr><td class="pseudocode-and-controls">
>         <div class="pseudocode-procedures">
>             <div id="pseudocode1" title="MST-Prim(G,r)">
>                 for each u &in; G.V
>                     u.key = &infin;
>                     u.pred = nil
>                 r.key = 0
>                 Q = G.V
>                 while Q &ne; &empty;
>                     u = ExtractMin(Q)
>                     for each v &in; G.Adj[u]
>                         if v &in; Q and w(u,v) &lt; v.key
>                             u.pred = v
>                             v.key = w(u,v)
>             </div>
>         </div>
>     </td></tr>
> </table>

# The Graph Widget

The `Graph` widget takes the same required arguments as most other widgets -
`varName` and `container`.

Prim's has an argument `r`, that needs to be provided somehow. We
can use `Graph`'s `inputVars` argument for that. It takes an object
mapping a variable name to a "graph id". 

Speaking of graph ids - we can use a `Graph` data structure
([docs](../api/data-graph.md)) to define a default graph for the widget.
The `Graph` data structure has many methods essential for writing graph
algorithms. In Prim's we use `eachNeighbor` and `vertices`. It is highly
recommended that you check out the API.

Lets put it in to Prim's and see how it looks.

> Javascript:
>
>     new Vamonos.Widget.Graph({
>         container: "graph",
>         varName: "G",
>         inputVars: { r: "v3" },
>         defaultGraph: new Vamonos.DataStructure.Graph({
>             vertices: [ 
>                 {id: "v0", x: 17,  y: 10},
>                 {id: "v1", x: 98,  y: 10},
>                 {id: "v2", x: 176, y: 13},
>                 {id: "v3", x: 15,  y: 78},
>                 {id: "v4", x: 100, y: 80},
>                 {id: "v5", x: 182, y: 80},
>                 {id: "v6", x: 15,  y: 138},
>                 {id: "v7", x: 100, y: 140},
>                 {id: "v8", x: 182, y: 140},
>             ],
>             edges: [
>                 {source: "v0",target: "v4", w:1},
>                 {source: "v1",target: "v2", w:2},
>                 {source: "v1",target: "v4", w:5},
>                 {source: "v3",target: "v4", w:3},
>                 {source: "v3",target: "v6", w:1},
>                 {source: "v4",target: "v8", w:10},
>                 {source: "v5",target: "v8", w:2},
>                 {source: "v6",target: "v7", w:3},
>                 {source: "v7",target: "v8", w:2},
>             ]
>         }),
>     })

> [prims2.html](graph-tutorial/prims2.html)
>
> <table class="vamonos">
>     <tr><td class="pseudocode-and-controls">
>         <div id="controls2"></div>
>         <div class="pseudocode-procedures">
>             <div id="pseudocode2" title="MST-Prim(G,r)">
>                 for each u &in; G.V
>                     u.key = &infin;
>                     u.pred = nil
>                 r.key = 0
>                 Q = G.V
>                 while Q &ne; &empty;
>                     u = ExtractMin(Q)
>                     for each v &in; G.Adj[u]
>                         if v &in; Q and w(u,v) &lt; v.key
>                             u.pred = v
>                             v.key = w(u,v)
>             </div>
>         </div>
>     </td><td class="variable-widgets">
>         <table class="variable-widgets">
>             <tr><td><div id="g-var2"></div></td>
>                 <td><div id="graph2"></div></td>
>             </tr>
>             <tr><td><div id="u-var2"></div></td>
>                 <td><div id="u2"></div></td>
>             </tr>
>             <tr><td><div id="v-var2"></div></td>
>                 <td><div id="v2"></div></td>
>             </tr>
>             <tr><td><div id="q-var2"></div></td>
>                 <td><div id="queue2"></div></td></tr>
>         </table>
>     </td></tr>
> </table>

# Fancy Graph Stuff

What's missing you say? Edge weights. Labeling of `u`, `v`, and `r` variables.
Labeling of `key` values for each vertex. Seeing some representation of the MST
when it's all done!

Fortunately the Vamonos team has created solutions for all of these problems.

* `vertexLabels` - lets you declare labels around vertices. It will either display
a variable name when the corresponding variable equals that vertex, or some 
arbitrary attribute of the vertex, accessed with a function. It is perhaps best
explained by example:

> Javascript:
>
>     vertexLabels: {
>         inner: {
>             edit: function(vtx){ return vtx.name },
>             display: function(vtx){ return vtx.key },
>         },
>         sw: {
>             edit: function(vtx){ return "" },
>             display: function(vtx){ return vtx.name },
>         },
>         ne: ['u','v'],
>         nw: ['r'],
>     },

* `edgeLabel` - lets you tell `Vamonos` to display an arbitrary edge attribute.
It has a few options, but the simplest is to just give it the name of the
attribute you want to see.

> Javascript:
>
>     edgeLabel: "w",


* `colorEdges` - is a little trickier. You can apply a color when two 
vertex variables are connected by an edge. The edge must be encoded as a string
with the variable names and an arrow between them. You can also perform custom
calulations based on an edge input to a function that you provide. When you
return true, the color will be applied to the edge.

> Javascript:
>
>     colorEdges: [
>         ["u->v", "#FF7D7D"],
>         [ function(edge){
>             return (edge.target.pred ? edge.target.pred.id === edge.source.id : false)
>                 || (edge.source.pred ? edge.source.pred.id === edge.target.id : false) }
>         , "#92E894" ],
>     ],

Finally, we can customize how the labels (and vertices) look with CSS.

> CSS:
>
>     <style type="text/css">
>         .vertex {
>             width: 40;
>             height: 30;
>         }
>
>         .vertex-contents {
>             font-size: .8em;
>         }
>
>         .vertex-ne-label, .vertex-nw-label {
>             font-weight: bold;
>         }
>
>         .vertex-sw-label {
>             font-style: italic;
>         }
>     </style>

Now we have a fully functional Prim's MST algorithm visualization!

> [prims3.html](graph-tutorial/prims3.html)
>
> <style type="text/css">
>     .vertex {
>         width: 40;
>         height: 30;
>     }
>     .vertex-contents {
>         font-size: .8em;
>     }
>     .vertex-ne-label, .vertex-nw-label {
>         font-weight: bold;
>     }
>     .vertex-sw-label {
>         font-style: italic;
>     }
> </style>
> <table class="vamonos">
>     <tr><td class="pseudocode-and-controls">
>         <div id="controls3"></div>
>         <div class="pseudocode-procedures">
>             <div id="pseudocode3" title="MST-Prim(G,r)">
>                 for each u &in; G.V
>                     u.key = &infin;
>                     u.pred = nil
>                 r.key = 0
>                 Q = G.V
>                 while Q &ne; &empty;
>                     u = ExtractMin(Q)
>                     for each v &in; G.Adj[u]
>                         if v &in; Q and w(u,v) &lt; v.key
>                             u.pred = v
>                             v.key = w(u,v)
>             </div>
>         </div>
>     </td><td class="variable-widgets">
>         <table class="variable-widgets">
>             <tr><td><div id="g-var3"></div></td>
>                 <td><div id="graph3"></div></td>
>             </tr>
>             <tr><td><div id="u-var3"></div></td>
>                 <td><div id="u3"></div></td>
>             </tr>
>             <tr><td><div id="v-var3"></div></td>
>                 <td><div id="v3"></div></td>
>             </tr>
>             <tr><td><div id="q-var3"></div></td>
>                 <td><div id="queue3"></div></td></tr>
>         </table>
>     </td></tr>
> </table>



