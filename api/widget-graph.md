---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Widget.Graph
====================

[Back](index.html)

The Graph widget provides graph input functionality. It uses GraphDisplay for functionality that is not related to input.


### Arguments are shared with inner objects:

 * [Vamonos.Widget.GraphDisplay](widget-graphdisplay.html)


### Constructor Arguments

 * **container** :: *String* | *jQuery Selector* -- **required**

    The id or a jQuery selector of the div in which this widget should draw itself.



 * **varName** :: *String* -- **required**

    the name of variable that this widget represents



 * **colorEdges** :: *Array* -- default Value: `[]`

    provides a way to set edge coloring based on vertex variables or edge properties. takes an array of doubles of the form  `[ edge-predicate, color, [optional weight] ]`, where color is a hex color and edge-predicate is either a string of the form `'vertex1->vertex2'` or a function that takes an edge and returns a boolean. Also for added complexity and enjoyment, the color string can also be a function taking an edge and returning a color string or a color string and a width (if it returns an array).

    Example:

>     colorEdges: [
>         ['u->v', '#FF7D7D'],
>         [ function(edge){
>             return (edge.target.pred ? edge.target.pred.id === edge.source.id : false)
>                 || (edge.source.pred ? edge.source.pred.id === edge.target.id : false) }
>         , '#92E894' ],
>         [ 'w->t', function(e){ if (e.f > 10) return "blue"; } ],
>         [ 'w->x', function(e){ if (e.f < 10) return ["blue",10]; } ],
>     ]



 * **containerMargin** :: *Number* -- default Value: `30`

    how close nodes can get to the container edge



 * **defaultGraph** :: *Graph* -- optional

    the initial graph, as a Vamonos.DataStructure.Graph



 * **draggable** :: *Boolean* -- default Value: `true`

    whether nodes can be moved



 * **edgeLabel** :: *Object* | *Array* | *Function* -- optional

    an array, containing the name of the edge attribute to displayand the default value for new edges or a function taking an edge and returning a string. one can also specify whether to show certain things in edit or display mode by using an object.

    Example:

>     edgeLabel: { display: [ 'w', 1 ], edit: function(e){ return e.w } }



 * **editable** :: *Boolean* -- default Value: `true`

    whether the graph allows user input



 * **highlightChanges** :: *Boolean* -- default Value: `true`

    whether nodes will get the css class 'changed' when they are modified



 * **inputVars** :: *Object* -- default Value: `{}`

    a mapping of variable names to vertex ids of the form                 `{ var1: 'node1' }` for displaying variables that contain                 vertices.



 * **minX** :: *Number* -- default Value: `100`

    minimum width of the graph widget



 * **minY** :: *Number* -- default Value: `100`

    minimum height of the graph widget



 * **resizable** :: *Boolean* -- default Value: `true`

    whether the graph widget is resizable



 * **showChanges** :: *String* | *Array* -- default Value: `"next"`

    type of frame shifts to highlight changes at, can be multiple types with an array of strings



 * **tooltips** :: *Boolean* -- default Value: `true`

    whether to display tooltips



 * **vertexCssAttributes** :: *Object* -- default Value: `{}`

    provides a way to change CSS classes of vertices based on vertex attributes. takes an object of the form `{ attribute: value | [list of values] }`. in the case of a single value,  the vertex will simply get a class with the same name as the attribute. in the case of a list of values, the css class will be of the form 'attribute-value' when its value matches.

    Example:

>     vertexCssAttributes: { done: true }
>     vertexCssAttributes: { color: ['white', 'gray', 'black'] }



 * **vertexLabels** :: *Object* -- default Value: `{}`

    an object containing a mapping of label positions (inner, nw, sw, ne, se) to labels. Labels can display simple variable names (corresponding to inputVars). This must be provided in the form: `{ label: ['var1', 'var2'] }`. It can be more complicated, as a function that takes a vertex and returns some html. if we give a label an object, we can control what is shown in edit/display mode in the form: `{ label : { edit: function{}, display: function{} } }`

    Example:

>     vertexLabels: {
>         inner : {
>             edit: function(vtx){return vtx.name}, 
>             display: function(vtx){return vtx.d} 
>         },
>         sw    : function(vtx){return vtx.name}, 
>         ne    : ['u', 'v'],
>         nw    : ['s'],
>     }



