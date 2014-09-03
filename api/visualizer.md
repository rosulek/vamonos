---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Visualizer
==================

[Back](index.html)

The central object of the Vamonos system. The Visualizer controls
the flow of information to and from Widgets, keeps track of
namespaces and variables, and runs the simulation itself.


### Constructor Arguments

 * **algorithm** :: *Function* | *Object* -- default value: `[function]`

    as a function, the 'main' procedure. as an object, an association of procedure names to functions.



 * **autoStart** :: *Boolean* -- default value: `false`

    whether to skip edit mode at load time



 * **exportToQueryString** :: *Boolean* -- default value: `false`

    whether the visualizer will update the location with the updated input after leaving edit mode every time



 * **maxCallStackSnapshotDepth** :: *Number* -- optional

    the maximum depth of the callstack that snapshots will be taken at when it is set as a watchVar.



 * **maxFrames** :: *Number* -- default value: `250`

    the maximum number of snapshots



 * **unbounded** :: *Boolean* -- default value: `false`

    whether there is a limit on how many lines an algorithm can take



 * **widgets** :: *Array* -- default value: `[]`

    a list of widgets for use in the visualization



