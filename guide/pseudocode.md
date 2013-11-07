---
layout: userguide
title: "Vamonos User's Guide: Pseudocode widget"
scriptinclude: "pseudocode.js"
---

The `Pseudocode` widget of course displays the algorithm's lines of pseudocode.
Beyond that, it has the following roles:

* In **edit mode**, the widget (optionally) allows the user to toggle
  breakpoints at each line, by clicking in the "gutter".

* In **display mode**, the widget visually highlights the "lines of interest" -- that is,
  the line that just finished executing, and the line that is about to start
  executing. Recall that snapshots are always taken "between" pseudocode lines.

# Example

Let's start with a small example before proceeding to the details. In this
example, we instantiate `Pseudocode` and `Controls` widgets and run an
algorithm that corresponds to what's displayed in the `Pseudocode` widget.

Try changing
the breakpoints in edit mode, and pay attention to how the active lines
are highlighted in display mode. The previously-executed line is shaded gray
and the line about to execute is yellow.

> HTML:
> 
>     <div id="pseudocode" title="Horner(P,x):">
>        res = 0
>        for i = P.length-1 downto 0
>            res = res * x + P[i]
>        return res
>     </div>
>     <div id="controls"></div>
> 
> Javascript:
> 
>     new Vamonos.Visualizer({
>         widgets: [
>             new Vamonos.Widget.Hardcoded({ P: [1,2,3,4], x: 4 }),
>             new Vamonos.Widget.Controls({ container: "controls" }),
> 
>             new Vamonos.Widget.Pseudocode({
>                 container: "pseudocode",
>                 breakpoints: [2,3,4]
>             })
>         ],
> 
>         algorithm: function (_) {
>             with (this) {
>                 _(1);   res = 0;
>                 _(2);   for (i = P.length - 1; i >= 0; _(2), i--) {
>                 _(3);       res = res * x + P[i];
>                         }
>                 _(4);   return res;
>             }
>         },
>     });
> 
> Result: 
> 
> <div id="pseudocode1" class="viz-container" title="Horner(P,x):">
>    res = 0
>    for i = P.length-1 downto 0
>        res = res * x + P[i]
>    return res
> </div>
> <div class="viz-container" id="controls1">
> </div>

# What to Include in the Document HTML

You specify the displayed pseudocode by simply putting it as the contents
of the container `<div>`. When the `Pseudocode` widget is initialized, it will
fetch this text and format it in the following ways:

* Line numbers are automatically added

* Indentation in multiples of 4 spaces will be preserved

* Various keywords will be bolded

* Any lines beginning with `//` or `#` will be rendered as comments. Comment
    lines are not given line numbers, and cannot be set as breakpoints.

In addition, the `title` attribute of the container `<div>` will be rendered
as the title of the procedure.

### Example:

>     <div id="pseudocode" title="Blah(n):">
>         for i = 1 to n
>             // this is a comment!
>             print "Hello world"
>         # so is this!
>     </div>
> 
> Result:
>
> <div id="pseudocode3" class="viz-container" title="Blah(n):">
>     for i = 1 to n
>         // this is a comment!
>         print "Hello world"
>     # so is this!
> </div>
 
# CSS Options

Our standard CSS includes the following classes that you can assign to the
container `<div>`:

* The `no-gutter` class hides the breakpoint gutter.

* The `no-line-numbers` class hides the line numbers.

### Example:

>     <div id="pseudocode" title="Blah(n):" class="no-gutter">
>          for i = 1 to n
>              // this is a comment!
>              print "Hello world"
>      </div>
> 
> Result:
> 
> <div id="pseudocode4" class="viz-container no-gutter" title="Blah(n):">
>     for i = 1 to n
>         // this is a comment!
>         print "Hello world"
> </div>

# Basic Constructor Options

You can create a `Pseudocode` widget with the `Vamonos.Widget.Pseudocode` constructor. It accepts the following arguments:

* `container`: either the string ID or a jQuery selector for the container `<div>` element.

* `breakpoints`: a list of pseudocode line numbers which will initially be set with breakpoints. Alternatively, you can pass the string `all` to initially set all lines as breakpoints.

