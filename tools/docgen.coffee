{ Vamonos } = require '../lib/vamonos.js'

p = (s) -> console.log s        # print
b = (s) -> p("* " + s)          # bulletpoint
i = (s) -> p("    " + s)        # indent

h1 = (s) -> p("\n" + s + "\n" + (new Array(s.length + 1)).join("="))
h2 = (s) -> p("\n" + s + "\n" + (new Array(s.length + 1)).join("-"))
h3 = (s) -> p("\n### " + s)

code = (s) -> p(s.replace(/^/gm, ">    "))

docs = (type, widget) ->
    h1 "Vamonos.#{type}.#{widget.name}"
    p widget.description if widget.description?
    if (1 for x,y of widget.spec).length
        h2 "Arguments"
        printArgSpec widget.spec, widget.name

printArgSpec = (spec, name) ->
    for argName, specs of spec
        { type, defaultValue, description, example } = specs
        unless description?
            console.warn "warning: no description provided for argument " +
                "\"#{ argName }\" of widget \"#{name}\""
        r = if specs.hasOwnProperty("defaultValue")
            "Required"
        else
            if defaultValue?
                "Default Value: #{ defaultValue }"
            else
                "Optional"
        t = if type.constructor.name is 'Array'
            type.join(" | ")            
        else
            type
        b "#{argName} :: #{t} -- #{r}"
        i description if description?
        if example?
            i "Example:"
            code example 

docs("", Vamonos.Visualizer)
docs("DataStructure", d) for name, d of Vamonos.DataStructure
docs("Widget", w) for name, w of Vamonos.Widget
