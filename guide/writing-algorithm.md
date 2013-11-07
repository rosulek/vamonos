---
layout: userguide
title: "Vamonos User's Guide: Implementing the algorithm for Vamonos"
header: "Vamonos User's Guide"
scriptinclude: "writing-algorithm.js"
---

To make a visualization of an algorithm, one must eventually *execute the algorithm*
to know what to display! Vamonos makes this execution process as modular as
possible, so that it's simple to make visualizations of any algorithm.

# The Main Idea

When you create a `Visualizer` object for your visualization, one of the
arguments you provide to the constructor will be 
a Javascript function (callback) which implements the algorithm to be visualized. 

Imagine we wanted to make a visualization for the following algorithm, 
which uses [Horner's method](http://en.wikipedia.org/wiki/Horner's_method)
to evaluate a polynomial *P* (given
by a list of coefficients) on a given point *x*:

> <div id="pseudocode" class="no-gutter viz-container" title="Horner(P,x):">
>    res = 0
>    for i = P.length-1 downto 0
>        res = res * x + P[i]
>    return res
> </div>

Our first step is to implement the algorithm in Javascript:

    function Horner(P,x) {
        var res = 0;
        for (var i = P.length - 1; i >= 0; i--) {
            res = res * x + P[i];
        }
        return res;
    }

We could pass a reference to `Horner` to the `Visualizer`, but
unfortunately things are not so simple. A good visualization should
illustrate the contents of the algorithm's
internal variables, but in our `Horner` function the variables `i`
and `res` are private. 

To understand how to make your own visualizations in Vamonos, you'll have
to understand how Vamonos addresses these 3 problems:

1. How do we "expose" the algorithm's variables, so that the `Visualizer`
can see their contents?

2. Even if the `Visualizer` can see the algorithm's variables, how do we
allow the `Visualizer` to "interrupt" the algorithm's execution so it
can take snapshots of its variables
during its execution (instead of only at the beginning and end)?

3. How can we associate snapshots of variables to lines of the
pseudocode (not Javascript!) that will be displayed to the user?


# Exposing Variables

When the `Visualizer` executes the algorithm callback, it first
sets Javascript's special global `this` to be a "scope object"
in which local variables are stored. As long as the algorithm refers to `this.varName` rather
than a local variable `varName`, both the algorithm and the `Visualizer` will
have common access to these variables.

This is best illustrated by example:

    function Horner() {
        this.res = 0;
        for (this.i = this.P.length - 1; this.i >= 0; this.i--) {
            this.res = this.res * this.x + this.P[this.i];
        }
        return this.res;
    }

Note that the formal arguments *P* and *x* are also provided implicitly in `this`.

Admittedly, this (`this`!) becomes somewhat tedious to write.
Fortunately, Javascript's rarely used `with` statement is the perfect solution.
We can write the following:

    function Horner() {
        with (this) {
            res = 0;
            for (i = P.length - 1; i >= 0; i--) {
                res = res * x + P[i];
            }
            return res;
        }
    }

Inside the scope of the `with` statement, the variable `i` really refers to `this.i`.
That is, as long as `i` exists as a key of `this`. Fortunately, any widget
that is aware of a variable called `i` will ensure that `i` exists in the right place.

# Registering Pseudocode-line Correspondence

We now see how the algorithm can easily make its internal variables
visible to the `Visualizer`, at least in principle. But how do we "interrupt"
the algorithm so that the `Visualizer` gets to see the *intermediate*
values of these variables?

