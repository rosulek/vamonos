Vamonos
=======

Vamonos is a library for generating browser-based visualizations of
algorithms & data structures.

Information and documentation are available at the project website:

> http://rosulek.github.io/vamonos/index-vamonos.html

# Compiling

First clone the repo

> git clone git@github.com:rosulek/vamonos.git

Make sure you have the node.js package manager `npm` installed. Then you will
need to install `grunt`.

> npm install -g grunt-cli

Now download all the necessary node tools for Vamonos.

> cd vamonos
> npm install

We use two main `grunt` tasks: 

* `grunt` will compile Vamonos into a new folder called 'lib' and create API
  markdown files in 'lib/api'.

* `grunt release` will create two zip files: one of compiled Vamonos, the other
  containing all of our demos as standalone html files.

# Licence

Vamonos is licenced under MIT
* http://www.opensource.org/licenses/mit-license.php
