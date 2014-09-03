---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.DataStructure.DisjointSet
=================================

[Back](index.html)

A disjoint set data structure for use in algorithms and widgets.


Constructor Arguments
=====================

 * **onUpdate** :: *Function* -- optional

A function that does something to an element in the set when it the disjoint set is modified.




Public Interface
================

## **eachSet**(`f`)
 * `f`: a function taking an array of elements and optionally an index

applies `f` to each set in the DisjointSet, along with its index

## **find**(`elem`)
 * `elem`: an element

returns an integer representing the set with `elem` in it

## **getSets**()
returns a list of all the sets in the DisjointSet.Sets are represented by lists. Note that some lists may be empty.

## **makeSet**(`elem`)
 * `elem`: an element

creates a new set with `elem`

## **numSets**()
returns the max number of sets that have existed

## **union**(`e1`, `e2`)
 * `e1`: an element

 * `e2`: an element

joins the set containing `e1` with the one containing `e2`

