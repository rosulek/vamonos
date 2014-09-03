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


Constructor Arguments
=====================

## **container** :: *String* | *jQuery Selector* -- **required**

The id or a jQuery selector of the div in which this widget should draw itself.



## **varName** :: *String* -- **required**

the name of variable that this widget represents



## **cellFormat** :: *Function* -- optional

A function that takes the raw contents of each entry and returns the html to be displayed.



## **cellParse** :: *Function* -- optional

A function that parses the text input from an editable cell to an internal representation.



## **cssRules** :: *Array* -- default value: `[]`

an array of quadruples of the form [row/column, comparison, index-variable-expr, css-class] where every row/column in the matrix that matches the comparason against the given index-variable-expr receives the given css class.

For Example:

>     cssRules: [
>         ['>', 'k', 'shaded'],
>         ['=', 'k+i', 'green'],
>     ]



## **defaultInput** :: *Array* -- default value: `[]`

the initial value for this array



## **displayOnly** :: *Boolean* -- default value: `false`

whether the array is editable



## **firstCellBlank** :: *Boolean* -- optional

Leave the first cell blank.



## **ignoreIndexZero** :: *Boolean* -- default value: `false`

whether the array should appear to be 1-indexed



## **maxInputLength** :: *Number* -- optional

Limit input to a certain number of characters.



## **persistent** :: *Boolean* -- default value: `false`

whether to save the result of running the algorithm and to use it as the initial value upon returning to edit mode.



## **showCellNumber** :: *Boolean* -- default value: `true`

Whether to show a number above each cell.



## **showChanges** :: *String* | *Array* -- default value: `"next"`

type of frame shifts to highlight changes at, can be multiple types with an array of strings



## **showIndices** :: *Array* -- default value: `[]`

an array of doubles of the form [row/column, index-variable-expr] that show the text of the index-variable-expr on the row/column it corresponds to.



## **showLabel** :: *Boolean* -- default value: `false`

whether to show the varName before the array