* `editableBreakpoints`: if set to `true` (the default value), then the widget will allow the user to click in the gutter to toggle breakpoints. Otherwise, the breakpoints remain fixed, as specified in the `breakpoints` argument.

### Example:

>     new Vamonos.Widget.Pseudocode({
>         container: "pseudocode",
>         breakpoints: [1,3],
>         editableBreakpoints: false
>     })
> 
> <div class="visualization">
> <div id="pseudocode5" class="viz-container" title="Blah(n):">
>     for i = 1 to n
>         for j = 1 to i
>             print i+j
>         print "\n"
> </div>
> </div>

# Dealing with Multiple Procedures

Visualizations in Vamonos can contain multiple procedures. A separate `Pseudocode` widget
should be used for each procedure that you want to be visualized. Just make
sure that each `Pseudocode` widget has its own container `<div>` (with unique IDs).

Then, to associate
a `Pseudocode` widget with a procedure, use the `procedureName` argument to the
constructor. If this argument is omitted, the default value is `main`.

## Larger example:

Here is a larger example that features two mutually recursive procedures,
each with their own pseudocode widgets. There is also a `main` procedure
which is not displayed. This visualization takes no input from the user, but
simply calls `Even(9)` and visualizes the execution.

> HTML:
> 
>     <div id="pseudocode-even" class="viz-container" title="Even(n):">
>         if n == 0
>             return true
>         else
>             return Odd(n-1)
>     </div>
> 
>     <div id="pseudocode-odd" class="viz-container" title="Odd(n):">
>         if n == 0
>             return false
>         else
>             return Even(n-1)
>     </div> 
> 
>     <p>
>         <div id="controls" class="viz-container"></div>
>         <div id="vardisplay" class="viz-container"></div>
>     </p>
> 
> *The `viz-container` class is part of the CSS for the user's guide. It adds
> the border and drop shadow to the various widgets.*
> 
> Javascript:
> 
>     new Vamonos.Visualizer({
>         widgets: [
>             new Vamonos.Widget.Pseudocode({
>                 container: "pseudocode-even",
>                 breakpoints: "all",
>                 procedureName: "even"
>             }),
>
>             new Vamonos.Widget.Pseudocode({
>                 container: "pseudocode-odd",
>                 breakpoints: "all",
>                 procedureName: "odd"
>             }),
>
>             new Vamonos.Widget.Controls({
>                 container: "controls2",
>                 showWhileSliding: true,
>             }),
> 
>             new Vamonos.Widget.VarDisplay({
>                 container: "vardisplay-n",
>                 varName: "n"
>             }),
> 
>             new Vamonos.Widget.VarDisplay({
>                 container: "vardisplay-result",
>                 varName: "result"
>             }),
>
>         ],
>
>         autoStart: true,
>
>         algorithm: {
>             main: function (_) {
>                 with (this) {
>                     global.result = even({n: 9}); 
>                 }
>             },
>
>             even: function (_) {
>                 with (this) {
>                     _(1);   if (n == 0) {
>                     _(2);       return true;
>                             } else {
>                     _(4);       return odd({n: n-1});
>                             }
>                 }
>             },
>
>             odd:  function (_) {
>                 with (this) {
>                     _(1);   if (n == 0) {
>                     _(2);       return false;
>                             } else {
>                     _(4);       return even({n: n-1});
>                             }
>                 }
>             }
>         }
>     })
> 
> Result:
> 
> <div id="pseudocode-even" class="viz-container" title="Even(n):">
>     if n == 0
>         return true
>     else
>         return Odd(n-1)
> </div>
> <div id="pseudocode-odd" class="viz-container" title="Odd(n):">
>     if n == 0
>         return false
>     else
>         return Even(n-1)
> </div>
> <p>
> <div id="controls2" class="viz-container">
> </div>
> </p>
> <p>
> <div class="viz-container">n =
> <div id="vardisplay-n">
> </div>
> </div>
> <div class="viz-container">result =
> <div id="vardisplay-result">
> </div>
> </div>
> </p>
