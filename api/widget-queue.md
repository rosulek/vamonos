---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Widget.Queue
====================

[Back](index.html)


### Arguments are shared with inner objects:

 * [Vamonos.Widget.ArrayGuts](widget-arrayguts.html)


### Constructor Arguments

 * **container** :: *String* | *jQuery Selector* -- **required**

    The id or a jQuery selector of the div in which this widget should draw itself.



 * **varName** :: *String* -- **required**

    the name of variable that this widget represents



 * **cellFormat** :: *Function* -- optional

    A function that takes the raw contents of each entry and returns the html to be displayed.



 * **cellParse** :: *Function* -- optional

    A function that parses the text input from an editable cell to an internal representation.



 * **cssRules** :: *Array* -- default Value: `[]`

    an array of quadruples of the form [row/column, comparison, index-variable-expr, css-class] where every row/column in the matrix that matches the comparason against the given index-variable-expr receives the given css class.

    Example:

>     cssRules: [
>         ['>', 'k', 'shaded'],
>         ['=', 'k+i', 'green'],
>     ]



 * **defaultInput** :: *Array* -- default Value: `[]`

    the initial value for this array



 * **displayOnly** :: *Boolean* -- default Value: `false`

    whether the array is editable



 * **ignoreIndexZero** :: *Boolean* -- default Value: `false`

    whether the array should appear to be 1-indexed



 * **persistent** :: *Boolean* -- default Value: `false`

    whether to save the result of running the algorithm and to use it as the initial value upon returning to edit mode.



 * **showCellNumber** :: *Boolean* -- default Value: `false`

    whether to show numbers above queue elements



 * **showChanges** :: *String* | *Array* -- default Value: `"next"`

    type of frame shifts to highlight changes at, can be multiple types with an array of strings



 * **showIndices** :: *Array* -- default Value: `[]`

    an array of doubles of the form [row/column, index-variable-expr] that show the text of the index-variable-expr on the row/column it corresponds to.



 * **showLabel** :: *Boolean* -- default Value: `false`

    whether to show the varName before the array



