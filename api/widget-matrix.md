---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Widget.Matrix
=====================

[Back](index.html)

Displays a two dimensional array.


### Arguments are shared with inner objects:

 * [Vamonos.Widget.ArrayGuts](widget-arrayguts.html)


### Constructor Arguments

 * **container** :: *String* | *jQuery Selector* -- **required**

    The id or a jQuery selector of the div in which this widget should draw itself.



 * **varName** :: *String* -- **required**

    the name of variable that this widget represents



 * **tableContainer** :: *jQuery Selector* -- **required**

    a selector of the dom element the guts should go in



 * **showChanges** :: *String* | *Array* -- default Value: `"next"`

    type of frame shifts to highlight changes at, can be multiple types with an array of strings



 * **cssRules** :: *Array* -- default Value: `[]`

    an array of triples of the form `[comparison, index-variable-expr, css-class]` where every index in the array that matches the comparason against the given index-variable-expr receives the given css class.

    Example:

>     cssRules: [
>         ['>', 'k', 'shaded'],
>         ['=', 'k+i', 'green'],
>     ]



 * **showIndices** :: *Array* -- default Value: `[]`

    an array of index-variable-exprs of the form that show the text of the index-variable-exprs on the indices they correspond to.



 * **cellFormat** :: *Function* -- optional

    A function that takes the raw contents of each entry and returns the html to be displayed.



 * **defaultInput** :: *Array* -- default Value: `[]`

    the initial value for this array



 * **ignoreIndexZero** :: *Boolean* -- default Value: `false`

    whether the array should appear to be 1-indexed



 * **displayOnly** :: *Boolean* -- default Value: `false`

    whether the array is editable



 * **showLabel** :: *Boolean* -- default Value: `false`

    whether to show the varName before the array



 * **cellParse** :: *Function* -- optional

    A function that parses the text input from an editable cell to an internal representation.



 * **persistent** :: *Boolean* -- default Value: `false`

    whether to save the result of running the algorithm and to use it as the initial value upon returning to edit mode.



