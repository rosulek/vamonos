---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Widget.CallStack
========================

[Back](index.html)

CallStack is a representation of the stash's call stack. It also displays the values a procedure was called with, and its return value. Note: setting "_callStack" as a watchVar will cause the visualizer to break on procedure calls and returns.


### Constructor Arguments

 * **container** :: *String* | *jQuery Selector* -- **required**

    The id or a jQuery selector of the div in which this widget should draw itself.



 * **procedureNames** :: *Object* -- default Value: `{}`

    an object mapping procedure names (those in the Visualizer's 'algorithm' argument) to their fully capitalized and formatted display forms.

    Example:

>     procedureNames: {
>         main: "DFS",
>         visit: "DFS-Visit",
>     }



 * **animate** :: *Array* -- default Value: `["next"]`

    types of frame changes to show an animation on



 * **resizable** :: *Boolean* -- default Value: `true`

    whether the widget should have a resize triangle



 * **ignoreMain** :: *Boolean* -- default Value: `false`

    CallStack will not display calls to the `main` procedure when set. This is useful when you'd like to use `main` to set variables, or do other useful housekeeping.



 * **ignoreArgumentValues** :: *Array* -- default Value: `[]`

    An array of argument names `['arg1','arg2']` that should only show their name in the Call Stack.



