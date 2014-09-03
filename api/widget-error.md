---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Widget.Error
====================

[Back](index.html)

The `Error` widget serves as a way to create custom error conditions.
The visualization will not change to DisplayMode unless all conditions
are met.


Constructor Arguments
=====================

**conditions** :: *Array* -- **required**

a list of functions that take a viz object and return a string saying what went wrong.

    Example:

>     new Vamonos.Widget.Error({
>         conditions: [
>             function(viz){
>                 var s = viz.getVariable("s");
>                 var t = viz.getVariable("t");
>                 if (s.id === t.id) {
>                     return "Ford-Fulkerson says: s and t must be different!";
>                 }
>             }
>         ]
>     })



