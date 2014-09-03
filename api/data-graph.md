---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.DataStructure.Graph
===========================

[Back](index.html)

The Graph data structure provides standard graph functionality
to Vamonos.


Constructor Arguments
=====================

## **directed** :: *Boolean* -- default value: `false`

Whether the graph is directed.



## **edges** :: *Object* | *Array* -- optional

A single edge or an array of edges to create the graph with.

For Example:

>     edges: [
>         {source: 'v0',target: 'v4'},
>         {source: 'v1',target: 'v2'},
>     ]



## **prefix** :: *String* -- default value: `""`

A string prepended to each new vertex id.



## **vertices** :: *Object* | *Array* -- optional

A single vertex or an array of vertices to create the graph with.

For Example:

>     vertices: [
>         {id: "v0", x: 17,  y: 10},
>         {id: "v1", x: 98,  y: 10},
>         {id: "v3", x: 15,  y: 78},
>     ]




Public Interface
================

## **addEdge**(`source`, `target`, `attrs`)
 * `source`: a vertex object containing an id field, or an id

 * `target`: a vertex object containing an id field, or an id

 * `attrs`: an object containing edge attributes

adds an edge from `source` to `target` with attributes copied from `attrs`

## **addVertex**(`vtx`)
 * `vtx`: a vertex object

adds `vtx` to the graph

## **collapse**(`e`, `overlapFunc`)
 * `e`: an edge of the graph to collapse

 * `overlapFunc`: a function taking two edges and returning one of them

collapses `e`, creating a new vertex. By default vertex names are concatenations of the collapsed vertices' names, vertices' positions are averaged, and overlapping edges take the min weight. only works on undirected graphs. `overlapFunc` is an optional parameter for a function that decides what to do with overlapping edges after a collapse. By default overlapFunc keeps the edge with least `w`.

## **eachEdge**(`f`)
 * `f`: a function taking an edge

applies `f` to each edge

## **eachEdgeBy**(`comp`, `f`)
 * `comp`: a comparator

 * `f`: a function taking an edge

applies `f` to each edge, ordered by `comp`

## **eachNeighbor**(`v`, `f`)
 * `v`: a vertex object containing an id field, or an id

 * `f`: a function that takes a vertex as input

applies `f` to each neighbor of `v`

## **eachVertex**(`f`)
 * `f`: a function taking a vertex as an argument

applies `f` to each vertex in the graph

## **eachVertexBy**(`comp`, `f`)
 * `comp`: a comparator

 * `f`: a function taking a vertex as an argument

applies `f` to each vertex in the graph, ordered by `comp`

## **edge**(`source`, `target`)
 * `source`: a vertex object containing an id field, or an id

 * `target`: a vertex object containing an id field, or an id

if there is an edge from `source` to `target`, returns it. understands undirected graphs.

## **edgeId**(`e`)
 * `e`: an edge object

returns a string identifying `e`

## **getEdges**()
returns an array of all edges in the graph

## **getVertices**()
returns an array of all vertices

## **incomingEdges**(`v`)
 * `v`: a vertex object containing an id field, or an id

returns all incoming edges of `v`

## **neighbors**(`v`)
 * `v`: a vertex object containing an id field, or an id

returns all neighbors of `v`

## **nextVertexId**()
returns an unused vertex id

## **nextVertexName**()
returns the next available vertex name

## **outgoingEdges**(`v`)
 * `v`: a vertex object containing an id field, or an id

returns all outgoing edges of `v`

## **removeEdge**(`source`, `target`)
 * `source`: a vertex object containing an id field, or an id

 * `target`: a vertex object containing an id field, or an id

removes the edge from `source` to `target`. understands directedness.

## **removeVertex**(`v`)
 * `v`: a vertex object containing an id field, or an id

removes the vertex matching `v` and all related edges from the graph

## **removeVertexName**(`name`)
 * `name`: undefined

removes `name` from the list of available vertex names

## **returnVertexName**(`n`)
 * `n`: string

adds `n` to the list of available vertex names

## **toString**()
returns a javascripty string you could use to initialize a graph with.

## **vertex**(`vid`)
 * `vid`: a vertex object containing an id field, or an id

returns the vertex object matching `vid`

