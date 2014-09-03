---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.DataStructure.Queue
===========================

[Back](index.html)

A queue data structure for use in algorithms and widgets.


Constructor Arguments
=====================

**comparator** :: *Function* -- optional

A function taking two elements and returning `1`, `0`, or `-1`. Used in the `sort` method.



**initialArray** :: *Array* -- default value: `[]`

The initial value of the queue.




Public Interface
================

## **contains**(`x`)
 * `x`: an element

Returns true if `x` is in the queue.

## **dequeue**()
Pops and element from the queue.

## **enqueue**(`elem`)
 * `elem`: an element

Pushes `elem` onto the queue.

## **extractMin**()
Extracts the minimum element from the queue, according to the comparator provided to the constructor, or JavaScript's internal comparator.

## **initialize**(`elems`)
 * `elems`: an array of elements. DefaultValue: `[]`

Sets `elems` to be the content of the queue.

## **isEmpty**()
Returns true if the queue is empty.

## **sort**()
Sorts the queue in place according to the comparator provided to the constructor, or JavaScript's internal comparator.

## **toString**()
Returns a string version of the queue.

