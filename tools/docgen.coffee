fs = require 'fs'

make_printers = (obj) -># {{{
    # In order to modify strings in place, which coffeescript does not support,
    # we use an object and modify its "val" attribute... which conveniently can
    # be a string.
    r = {}
    r.pr = (s) -> obj.val += s        # print
    r.p = (s) -> r.pr(s + "\n\n")
    r.b = (s) -> r.p("* " + s)          # bulletpoint
    r.i = (s) -> r.p("    " + s)        # indent
    r.h1 = (s) -> r.p("\n" + s + "\n" + (new Array(s.length + 1)).join("="))
    r.h2 = (s) -> r.p("\n" + s + "\n" + (new Array(s.length + 1)).join("-"))
    r.h3 = (s) -> r.p("\n### " + s)
    r.code = (s) -> r.p(s.replace(/^/gm, ">     "))
    return r
# }}}
formattedName = (nameSpace, objectItself) ->
    return "Vamonos.#{(if nameSpace.length then nameSpace + "." else "") + objectItself.name}"

mdHeader = (title, hdr) -> return """
    ---
    layout: main
    title: "#{ title }"
    header: #{ hdr }
    ---
    """

docs = (nameSpace, widget) ->
    ret = {val: ""}
    { pr,p,b,i,h1,h2,h3,code } = make_printers(ret)

    p mdHeader(
        formattedName(nameSpace, name: widget.name),
        widget.name
    )
    h1(formattedName(nameSpace, name: widget.name) + " API Reference")
    p "[Back](index.html)"
    p widget.description if widget.description?

    if (1 for x,y of widget.spec).length # if the spec object has any attributes
        h3 "Arguments"
        pr makeArgSpec(widget.spec, widget.name)

    return ret.val

makeArgSpec = (spec, name) -># {{{
    ret = {val: ""}
    { pr,p,b,i,h1,h2,h3,code } = make_printers(ret)

    for argName, specs of spec

        # Do not publish private constructor arguments
        continue if /^_/.test argName 

        { type, defaultValue, description, example } = specs

        unless description?
            console.warn "warning: no description provided for argument " +
                "\"#{ argName }\" of widget \"#{name}\""

        # an argument is required unless it has a defaultValue
        r = unless specs.hasOwnProperty("defaultValue")
            "Required"
        else
            # a defaultValue can be 'undefined', in which case the argument is optional
            if defaultValue?
                "Default Value: #{ defaultValue }"
            else
                "Optional"

        #
        t = if type.constructor.name is 'Array'
            type.join(" | ")            
        else
            type
        b "#{argName} :: #{t} -- #{r}"
        i description if description?
        if example?
            i "Example:"
            code example 

    return ret.val
# }}}

index = (filesList) ->
    ret = {val: ""}
    { pr,p,b,i,h1,h2,h3,code } = make_printers(ret)
    p mdHeader("Vamonos API Reference", "Vamonos API Reference")
    
    for { name, fileName } in filesList
        b "[#{name}](#{fileName})"

    return ret.val

writeApiFile = (fileName, nameSpace, objectItself) -># {{{
    fs.writeFileSync(
        buildDir + targetDirName + fileName + ".md",
        docs(nameSpace, objectItself)
    )
    return { name: formattedName(nameSpace, objectItself), fileName: fileName + finalSuffix }# }}}

#####################################################################

buildDir = 'lib/'
targetDirName = 'api/'
finalSuffix = '.html'
Vamonos = require('../' + buildDir + "vamonos.js").Vamonos

files = []

unless fs.existsSync(buildDir + targetDirName) 
    fs.mkdir(buildDir + targetDirName)

files.push writeApiFile("visualizer", "", Vamonos.Visualizer)
files.push (writeApiFile("data-" + name.toLowerCase(), "DataStructure", d) for name, d of Vamonos.DataStructure)...
files.push (writeApiFile("widget-" + name.toLowerCase(), "Widget", w) for name, w of Vamonos.Widget)...

# create the index file

fs.writeFileSync(
    buildDir + targetDirName + "index.md",
    index(files)
)