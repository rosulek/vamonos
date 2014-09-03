---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Widget.ResultProperty
=============================

[Back](index.html)

The `ResultProperty` allows you to check upon entering DisplayMode that a variable has some arbitrary property, and set the html of a container accordingly.


Constructor Arguments
=====================

 * **container** :: *String* | *jQuery Selector* -- **required**

The id or a jQuery selector of the div in which this widget should draw itself.



 * **failure** :: *String* -- **required**

what `container` should be set to when `varName` is false



 * **success** :: *String* -- **required**

what `container` should be set to when `varName` is true



 * **test** :: *Function* -- **required**

a function that tests for a property on `varName`



 * **varName** :: *String* -- **required**

the name of variable that will be tested