Javascript doesn't support any kind of pre-empting. So the algorithm-execution
callback must manually trigger the `Visualizer`. To facilitate this, the `Visualizer`
passes a callback (let's call it `line` for now) to the algorithm. This callback
serves two purposes:

1. Registering the correspondence between points in the algorithm's execution and
lines of pseudocode.

2. Giving the `Visualizer` an opportunity to take a snapshot of the algorithm's
variables, if desired (and, conveniently,
to intervene if the algorithm appears to be in an infinite loop).

The pseudocode line number is recorded in each snapshot so that the pseudocode
widget can highlight the active line.
When the user sets a breakpoint for line *n*, the `Visualizer` takes a snapshot
of the variables whenever the algorithm-callback calls `line(n)`.
Note that pseudocode lines may not directly correspond to lines of the
Javascript implementation.

We suggest, as a convention only,
to call `line(n)` just *before* pseudocode line *n*
starts executing. That way, breakpoints work as they do in a typical debugger --
halting just before the line is about to execute.

Putting it together, our algorithm-execution callback would look something like
this:

    function Horner(line) {
        with (this) {
            line(1);
            res = 0;
            line(2);
            for (i = P.length - 1; i >= 0; i--) {
                line(3);
                res = res * x + P[i];
            }
            line(4);
            return res;
        }
    }

In all of our demos, our convention is to use variable name `_` instead of `line`,
which is shorter and can lead to a more readable algorithm callback:

    function Horner(_) {
        with (this) {
            _(1);   res = 0;
            _(2);   for (i = P.length - 1; i >= 0; i--) {
            _(3);       res = res * x + P[i];
                    }
            _(4);   return res;
        }
    }

In practice, when a pseudocode line corresponds to a looping construct,
it's best to "trigger" that line each time through the loop, thus:

    function Horner(_) {
        with (this) {
            _(1);   res = 0;                       ////
            _(2);   for (i = P.length - 1; i >= 0; _(2), i--) {
            _(3);       res = res * x + P[i];      ////
                    }
            _(4);   return res;
        }
    }

Depending on the algorithm, it may make more sense to call `line()` before
or after the `i--` (or equivalent) statement.

# Putting it Together

You'll create a visualization by creating a new `Vamonos.Visualizer` object,
and passing in an algorithm-execution callback as described above. It will
look something like this:

    new Vamonos.Visualizer({
        algorithm: function (_) {
            with (this) {
                _(1);   res = 0;
                _(2);   for (i = P.length - 1; i >= 0; _(2), i--) {
                _(3);       res = res * x + P[i];
                        }
                _(4);   return res;
            }
        },

        widgets: [ ... ]

    });



# Algorithms that Involve Procedure Calls

Vamonos also supports algorithms that involve procedure calls. In fact, we
provide a widget that can visualize the contents of the call stack.

First, you can specify multiple procedures in your visualization by passing in
a bare *object* (rather than a single callback function)
as the `algorithm` parameter of the constructor. Each key/value pair in
the object represents a procedure name and procedure callback.

Here's a simple example:

    new Vamonos.Visualizer({
        algorithm: {
            main: function (_) {
                with (this) {
                    _(1);   return helper({ n: n, acc: 1 });
                }
            },

            helper: function (_) {
                with (this) {
                    _(1);   if (n <= 1) {
                    _(2);       return acc;
                            } else {
                    _(4);       return helper({ n: n-1, acc: n*acc });
                            }
                }
            }
        }

        // ...

    });

In this example `helper` is a tail-recursive function that computes factorials
using an accumulator, and `main` is a function that calls `helper` with the correct
initial seed of 1.

When you pass in a single callback as `algorithm`, that function is named
`main` (important to know when visualizing a recursive algorithm that has
just a single procedure). Hence, 

    new Vamonos.Visualizer({
        algorithm: function (_) { ... },

        // ...
    });

is shorthand for:

    new Vamonos.Visualizer({
        algorithm: {
            main: function (_) { ... }
        }

        // ...
    });



Finally, to invoke procedures, the most important thing to remember is
that you must use **named arguments**,
not positional arguments. These logical arguments are automatically placed into
the `this` scope object by the `Visualizer`. The callbacks that implement the
procedure should still be written to expect the `line` function as the actual argument.



# More Details (What's All `this` About?)

The "scope object" (`this`) used by the algorithm-callback
contains everything that is neeeded for the algorithm to operate:

* Every variable local to the procedure that the `Visualizer` knows about.
  Widgets that display the contents of variables register these
  variables when the visualization is setup.

* The "logical" arguments to the procedure. For the "outermost" call to
  the `main` procedure, these would have been placed there by a widget
  (possibly based on the user's input). For other procedure calls, these
  arguments are the ones passed (by name) during the algorithm execution.

* Other procedures.
  So if you have a `foo` procedure, every procedure can invoke it
  with `foo({argName: val, ...})` as you might expect (assuming
  the standard `with (this) {...}` idiom).

* A special `global` area, for variables that are accessed by multiple
  procedures. Assuming the standard "`with`" idiom, you can refer to
  a common `global.varName` from any procedure. For a real-world example
  of global variables, consult the source code of our DFS demo,
  which uses a global `time` variable.

  In addition, all of the initial arguments to the `main` procedure are kept in the
  `global` namespace. To see an example where this behavior is useful, see
  the source code of our Dijkstra's algorithm demo. Specifically, this lets us
  always display the source vertex of the graph, even when program flow is inside a
  subroutine that doesn't "have access to" the source vertex.
