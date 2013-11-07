---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Visualizer
==================

[Back](index.html)

The central object of the Vamonos system. The Visualizer controls the flow of information to and from Widgets, keeps track of namespaces and variables, and runs the simulation itself.


### Constructor Arguments

 * **widgets** :: *Array* -- default Value: `[]`

    a list of widgets for use in the visualization



 * **algorithm** :: *Function* | *Object* -- default Value: `undefined`

    as a function, the 'main' procedure. as an object, an association of procedure names to functions.



 * **maxFrames** :: *Integer* -- default Value: `250`

    the maximum number of snapshots



 * **autoStart** :: *Boolean* -- default Value: `false`

    whether to skip edit mode at load time



