---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Widget.Pseudocode
=========================

[Back](index.html)

The Pseudocode widget prettily formats the pseudocode in the div you provide it. It also visualizes and allows editing of breakpoints.


Constructor Arguments
=====================

 * **container** :: *String* | *jQuery Selector* -- **required**

The id or a jQuery selector of the div in which this widget should draw itself.



 * **breakpoints** :: *Array* | *String* -- default value: `[]`

initial breakpoints, as an array of line numbers, or `'all'` for all breakpoints



 * **editableBreakpoints** :: *Boolean* -- default value: `true`

whether breakpoints can be modified with this widget



 * **procedureName** :: *String* -- default value: `"main"`

the name of the procedure in the algorithm



