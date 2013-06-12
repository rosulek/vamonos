## The basic structure of a Vamonos visualization 

A visualization is managed by a `Vamonos.Visualizer` object. Think of this
object as the "engine" of the visualization. To make a new
`Vamonos.Visualizer` object, you must provide two things:

1. Javascript code for the algorithm that is being visualized. You'll
provide this in the form of a callback. This code is *mostly* just a
standard implementation of the algorithm, but some additional triggers
are required (see below).

2. A list of **widgets**.

What exactly are widgets?

### Widgets

Generally, a widget is any part of the visualization that interacts with
the user. Here are some example widgets that are part of Vamonos (their names are
all prefixed with `Vamonos.Widget`):

* `Controls`: this widget provides buttons and a slider to move backwards & forwards
through the visualization.

* `Pseudocode`: this widget displays the pseudocode of the algorithm. It allows
the user to select breakpoints, and it also highlights which lines are "active":
(the line just executed, and the line about to execute).

* `Array`: allows the user to generate an input array to the algorithm. It also
displays the contents of an array variable (and associated array index variables)
as the algorithm is executed.

* `Graph`: allows the user to generate an input graph to the algorithm with a WYSIWYG
interface. It also displays the contents of a graph variable as the algorithm is executed.

As you can see, many widgets serve double-duty: taking user input and also
displaying intermediate states of the algorithm.

### The Process

Now let's see the overall process of how a Vamonos visualization is produced. More detail about
how all the components interact is available in the API documentation. This is what you need
to know to *write* a visualization.

#### Modes

The visualization as a whole can be in either **edit mode** or **display mode**.

* Edit mode is where the user can provide the inputs to the algorithm and set breakpoints

* Display mode is where the user can step forward/backward through a collection
of **snapshots** of the internal state of the algorithm.

By default, visualizations start out in edit mode, though it is possible to change
this behavior, and even make visualizations that have no edit mode (with inputs
and breakpoints fixed).

All widgets are informed when the mode changes, because
their behaviors are typically different in the two modes.

#### The Stash

The `Visualizer` is given a Javascript function (callback) which represents the
algorithm to be visualized. We would like to periodically take snapshots of the
internal state of its variables. But this presents a problem: how can the
`Visualizer` have access to the (private) variables within this function?

For instance, suppose we want to make a visualization for the simple algorithm
implemented by this callback:

    function (n) {
        var i;
        var A = [];
        for (i = 0; i < n; i++) {
            A[i] = i + 1;
        }
    }

There is no way to access the private variables `i` and `A`. We solve this problem
by introducing a **stash**, which you can think of as a namespace
that the algorithm exposes to the `Visualizer` and to the widgets.

In Vamonos, we pass the `Visualizer` object to the algorithm callback. One of
the attributes of the `Visualizer` is `.stash`. Now suppose the algorithm
doesn't use private variables `i`, `A`, and `n`, and instead uses 
"variables" like `visualizer.stash.i`, `visualizer.stash.A`, and
`visualizer.stash.n`. Then these variables can then be "seen" by the `Visualizer`
when it's time to take a snapshot, and the `Visualizer` can also use the
stash as the mechanism to send inputs to the algorithm.

We get something like this:

    function (visualizer) {
        visualizer.stash.A = [];
        for (visualizer.stash.i = 0; visualizer.stash.i < visualizer.stash.n; visualizer.stash.i++) {
            visualizer.stash.A[visualizer.stash.i] = visualizer.stash.i + 1;
        }
    }

Of course, this gets to be a bit of a mouthful. Fortunately, Javascript contains
a convenient piece of syntax: the `with` statement. Using `with`, we can write something
much more reasonable:

    function (visualizer) {
        with (visualizer.stash) {
            A = [];
            for (i = 0; i < n; i++) {
                A[i] = i + 1;
            }
        }
    }

Inside of the `with` statement, the variable `i` really refers to `visualizer.stash.i`.
That is, as long as `i` exists as a key of `visualizer.stash`. Fortunately, any widget
that is aware of a variable called `i` will ensure that `i` exists in the stash.

#### Generating Frames

We now see how the algorithm can easily make its internal variables
visible to the `Visualizer`, at least in principle. But how do we allow
the `Visualizer` to see **intermediate** values of these variables (i.e., not
just the starting and ending values)?

To do this, the algorithm must manually trigger the `Visualizer`. In Vamonos,
the convention is to trigger the `Visualizer` before every *pseudocode* line.
Note that pseudocode lines may not directly correspond to lines of the
Javascript implementation.

The `Visualizer` object has a `.line()` method, which is called with the
equivalent pseudocode line number. Each time this method is called,
the `Visualizer` can then decide whether to take a snapshot (and, conveniently,
can intervene if your algorithm appears to be in an infinite loop).
The pseudocode line number is recorded in each snapshot so that the pseudocode
widget can highlight the active line.

In our running example, we'd say something like this (assuming a direct
correspondence between Javascript lines and pseudocode lines):

    function (visualizer) {
        with (visualizer.stash) {
            visualizer.line(1);
            A = [];
            visualizer.line(2);
            for (i = 0; i < n; i++) {
                visualizer.line(3);
                A[i] = i + 1;
            }
        }
    }

Of course, you can define a shortcut to make things a little cleaner:

    function (visualizer) {
        var _ = function(l) { visualizer.line(l) );
        with (visualizer.stash) {
            _(1);   A = [];
            _(2);   for (i = 0; i < n; i++) {
            _(3);       A[i] = i + 1;
                    }
        }
    }

In practice, when a pseudocode line corresponds to a looping construct,
it's best to trigger that line each time through the loop, thus:

    function (visualizer) {
        var _ = function(l) { visualizer.line(l) );
        with (visualizer.stash) {
            _(1);   A = [];
                    for (i = 0; i < n; _(2), i++) {
            _(3);       A[i] = i + 1;
                    }
        }
    }

Depending on the algorithm, it may make more sense to call `.line` before
or after incrementing the `i++` (or equivalent) statement.


