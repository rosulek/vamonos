---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Widget.ArrayGuts
========================

[Back](index.html)

ArrayGuts is where array input and display happen.


### Constructor Arguments

 * **tableContainer** :: *jQuery Selector* -- **required**

    a selector of the dom element the guts should go in



 * **varName** :: *String* -- **required**

    the name of variable that this widget represents



 * **defaultInput** :: *Array* -- default Value: `[]`

    the initial value for this array



 * **ignoreIndexZero** :: *Boolean* -- default Value: `false`

    whether the array should appear to be 1-indexed



 * **displayOnly** :: *Boolean* -- default Value: `false`

    whether the array is editable



 * **showChanges** :: *String* | *Array* -- default Value: `"next"`

    type of frame shifts to highlight changes at, can be multiple types with an array of strings



 * **cssRules** :: *Array* -- default Value: `[]`

    an array of triples of the form `\[comparison, index-variable-expr, css-class\]` where every index in the array that matches the comparason against the given index-variable-expr receives the given css class.

    Example:

>     cssRules: [['>', 'k', 'shaded']]



 * **showIndices** :: *Array* -- default Value: `[]`

    an array of index-variable-exprs of the form that show the text of the index-variable-exprs on the indices they correspond to.



 * **showLabel** :: *Boolean* -- default Value: `false`

    whether to show the varName before the array



 * **cellFormat** :: *Function* -- optional

    A function that takes the raw contents of each entry and returns the html to be displayed.



 * **cellParse** :: *Function* -- optional

    A function that parses the text input from an editable cell to an internal representation.



 * **persistent** :: *Boolean* -- default Value: `false`

    whether to save the result of running the algorithm and to use it as the initial value upon returning to edit mode.



