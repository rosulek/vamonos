---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Widget.Hardcoded
========================

[Back](index.html)

Hardcoded takes an object containing mappings of variable names to 
default values.

>     new Vamonos.Widget.Hardcoded({ 
>         i: 1, 
>         A: [3,1,4] 
>     }) 

Hardcoded has a couple magical variable names: `breakpoints` and 
`watch`. `breakpoints` is used for setting breakpoints without a 
Pseudocode widget. It takes a list of linenumbers. 

>     new Vamonos.Widget.Hardcoded({ breakpoints: [3,1,4] }) 

`watch` takes a list of variable names to add to watchVars. 

>     new Vamonos.Widget.Hardcoded({ watch: ["i", "k"] }) 
Note: setting `_callStack` as a watch var will break on procedure calls and returns

