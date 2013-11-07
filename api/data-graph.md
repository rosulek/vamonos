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


### Constructor Arguments

 * **directed** :: *Boolean* -- default Value: `false`

    Whether the graph is directed.



 * **prefix** :: *String* -- default Value: `""`

    A string prepended to each new vertex id.



 * **vertices** :: *Object* | *Array* -- optional

    A single vertex or an array of vertices to create the graph with.

    Example:

>     vertices: [ 
>         {id: "v0", x: 17,  y: 10},
>         {id: "v1", x: 98,  y: 10},
>         {id: "v3", x: 15,  y: 78},
>     ]



 * **edges** :: *Object* | *Array* -- optional

    A single edge or an array of edges to create the graph with.

    Example:

>     edges: [
>         {source: 'v0',target: 'v4'},
>         {source: 'v1',target: 'v2'},
>     ]




Public Interface
================

## **vertex**(`vid`)
 * `vid`: a vertex object containing an id field, or an id

returns the vertex object matching `vid`

## **addVertex**(`vtx`)
 * `vtx`: a vertex object

adds `vtx` to the graph

## **removeVertex**(`v`)
 * `v`: a vertex object containing an id field, or an id

removes the vertex matching `v` and all related edges from the graph

## **getVertices**()
returns an array of all vertices

## **eachVertex**(`f`)
 * `f`: a function taking a vertex as an argument

applies `f` to each vertex in the graph

## **nextVertexId**()
returns an unused vertex id

## **returnVertexName**(`n`)
 * `n`: string

adds `n` to the list of available vertex names

## **nextVertexName**()
returns the next available vertex name

## **edge**(`source`, `target`)
 * `source`: a vertex object containing an id field, or an id

 * `target`: a vertex object containing an id field, or an id

if there is an edge from `source` to `target`, returns it. understands undirected graphs.

## **addEdge**(`source`, `target`, `attrs`)
 * `source`: a vertex object containing an id field, or an id

 * `target`: a vertex object containing an id field, or an id

 * `attrs`: an object containing edge attributes

adds an edge from `source` to `target` with attributes copied from `attrs`

## **removeEdge**(`source`, `target`)
 * `source`: a vertex object containing an id field, or an id

 * `target`: a vertex object containing an id field, or an id

removes the edge from `source` to `target`. understands directedness.

## **getEdges**()
returns an array of all edges in the graph

## **neighbors**(`v`)
 * `v`: a vertex object containing an id field, or an id

returns all neighbors of `v`

## **eachNeighbor**(`v`, `f`)
 * `v`: a vertex object containing an id field, or an id

 * `f`: a function that takes a vertex as input

applies `f` to each neighbor of `v`

## **outgoingEdges**(`v`)
 * `v`: a vertex object containing an id field, or an id

returns all outgoing edges of `v`

## **incomingEdges**(`v`)
 * `v`: a vertex object containing an id field, or an id

returns all incoming edges of `v`

