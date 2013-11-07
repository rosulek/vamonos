---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.DataStructure.BinaryTree
================================

[Back](index.html)

*Experimental*. BinaryTree takes a tree encoded as nested objects of
the form `{ val, id, left, right }` where left and right are optional
objects of the same form.


Public Interface
================

## **eachNodeInOrder**(`f`)
 * `f`: a function that takes a node

applies `f` to each node using an in-order traversal

## **eachNodePreOrder**(`f`)
 * `f`: a function that takes a node

applies `f` to each node using a pre-order traversal

## **eachNodePostOrder**(`f`)
 * `f`: a function that takes a node

applies `f` to each node using a post-order traversal

## **asGraph**()
returns an equivalent `Vamonos.DataStructure.Graph`

## **rotateRight**(`id`)
 * `id`: a node id

rotates the tree right at the node matching id

## **rotateLeft**(`id`)
 * `id`: a node id

rotates the tree left at the node matching id

## **addNode**(`targetId`, `direction`, `newNode`)
 * `targetId`: a node id

 * `direction`: `"left"` or `"right"`

 * `newNode`: optional: a node object

adds `newNode` as the `direction` child of the node matching `targetId`

## **deleteNode**(`targetId`)
 * `targetId`: a node id

deletes the node matching `targetId`, preforming rotations as necessary

## **changeVal**(`targetId`, `newVal`)
 * `targetId`: a node id

 * `newVal`: an arbitrary value

changes the val field of the node matching `targetId` to `newVal`

