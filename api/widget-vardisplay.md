---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Widget.VarDisplay
=========================

[Back](index.html)

VarDisplay allows viewing of the contents of variables, and if they are objects, their attributes.


Constructor Arguments
=====================

## **container** :: *String* | *jQuery Selector* -- **required**

The id or a jQuery selector of the div in which this widget should draw itself



## **varName** :: *String* -- **required**

the name of variable that this widget represents



## **attributes** :: *Array* -- optional

if the variable is an object, an array of strings representing which object attributes to show



## **showChanges** :: *String* | *Array* -- default value: `"next"`

type of frame shifts to highlight changes at, can be multiple types with an array of strings



