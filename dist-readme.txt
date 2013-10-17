
================================================================================
                            Description of Files
================================================================================

vamonos/
│
│   
├── readme.txt                  : This file.
│
│   
├── vamonos-all.js              : Vamonos and all of its dependencies, in one
│                               : file.     
│
├── vamonos.css                 : Vamonos' css classes. Required for both
│                               : vamonos-all.js and vamonos.js.
│
├── vamonos.js                  : Vamonos by itself. Demos that use it must
│                               : import necessary dependencies themselves.
│
└── deps/
    ├── jquery-jsplumb.js
    ├── jquery.min.js
    ├── jquery-qtip.min.js
    └── jquery-ui.min.js

================================================================================
                                Basic Usage
================================================================================

To get started, you’ll need to make an HTML file that includes links to the
following things:

    Vamonos Javascript file
    Vamonos default CSS file

You can do that by including the following lines in your HTML file’s <head>
section:

    <link rel="stylesheet" href="path/to/vamonos.css" />
    <script type="text/javascript" src="path/to/vamonos-all.js"></script>
