---
layout: userguide
title: "Vamonos User's Guide: Overview"
scriptinclude: "overview.js"
---

A visualization is managed by a `Vamonos.Visualizer` object. Think of this
object as the "engine" of the visualization. To make a new
`Vamonos.Visualizer` object, you must provide two things:

1. Javascript code (in the form of a callback) for the algorithm that is being
visualized. This process is described in more detail in [the next chapter](writing-algorithm.html).

2. A list of "**widgets**".

# Widgets

Generally, a **widget** is any part of the visualization that interacts with
the user. Here are some example widgets that are part of Vamonos (their names are
all prefixed with `Vamonos.Widget`):

* `Controls`: this widget provides buttons and a slider to move backwards & forwards
through the visualization.

> <div class="visualization">
> <div id="viz-controls" class="viz-container">
> </div>
> </div>

* `Pseudocode`: this widget displays the pseudocode of the algorithm. When the
visualization is stopped it allows the user to select breakpoints. It also
highlights which lines are "active": (the line just executed, and the line
about to execute). 

> <div class="visualization">
> <div id="pseudocode" class="viz-container" title="SelectionSort(A):">
>     for i = 0 to A.length-2
>         m = i
>         for j = i+1 to A.length-1
>             if A[j] &lt; A[m]
>                 m = j
>         swap A[i] and A[m]
> </div>
> </div>

* `Array`: allows the user to generate an input array to the algorithm when it
is stopped. It also displays the contents of an array variable (and associated
array index variables) as the algorithm is executed.

> <div class="visualization">
> <div id="array" class="viz-container">
> </div>
> </div>

* `Graph`: provides graph input and display. It is extensively
customizable with labeling and coloring.

> <div class="visualization">
> <div class="viz-container">
> <div id="graph">
> </div>
> </div>
> </div>

Many widgets serve double-duty: taking user input and also displaying
intermediate states of the algorithm.

Most visualizations will contain the `Pseudocode` and `Controls` widget (or
one of the variants of the `Controls` widget), and at least one widget
for displaying the contents of the algorithm's internal variables.

# Modes

The visualization as a whole can be in either **edit mode** or **display mode**.

* Edit mode is where the user can provide the inputs to the algorithm and set
breakpoints. Both of these activities are facilitated by widgets.

* Display mode is where the user can step forward/backward through a collection
of **snapshots** of the internal state of the algorithm. These snapshots
are presented visually via the widgets.

All widgets are informed by the central visualizer object when the mode has
changed. Their behaviors are typically different in the two modes.


# Visualization Life-Cycle

Now let's see the overall process of how a Vamonos visualization is produced and
displayed on the page. 

1. By default, a visualization begins life in **edit mode**. In this mode, the
   widgets are collecting input from the user: inputs to the algorithm, and
   other information like breakpoints & watchpoints.

2. Using the `Controls` widget, the user chooses to "run" the algorithm.

3. The `Visualizer` collects the inputs from the widgets and executes the
   algorithm on these inputs. (More information about this process is given
   in the [next chapter](writing-algorithm.html).)

   The result of this step is a collection of **snapshots** of the algorithm's
   internal state (line number and contents of variables).

4. The visualization begins **display mode**, and all widgets are notified.
   The widgets are asked to display the first snapshot. When constructing a
   Vamonos visualization, we tell widgets like the `Array` and `Graph` widgets
   (that display the contents of variables) the names of the variables they
   are meant to display. So each widget knows what things to look for in
   each snapshot.

5. Using the `Controls` widget, the user can navigate forward & backward
   through the collection of snapshots.

   Display mode gives the user a sense of being able to pause/rewind the execution
   of an algorithm. But it is important to note that the collection of snapshots
   is generated all at once. The user is simply navigating a collection
   of now-fixed snapshots. You can think of widgets as being "read-only" in
   display mode, from the user's point of view. In particular, in display mode,
   breakpoints and the algorithm's inputs cannot be changed.


6. Using the `Controls` widget, the user chooses to "stop" the algorithm,
   and the visualization is placed back in **edit** mode. All widgets are
   notified about the mode change, and we return to step 1.

# Exceptions

A typical visualization will begin in edit mode, but it is
possible to make a visualization that starts out in display mode
(as in the example on this page!).
It is even possible to make visualizations for which edit mode is inaccessible
(with algorithm inputs and breakpoints fixed).


