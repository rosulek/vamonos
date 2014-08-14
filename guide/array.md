---
layout: userguide
title: "Vamonos User's Guide: The array widget"
header: "Vamonos User's Guide"
scriptinclude: "array.js"
---

# Introduction

In this tutorial we will create a visualization for Quicksort from scratch in
order to demonstrate how to use the Array widget. This visualzation will use
the Pseudocode and CallStack widgets from previous tutorials, so it is
recommended that you read them first!

# Getting Started

We start by creating a visualization implementing Quicksort with all of the
elements we've seen already: `Psueudocode`, `CallStack`, `Controls`, and
`Visualizer`.

> [quicksort1.html](array-tutorial/quicksort1.html)
>
> <div class="viz-container">
> <table class="vamonos">
> <tr><td class="pseudocode-and-controls">
> <div id="quicksort1" title="Quicksort(A,p,r):">
>             if p &amp;lt r;
>                 mid = Partition(A,p,r)
>                 Quicksort(A,p,mid - 1)
>                 Quicksort(A,mid + 1,r)
> </div>
> <div id="partition1" title="Partition(A,p,r):">
>             x = A[r]
>             i = p-1
>             for j = p to r-1
>                 if A[j] &amp;le; x
>                     i = i + 1
>                     exchange A[i] with A[j]
>             exchange A[i+1] with A[r]
>             return i+1
> </div>
> <div id="controls1">
> </div>
> </td><td class="variable-widgets">
> <table class="variable-widgets">
> <tr><td><div id="callstack-var1"></div></td>
> <td><div id="callstack1"></div></td></tr>
> </table></td></tr></table>
> </div>


It runs, but we cannot see the output! It's a great thing indeed that the
Vamonos team created the Array widget.

# The Array Widget

The `Array` widget lets users edit arrays and see their changes during the
course of a simulation. It is a very flexible widget, with a large number of
options.  Its constructor has two required arguments:

* `varName` : the name of the array in the algorithm.

* `container` : the id of a div in which the widget will draw itself.

Other non-required but essential arguments:

* `defaultInput` : the initial array for the algorithm to begin with. The default
value is the empty array.


> HTML:
>
>     <div id="demo1array" class="viz-container"></div>
>
> Javascript:
>
>     var arrayDemo1 = new Vamonos.Visualizer({
>         widgets: [
>             new Vamonos.Widget.Array({
>                 varName: "A",
>                 container: "demo1array",
>                 defaultInput: [3,1,4,5,9,2,6]
>             }),
>         ]
>     });
>
> <div id="demo1array" class="viz-container"></div>

This creates an editable array (in editMode at least!). At the end of edit
mode, the modified array will be available for the algorithm to use. In our
Quicksort demo we can use the `defaultInput` argument instead of the
`Hardcoded` widget to give the visualization something to start with.

> [quicksort2.html](array-tutorial/quicksort2.html)
>
> <table class="vamonos">
> <tr><td class="pseudocode-and-controls2">
> <div id="quicksort2" title="Quicksort(A,p,r):">
>             if p &amp;lt r;
>                 mid = Partition(A,p,r)
>                 Quicksort(A,p,mid - 1)
>                 Quicksort(A,mid + 1,r)
> </div>
> <div id="partition2" title="Partition(A,p,r):">
>             x = A[r]
>             i = p-1
>             for j = p to r-1
>                 if A[j] &amp;le; x
>                     i = i + 1
>                     exchange A[i] with A[j]
>             exchange A[i+1] with A[r]
>             return i+1
> </div>
> <div id="controls2"></div>
> </td><td class="variable-widgets">
> <table class="variable-widgets">
> <tr><td><div id="array-var2"></div></td>
> <td><div id="array2"></div></td></tr>
> <tr><td><div id="callstack-var2"></div></td>
> <td><div id="callstack2"></div></td></tr>
> </table></td></tr></table>

# Other Fun Arguments

Well, it works all right, but we can't really see the process! Fortunately
there are some things we can do.

