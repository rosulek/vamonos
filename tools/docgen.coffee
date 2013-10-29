fs = require 'fs'

buildDir = 'lib/'
targetDirName = 'api/'
finalSuffix = '.html'

Vamonos = require('../' + buildDir + "vamonos.js").Vamonos

make_printers = (obj) ->
    # In order to modify strings in place, which coffeescript does not support,
    # we use an object and modify its "val" attribute... which conveniently can
    # be a string.
    r = {}
    r.pr = (s) -> obj.val += s        # print
    r.p = (s) -> r.pr(s + "\n\n")
    r.b = (s) -> r.p(" * " + s)          # bulletpoint
    r.i = (s) -> r.p("    " + s)        # indent
    r.h1 = (s) -> r.p("\n" + s + "\n" + (new Array(s.length + 1)).join("="))
    r.h2 = (s) -> r.p("\n" + s + "\n" + (new Array(s.length + 1)).join("-"))
    r.h3 = (s) -> r.p("\n### " + s)
    r.code = (s) -> r.p(s.replace(/^/gm, ">     "))
    return r

formattedName = (nameSpace, objectItself) ->
    "Vamonos.#{(if nameSpace.length then nameSpace + "." else "") + objectItself.name}"

mdHeader = (title, hdr) -> """
    ---
    layout: main
    title: "#{ title }"
    header: #{ hdr }
    ---
    """

docs = (nameSpace, widget) ->
    ret = {val: ""}
    { pr,p,b,i,h1,h2,h3,code } = make_printers(ret)

    p mdHeader("Vamonos API Reference", "Vamonos API Reference")
    h1(formattedName(nameSpace, name: widget.name))
    p "[Back](index.html)"
    p widget.description if widget.description?

    if widget.dependencies?.length
        h3 "Arguments are shared with inner objects:"
        # dependencies come in as "Vamonos.Namespace.Widget"
        for dep in widget.dependencies
            if /\./.test dep
                [_,nameSpace, name] = dep.split(/\./)
                b "[#{ formattedName(nameSpace, name: name) }]" +
                  "(#{ nameSpace.toLowerCase() }-#{ name.toLowerCase() }.html)"
                depObj = Vamonos[nameSpace][name]
                Vamonos.mixin(widget.spec, depObj.spec)
            else
                b "[#{ name }](#{ name.toLowerCase() }.html)"

    if (1 for x,y of widget.spec).length # if the spec object has any attributes
        h3 "Constructor Arguments"
        pr makeArgSpec(widget.spec, widget.name)

    if (1 for x,y of widget.interface).length # if the interface object has attributes
        h1 "Public Interface"
        pr makeInterface(widget.interface, widget.name)

    return ret.val

makeInterface = (interObj, name) ->
    ret = {val: ""}
    { pr,p,b,i,h1,h2,h3,code } = make_printers(ret)

    for funcName, funcObj of interObj
        pr "## **#{funcName}**("
        if funcObj.args?
            pr ("`#{argName}`" for [argName, _] in funcObj.args).join(", ") 
        pr ")\n"

        if funcObj.args?
            b "`#{argName}`: #{argDesc}" for [argName, argDesc] in funcObj.args

        p funcObj.description

    return ret.val


makeArgSpec = (spec, name) ->
    ret = {val: ""}
    { pr,p,b,i,h1,h2,h3,code } = make_printers(ret)

    requiredArgs = []
    otherArgs = []

    for argName, specs of spec
        # Do not publish private constructor arguments
        continue if /^_/.test argName 
        [required, doc] = argSpec(argName, specs)
        if required
            requiredArgs.push doc
        else
            otherArgs.push doc

    p d for d in requiredArgs
    p d for d in otherArgs

    return ret.val

argSpec = (argName, specs) ->
    ret = {val: ""}
    { pr,p,b,i,h1,h2,h3,code } = make_printers(ret)
    { type, defaultValue, description, example } = specs
    required = false
    unless description?
        console.warn "warning: no description provided for argument " +
            "\"#{ argName }\" of widget \"#{name}\""

    # an argument is required unless it has a defaultValue
    if specs.hasOwnProperty("defaultValue")
        # a defaultValue can be 'undefined', in which case the argument is optional
        if defaultValue?
            r = "default Value: `#{ JSON.stringify(defaultValue) }`"
        else
            r = "optional"
    else
        r = "**required**"
        required = true

    if type.constructor.name is 'Array'
        t = type.join("* | *")            
    else
        t = type
    b "**#{argName}** :: *#{t}* -- #{r}"
    i description if description?
    if example?
        i "Example:"
        code example 
    return [required, ret.val]


index = (fileTypes) ->
    ret = {val: ""}
    { pr,p,b,i,h1,h2,h3,code } = make_printers(ret)
    p mdHeader("Vamonos API Reference", "Vamonos API Reference")

    p "[Back](../index-vamonos.html)"
    
    for [ title, filesList ] in fileTypes
        h2 title if title.length
        for { name, fileName } in filesList
            b "[#{name}](#{fileName})"

    return ret.val

writeApiFile = (fileName, nameSpace, objectItself) ->
    fs.writeFileSync(
        buildDir + targetDirName + fileName + ".md",
        docs(nameSpace, objectItself)
    )
    return { name: objectItself.name, fileName: fileName + finalSuffix }

#####################################################################

unless fs.existsSync(buildDir + targetDirName) 
    fs.mkdir(buildDir + targetDirName)

viz =  writeApiFile("visualizer", "", Vamonos.Visualizer)
ds = (writeApiFile("data-" + name.toLowerCase(), "DataStructure", d) for name, d of Vamonos.DataStructure)
ws = (writeApiFile("widget-" + name.toLowerCase(), "Widget", w) for name, w of Vamonos.Widget)

# create the index file
fs.writeFileSync(
    buildDir + targetDirName + "index.md",
    index([
        ["", [viz]]
        ["Data Structures", ds]
        ["Widgets", ws]
    ])
)
