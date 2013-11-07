---
layout: userguide
title: "Vamonos User's Guide: Call Stack widget"
scriptinclude: "callstack.js"
---

The `CallStack` widget displays the contents of the algorithm's
call stack. This can be very useful when visualizing recursive algorithms.

For each frame in the call stack, the widget displays the name of the procedure,
its input variables, and, if appropriate, the return
value of the procedure that just returned. The widget does nothing in  **edit mode**

# Example

Here is a very small example. It's the standard recursive implementation of
the factorial function. To visualize it, we include a `Controls` widget and
`CallStack` widget.

> HTML:
> 
>     <div id="controls"></div>
>     <div id="callstack"></div>
> 
> 
> Javascript:
> 
>     new Vamonos.Visualizer({
>         widgets: [
>             new Vamonos.Widget.Hardcoded({ n: 6, watch: "n" }),
>             new Vamonos.Widget.Controls({ container: "controls1" }),
>             new Vamonos.Widget.CallStack({ container: "callstack1" }),
>         ],
>
>         algorithm: function (_) {
>             with (this) {
>                 _(1);   if (n <= 1) {
>                 _(2);       return n;
>                 _(3);   } else {
>                 // Store ret in order to see the callstack return.
>                 _(4);       ret = n * main({n: n-1}); 
>                 _(5);       return ret;
>                         }
>             }
>         },
>     });
> 
> Result: 
> 
> <p><div class="viz-container" id="controls1">
> </div></p>
> <div id="callstack1" class="viz-container">
> </div>

Snapshots happen only when the `_` line function is called. So we have broken
up the tail calls `return procName(...)` into two statements `var res =
procName(...); return res` and called the `_` line function in between so that
we can see the chain of returns. If we had left the tail calls as simply
`return procName(...)`, you would see the call stack grow step by step, but
then vanish completely in one frame.

# Basic Constructor Options

You can create a `CallStack` widget with the `Vamonos.Widget.CallStack`
constructor. It accepts the following arguments:

* `container`: either the string ID or a jQuery selector for the container `<div>` element.

* `procedureNames`: an object that maps internal procedure names to their
"display" names.  By default, procedures are displayed using their internal
names (that you specify in the `algorithm` argument to the `Visualizer`).  This
option is most commonly used to give a more descriptive name to the `main`
procedure, although it can be used for all of the procedures of the
visualization.

* `animate`: a list of event types for which to show animations. Defaults to ["next"].

* `resizable`: whether or not the `CallStack` container should be resizable. Defaults to true.


# Examples:

Adding the `procedureNames` option to the example from above:

>     new Vamonos.Widget.CallStack({
>         container: "callstack",
>         procedureNames: { main: "RecursiveFactorial" }
>     })
> 
> <p><div class="viz-container" id="controls2">
> </div></p>
> <div id="callstack2" class="viz-container">
> </div>


In the next example, we've adapted the mutually recursive even/odd example from the previous chapter. The `main` function is displayed with the name `even`.

>     new Vamonos.Visualizer({
>         widgets: [
>             new Vamonos.Widget.Hardcoded({ n: 9, watch: "n"}),
>             new Vamonos.Widget.Controls({ container: "controls3" }),
>             new Vamonos.Widget.CallStack({
>                 container: "callstack3",
>                 procedureNames: { main: "even" }
>             })
>         ],
> 
>         autoStart: true,
> 
>         algorithm: {
>             main: function (_) {
>                 with (this) {
>                     _(1);   if (n == 0) {
>                     _(2);       return true;
>                             } else {
>                     _(4);       var res = global.odd({n: n-1});
>                     _(5);       return res;
>                             }
>                 }
>             },
>             odd:  function (_) {
>                 with (this) {
>                     _(1);   if (n == 0) {
>                     _(2);       return false;
>                             } else {
>                     _(4);       var res = global.main({n: n-1});
>                     _(5);       return res;
>                             }
>                 }
>             }
>         }
>     });
> 
> <p><div class="viz-container" id="controls3">
> </div></p>
> <div id="callstack3" class="viz-container">
> </div>

