---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Widget.CallStack
========================

[Back](index.html)

CallStack is a representation of the stash's call stack. It also displays the values a procedure was called with, and its return value. Note: setting "_callStack" as a watchVar will cause the visualizer to break on procedure calls and returns.


Constructor Arguments
=====================

**container** :: *String* | *jQuery Selector* -- **required**

The id or a jQuery selector of the div in which this widget should draw itself.



**animate** :: *Array* -- default value: `["next"]`

types of frame changes to show an animation on



**formatArgumentValues** :: *Object* -- default value: `{}`

A mapping of arg-names to functions of arg-values to strings



**formatReturnValue** :: *Object* -- default value: `{}`

A mapping of proc names to functions from a return-value to a string



**ignoreArgumentValues** :: *Array* -- default value: `[]`

An array of argument names `['arg1','arg2']` that should only show their name in the Call Stack.



**ignoreMain** :: *Boolean* -- default value: `false`

CallStack will not display calls to the `main` procedure when set. This is useful when you'd like to use `main` to set variables, or do other useful housekeeping.



**procedureNames** :: *Object* -- default value: `{}`

an object mapping procedure names (those in the Visualizer's 'algorithm' argument) to their fully capitalized and formatted display forms.

    Example:

>     procedureNames: {
>         main: "DFS",
>         visit: "DFS-Visit",
>     }



**resizable** :: *Boolean* -- default value: `true`

whether the widget should have a resize triangle