* `showIndicies` : takes an array of varNames, each of which it finds in the
stash and, assuming an integer value, displays as an index into the array.

* `cssRules` : is for applying css rules to sections of the array based on
indicies. It takes an array of arrays of the format `[relation, varName, class]`.
"Relation" can be one of ">", ">=", "<", "<=", "=", "==". It applies the class
to cells in the array that have an index less than, greater than, equal to, etc,
the index contained in varName. That's kind of confusing, I know. It'll be clear
when we see it in action.

In the example below, we apply the class "shaded" to cells whose index is greater
than `i`.

> HTML:
>
>     <div id="demo2array" class="viz-container">
>     </div>
>     <br>
>     <div id="demo2controls" class="viz-container">
>     </div>
>
> Javascript:
>
>     var array3 = new Vamonos.Visualizer({
>         widgets: [
>             new Vamonos.Widget.Array({
>                 varName: "A",
>                 container: "array3",
>                 defaultInput: [3,1,4,1,5,9],
>                 cssRules: [
>                     [">", "i", "shaded"]
>                 ],
>                 showIndices: ["i"],
>             }),
>
>             // We need to tell Vamonos to take a snapshot at _(1).
>             // The other way we could do this is by setting a watchVar
>             // for i.
>             new Vamonos.Widget.Hardcoded({breakpoints: [1]}),
>
>             new Vamonos.Widget.Controls("controls3")
>         ],
>
>         algorithm: function(_) {
>             with (this) {
>                 for (i = 0; i < 6; i++) {
>                     _(1);
>                 }
>             }
>         }
>     });
>
> <div id="demo2array" class="viz-container">
> </div>
> <br>
> <div id="demo2controls" class="viz-container">
> </div>

We can apply `showIndices` to Quicksort to show the index variables `p`,`r`,
`partition::j`, and `partition::i`. We can use `cssRules` along with special
css classes to set up highlighting. The `!important` flag is necessary in order
to override some of Vamonos' css rules.

> HTML:
>
>     <style type="text/css">
>         td.gt-i.leq-j {
>             background-color: white !important;
>         }
>         td.gt-r, td.lt-p {
>             background-color: #999 !important;
>         }
>     </style>

> Javascript:
>
>     new Vamonos.Widget.Array({
>         container: "array",
>         varName: "A",
>         defaultInput: [0,2,8,7,1,3,5,6,4],
>         ignoreIndexZero: true,
>         showIndices: ["p","r","partition::j","partition::i"],
>         cssRules: [
>             ['>', 'i', 'gt-i'],
>             ['<', 'p', 'lt-p'],
>             ['<=', 'j', 'leq-j'],
>             ['>','r','gt-r'],
>         ],
>     }),

Yay! Now we have a functional quicksort demo!

> [quicksort3.html](array-tutorial/quicksort3.html)
>
> <style type="text/css">
>     td.gt-i.leq-j {
>         background-color: white !important;
>     }
>     td.gt-r, td.lt-p {
>         background-color: #999 !important;
>     }
> </style>
> <table class="vamonos">
> <tr><td class="pseudocode-and-controls">
> <div id="quicksort3" title="Quicksort(A,p,r):">
>             if p &amp;lt r;
>                 q = Partition(A,p,r)
>                 Quicksort(A,p,q - 1)
>                 Quicksort(A,q + 1,r)
> </div>
> <div id="partition3" title="Partition(A,p,r):">
>             i = p-1
>             for j = p to r-1
>                 if A[j] &amp;le; A[r]
>                     i = i + 1
>                     exchange A[i] with A[j]
>             exchange A[i+1] with A[r]
>             return i+1
> </div><div id="controls3">
> </div></td><td class="variable-widgets">
> <table class="variable-widgets">
> <tr><td><div id="array-var3"></div></td>
> <td><div id="array3"></div></td></tr>
> <tr><td><div id="callstack-var3"></div></td>
> <td><div id="callstack3"></div></td></tr>
> </table> </td></tr> </table>
