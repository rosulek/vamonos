---
layout: userguide
title: "Vamonos User's Guide: Other widgets"
header: "Vamonos User's Guide"
scriptinclude: "other-widgets.js"
---

The `VarName` and `VarDisplay` widgets can be used in concert with
fancy css styling and old fashioned tables to create our standard
Vamonos look. We'll demonstrate by implementing `InsertionSort`.

We start with a table with the `vamonos` class, with rows of the
`pseudocode-and-controls` and `variable-widgets` classes. Inside
the `variable-widgets` row, another table in order to line up
variable names to widgets displaying their contents.

> HTML:
>
>     <table class="vamonos">
>         <tr><td class="pseudocode-and-controls">
>                 Pseudocode goes here<br>
>                 Controls go here
>         </td></tr>
>         <tr><td class="variable-widgets">
>             <table class="variable-widgets">
>                     <tr><td>Array name goes here</td>
>                         <td>Array widget goes here</td>
>                     <tr><td>Variable name goes here</td>
>                         <td>VarDisplay widget goes here</td>
>                     </tr>
>             </table>
>         </td></tr>
>     </table>

> <table class="vamonos">
> <tr><td class="pseudocode-and-controls">
> Pseudocode goes here<br>
> Controls go here
> </td></tr><tr>
> <td class="variable-widgets">
> <table class="variable-widgets">
> <tr><td>Array name goes here</td>
> <td>Array widget goes here</td>
> </tr>
> <tr><td>Variable name goes here</td>
> <td>VarDisplay widget goes here</td></tr>
> </table>
> </td></tr>
> </table>

The `VarName` widget ([docs](../api/widget-varname.html)) is used to
display a variable name and set it as a watch-var. It has two required
arguments:

* `container` : Id of the div to be drawn in. Hopefully you're getting used to
                this by now.

* `varName` : Name of the variable.

Another very useful but optional argument is

* `watching` : Whether the variable starts out as a watchVar.

Here's InsertionSort with everything filled in, including `VarName`.

> JavaScript:
>
>     new Vamonos.Widget.VarName({
>         container: "a-var",
>         varName: "A",
>         inputVar: true,
>     }),
>     
> <table class="vamonos">
>     <tr><td class="pseudocode-and-controls">
>         <div class="pseudocode-procedures">
>             <div id="pseudocode" title="InsertionSort(A):">
>                 for j = 2 to A.length
>                     key = A[j]
>                     i = j - 1
>                     while i &gt; 0 and A[i] &gt; key
>                         A[i + 1]  = A[i]
>                         i = i - 1
>                     A[i + 1] = key
>             </div>
>         </div>
>     </td></tr><tr><td>
>         <div id="controls"></div>
>     </td></tr><tr><td class="variable-widgets">
>         <table class="variable-widgets">
>             <tr><td><div id="a-var"></div></td>
>                 <td><div id="array"></div></td>
>             </tr>
>         </table>
>     </td></tr>
> </table>

It's often the case that we'd like to view the contents of some
variable that is not an Array or Graph. That's what `VarDisplay`
is for. Its constructor takes the standard required arguments:

* `container` : Id of the div to be drawn in.

* `varName` : Name of the variable.

A very fun optional argument is

* `attributes` : An array containing strings representing object
                 attributes to show.

Even though we already know the contents of `i` throught the `Array`
widget, lets add a `VarDisplay` just for fun.

> JavaScript:
>
>        new Vamonos.Widget.VarName({
>            container: "i-var",
>            varName: "i",
>        }),
>
>        new Vamonos.Widget.VarDisplay({
>            container: "i",
>            varName: "i",
>        }),

> <table class="vamonos">
>     <tr><td class="pseudocode-and-controls">
>         <div class="pseudocode-procedures">
>             <div id="pseudocode2" title="InsertionSort(A):">
>                 for j = 2 to A.length
>                     key = A[j]
>                     i = j - 1
>                     while i &gt; 0 and A[i] &gt; key
>                         A[i + 1]  = A[i]
>                         i = i - 1
>                     A[i + 1] = key
>             </div>
>         </div>
>     </td></tr><tr><td>
>         <div id="controls2"></div>
>     </td></tr><tr><td class="variable-widgets">
>         <table class="variable-widgets">
>             <tr><td><div id="a-var2"></div></td>
>                 <td><div id="array2"></div></td>
>             </tr>
>             <tr><td><div id="i-var2"></div></td>
>                 <td><div id="i2"></div></td>
>             </tr>
>         </table>
>     </td></tr>
> </table>
