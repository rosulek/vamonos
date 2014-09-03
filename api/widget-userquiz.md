---
layout: main
title: "Vamonos API Reference"
header: Vamonos API Reference
---


Vamonos.Widget.UserQuiz
=======================

[Back](index.html)


Constructor Arguments
=====================

**answer** :: *String* | *Function* -- **required**

either a string or a function that takes a frame and returns a string



**condition** :: *Function* -- **required**

a function taking the current frame, returning a boolean, used to determine when to ask a question



**question** :: *String* | *Function* -- **required**

either a string or a function that takes a frame and returns a string



**title** :: *String* | *Function* -- optional

the title of the quiz. either as a plain string or as a function that takes the current frame as an argument and returns a string.



