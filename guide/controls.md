---
layout: userguide
title: "Vamonos User's Guide: Controls widget"
scriptinclude: "controls.js"
---

Recall that Vamonos visualizations can be either in **edit mode**
or **display mode**, and that the behavior of widgets changes between
these modes. In the next few parts part of the user's guide, we'll discuss the
behavior of the major widgets included with Vamonos.

To use a widget, you must do two things:

1. Include a "container" `<div>` in the HTML, where the widget will "draw itself."

2. In the page's Javascript, construct a widget object and pass it to the visualizer
    in the list of `widgets`.

Nearly all visualizations in Vamonos will include a **controls** widget, so we will
begin our discussion with it.

# Overview

The `Controls` widget is how the user will navigate the sequence of snapshots that
comprise the visualization. 

* In **edit mode**, this widget doesn't do very much. Most of its functionality
  is disabled, except for its button that switches the visualization
  between edit and display modes.

* In **display mode**, the widget provides buttons to move forward & backward
  in the sequence of snapshots, as well as a slider and a display of the
  current snapshot number and total number of snapshots in the sequence.


### Example:

This simple example runs an algorithm that generates 50 "dummy" snapshots
(plus a "before" and "after" snapshot).

The `Controls` widget can then be used to navigate the snapshots. Since
there are no widgets that actually display data from the snapshots, this
experience is rather boring.


> HTML:
> 
>     <div id="controls"></div>
> 
> Javascript:
>
>     new Vamonos.Visualizer({
>         widgets: [
>             new Vamonos.Widget.Hardcoded({ breakpoints: [1] }),
>             new Vamonos.Widget.Controls({ container: "controls" })
>         ],
>         algorithm: function (_) {
>             for (var i = 0; i < 50; i++) {
>                 _(1);
>             }
>         }
>     });
> 
> Result:
> <div class="viz-container" id="controls1"></div>

## Usage:

The first button (whose text is either `run` or `stop`) toggles the visualization
between edit and display modes.

The next two buttons step to the previous/next snapshots. The last button toggles
between a "play" and a "pause" button. When "playing", the visualization is advanced
to the next frame once per second.

The slider allows for fast movement through the sequence of snapshots.

Looking ahead, many widgets are able to highlight data that changes between
snapshots. These widgets are able to highlight selectively, depending on
whether the snapshot was changed via the slider, "next" button, or "previous"
button. The default behavior is that widgets highlight their changes only
when the "next" button is pushed.

# Constructor Arguments

You can create a `Controls` widget with the `Vamonos.Widget.Controls`
constructor. It accepts the following arguments:

* `container`: either the string ID or a jQuery selector for the container `<div>` element.

* `showWhileSliding`: if set to `true`, then snapshots will be displayed as the
slider is sliding. If `false`, snapshots are displayed only when the slider is
released (although the frame-number label is always updated as the slider is
sliding). The default value is `true`.

* `noRunStopButton`: if set to `true`, then the `run`/`stop` button is hidden. This
can be useful for visualizations that have fixed inputs to the algorithm. For such
visualizations, you will probably want to set `noRunStopButton` and also set
`autoStart` to `true` in the `Visualizer` constructor. These options will
effectively make edit mode unreachable.

* `autoPlay`: if set to `true`, then the widget will act as if the "play" button has been
pressed as soon as the visualization enters display mode.

Alternatively, you can simply pass a string to the Controls constructor
specifying its container. All other options will be set to their defaults.

### Example:

Here is an example which sets several options for the `Controls` widget. Take
notice of the following things:

* The array display is *not* updated while you move the slider.

* Changes to the array are not highlighted when advancing the slider, but only
when pressing the "next" button.

* This visualization's input (the array `A`) is fixed, and its edit mode is
  inaccessible.

> HTML:
>
>      <div id="array"></div>
>      <div id="controls"></div>
>
> Javascript:
> 
>     new Vamonos.Visualizer({
>         widgets: [
>             new Vamonos.Widget.Hardcoded({ breakpoints: [1] }),
> 
>             new Vamonos.Widget.Array({
>                 container:    "array",
>                 varName:      "A",
>                 showIndices:  ["i"],
>                 defaultInput: [0,0,0,0,0,0,0,0]
>             }),
> 
>             new Vamonos.Widget.Controls({
>                 container:        "controls",
>                 runStopButton:    false,
>                 showWhileSliding: false
>             })
>         ],
>         autoStart: true,
> 
>         algorithm: function (_) {
>             with (this) {
>                 for (i = 0; i < A.length; i++) {
>                     _(1);
>                     A[i] = i+1;
>                 }
>             }
>         }
>     });
> 
> Result:
> 
> <div class="viz-container" id="array">
> </div>
> <div class="viz-container" id="controls2">
> </div>

# Buttons Only / Slider Only

You can control whether or not the slider and buttons display with the `slider` and `buttons`
arguments to the `Controls` constructor (they default to `true`).

>     new Vamonos.Widget.Controls({ 
>         slider: false,
>         container: "container" 
>     })
>
> <div class="viz-container" id="controls4">
> </div>

>     new Vamonos.Widget.Controls({ 
>         buttons: false,
>         container: "container" 
>     })
>
> <div class="viz-container" id="controls5">
> </div>

* The `showWhileSliding` option will only be relevant to when `slider` is set to `true`.

* The `noRunStopButton` and `autoPlay` options are relevant when `buttons` is set to `true`.
