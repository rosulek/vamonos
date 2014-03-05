---
layout: main
title: "Vamonos: Dynamic algorithm visualization in the browser"
header: Vamonos
subheader: Dynamic algorithm visualization in the browser
scriptinclude: index-demo.js
---

**Vamonos** is a library for generating browser-based visualizations of algorithms & data structures. Here are some reasons why we think Vamonos is great:

* **No installation barrier.** Visualizations run on any modern browser using standard Javascript. No plugins or extensions are needed.

* **Self-containment.** Visualizations do not require any server-side interaction. Your browser doesn't even have to be connected to the internet. Visualizations can even be "compiled" into a self-contained HTML file that can be easily distributed to students.

* **Interaction.** Students can easily provide their own inputs to an algorithm, set breakpoints & watchpoints, and step backwards & forwards through the algorithm's execution.

* **Extensibility.** If you can implement an algorithm in Javascript, then you can easily make a Vamonos visualization for that algorithm. We currently support dynamic display of array and graph data structures.

* **Appearance.** Our default visualization styles are beautiful and natively scalable using your browser's zoom feature. Of course, if you are handy with CSS, you can also easily style a visualization to meet your needs.

# See it in action!

Here is a Vamonos visualization of the *selection sort* algorithm. Feel free to jump right in and play around with it. Or, if you'd like a short guided tour,
<button id="tutorial" onclick="tut.restart()">press here</button>.

>    <table class="vamonos">
>        <tr><td class="pseudocode-and-controls">
>            <div class="pseudocode-procedures">
>                <div id="pseudocode" title="SelectionSort(A):">
>                    for i = 0 to A.length-2
>                        # find smallest item in A[i..]
>                        m = i
>                        for j = i+1 to A.length-1
>                            if A[j] &lt; A[m]
>                                m = j
>                        swap A[i] and A[m]
>                </div>
>            </div>
>        </td></tr><tr><td>
>            <div id="controls"></div>
>        </td></tr><tr><td class="variable-widgets">
>            <table class="variable-widgets">
>                <tr><td><div id="a-var"></div></td>
>                    <td><div id="array"></div></td>
>                </tr>
>            </table>
>        </td></tr>
>    </table>

# Pre-made Visualizations: <span class="construction"></span>

We have developed pre-made visualizations of many common algorithms. See our [demo collection](demos/index.html).

# Download: <span class="construction"></span>
The latest version of Vamonos is v1.2.1.

* [Vamonos and dependencies](https://github.com/rosulek/vamonos/releases/download/v1.2.1/vamonos.zip)
* [Library of pre-made standalone visualizations](https://github.com/rosulek/vamonos/releases/download/v1.2.1/vamonos-demos.zip)

Past releases, source code, and everything else is available on
our [github project page](https://github.com/rosulek/vamonos).


# Documentation: <span class="construction"></span>

Educators wishing to write their own visualizations in Vamonos should start with
our **User's Guide**:

{% assign userguideprefix = "guide/" %}
{% include userguide-toc.html %}

More detailed information can be found in our **API reference**:

* [**API Reference**](api/index.html)

# About the Project:

Vamonos is developed in the EECS department of Oregon State University. It was started while the project leader was in the Computer Science department at the University of Montana.

The name "Vamonos" doesn't really have to be an acronym, but if it were, its expansion would be **V**isualizing **A**lgorithms from **Mon**tana and **O**regon **S**tate.

Vamonos is developed with support from NSF award #1149647. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.

The Vamonos project team:

* [Mike Rosulek](http://eecs.oregonstate.edu/~rosulekm) (project leader)
* Brent Carmer
* Pat Kujawa (graduated)
* Eric Spaulding (graduated)

Vamonos is distributed under the MIT license. For more details, see the [LICENSE.md](https://github.com/rosulek/vamonos/blob/master/LICENSE.md) file in the source code.
