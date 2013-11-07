---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.DataStructure.Queue
===========================

[Back](index.html)

A queue data structure for use in algorithms and widgets.


### Constructor Arguments

 * **initialArray** :: *Array* -- default Value: `[]`

    The initial value of the queue.



 * **comparator** :: *Function* -- optional

    A function taking two elements and returning `1`, `0`, or `-1`. Used in the `sort` method.




Public Interface
================

## **initialize**(`elems`)
 * `elems`: an array of elements. DefaultValue: `[]`

Sets `elems` to be the content of the queue.

## **enqueue**(`elem`)
 * `elem`: an element

Pushes `elem` onto the queue.

## **dequeue**()
Pops and element from the queue.

## **extractMin**()
Extracts the minimum element from the queue, according to the comparator provided to the constructor, or JavaScript's internal comparator.

## **isEmpty**()
Returns true if the queue is empty.

## **sort**()
Sorts the queue in place according to the comparator provided to the constructor, or JavaScript's internal comparator.

## **toString**()
Returns a string version of the queue.

## **contains**(`x`)
 * `x`: an element

Returns true if `x` is in the queue.

