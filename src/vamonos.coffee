@Vamonos =

    # assigns arguments and default arguments inside widgets. warns when
    # required arguments are not present. warns when unused arguments are
    # present. type-checks arguments.
    handleArguments: ({
        widgetObject,       # "this"/"@" from widget object

        givenArgs,          # the args object passed to widget constructor

        ignoreExtraArgs,    # optional argument: whether or not to check for extra args.
                            # for use when using constructor args multiple times.

        specObj,            # optional argument, for providing the spec manually
        }) ->

        ignoreExtraArgs ?= false
        widgetName = widgetObject.constructor.name
        spec = specObj ? widgetObject.constructor.spec

        throw Error "handleArguments: widgetName required" unless widgetName?
        throw Error "handleArguments: widgetObject required for #{widgetName} widget" unless widgetObject?
        throw Error "handleArguments: givenArgs required for #{widgetName} widget" unless givenArgs?
        throw Error "handleArguments: no spec for #{widgetName} widget" unless spec

        # The spec object is required for all widgets. It is an object mapping arg
        # names to objects of the form:
        #
        #            { type, description, [defaultValue] }
        #
        #    args without a default value are required and will cause an error.
        #    optional arguments can be created by using a defaultValue of
        #    undefined.
        #
        #    type can be a string ("String", "Integer", "Function", etc) or an
        #    array when an argument can be one of many types.

        for argName, specs of spec
            { type, description, defaultValue } = specs
            throw Error "handleArguments: no type provided for #{widgetName}.#{argName}" unless type?

            type = "x" if type is "jQuery Selector"          # Special case

            type = @arrayify(type)
            if givenArgs[argName]?
                # type-check
                unless givenArgs[argName].constructor.name in type
                    throw TypeError "WIDGET #{widgetName}: constructor argument " +
                        "'#{argName}' expects type '#{type}' but got " +
                        "type '#{givenArgs[argName].constructor.name}'"
                # type-check passed: assign value in widget object
                widgetObject[argName] = givenArgs[argName]
                delete givenArgs[argName] unless ignoreExtraArgs
            else
                if specs.hasOwnProperty("defaultValue")
                    widgetObject[argName] = defaultValue
                else
                    throw Error "#{widgetName}: required argument '#{argName}' missing."

        unless ignoreExtraArgs
            @warn(widgetName, "unused argument \"#{arg}\"") for arg of givenArgs

    # for use within the algorithm - this object is caught by the runAlgorithm
    # method in Visualizer. It causes the visualizer to take another snapshot
    # with "error" reason.
    error: (string) ->
        throw { type: "VamonosError", content: string }

    arrayToNum: (array) ->
        unless array? and array.constructor.name is 'Array'
            console.log "Vamonos.arrayToNum got non-array input", array
            return 0
        r = parseInt( array.join(""), 10 )
        if isNaN(r)
            return 0
        else
            return r

    numToArray: (num) ->
        unless num? and num.constructor.name is 'Number'
            console.log "Vamonos.numToArray got non-num input", num
            return [0]
        if num < 10 then return [num]
        r = num % 10
        @numToArray( Math.floor( num / 10 ) ).concat([r])

    # Divides the color wheel by the number of strongly connected components in
    # the graph, and creates a new class for each of them.
    createNColorClasses: (prefix, nGroups) ->
        return unless prefix? and nGroups?
        cs = (n) ->
            inc = Math.floor(360 / nGroups)
            "hsl(#{ inc * n }, 60%, 70%)"
        for i in [0..nGroups-1]
            $('<style>ellipse.'+ prefix + i + ' { fill: ' + cs(i) + '; }</style>')
                .appendTo($('html > head'))

    warn: (objName, str) ->
        console.log("### WARNING ### #{objName}: #{str}")

    rgbToHex: (r,g,b) ->
        "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

    resolveSubscript: (name) ->
        nameMatches = name.match(/(.+)_(.+)/)
        return name unless nameMatches?
        [_,lname,subscript] = nameMatches
        return "#{ lname }<sub>#{ subscript }</sub> "
        #return "#{ lname }"

    formatObject: (object, attributes = [], prevObj) ->
        if prevObj? and object.name? and object.name isnt prevObj.name
            addClass = "class='changed'"
        else
            addClass = ""
        tbl  = "<table #{ addClass } >"
        rows = (for attribute in attributes
            str = Vamonos.rawToTxt(object[attribute])
            if prevObj? and str isnt Vamonos.rawToTxt(prevObj[attribute])
                addClass = "class='changed'"
            else
                addClass = ""
            "<tr #{ addClass } ><td>#{attribute}</td><td>&nbsp=&nbsp" +
                str + "</td></tr>")
        tbl += rows.join("") + "</table>"
        tbl

    editableValue: ($elem, valFunc, returnFunc) ->
        # $elem is the element that needs to change into a input box
        # valFunc is a function that takes an $elem and returns its value
        # returnFunc is a function that takes the final value from the input box
        #   and returns the new value for the uneditable element
        doneEditing = () =>
            newVal = returnFunc($editor.val())
            $elem.html(if newVal.length then newVal else oldVal)

        oldVal = valFunc($elem)
        $editor = $("<input class='inline-input'>")
            .hide()
            .val(oldVal)
            .on "keydown.vamonos-graph", (event) =>
                return unless event.keyCode in [13, 32, 9, 27]
                doneEditing()
                false
            .on "blur.vamonos-graph something-was-selected", (event) =>
                doneEditing()
                true

        $elem.html($editor)
        $editor.fadeIn("fast").focus().select()

    moveToTop: ($elem, $container = $("*")) ->
        $elem.css("z-index", @highestZIndex($container) + 1)

    highestZIndex: ($sel) ->
        index_highest = 0
        $sel.each ->
            index_current = parseInt($(this).css("zIndex"), 10)
            if index_current > index_highest
                index_highest = index_current
        return index_highest

    insertSet: (item, arraySet) ->
        arraySet.push item unless item in arraySet

    txtToRaw: (txt) ->
        return Infinity if txt.match(/^\+?(inf(inity)?|\u221E)$/i)
        return -Infinity if txt.match(/^-(inf(inity)?|\u221E)$/i)
        if isNaN(parseInt(txt)) then null else parseInt(txt)

    rawToTxt: (raw) ->
        return "" unless raw?
        return "\u221E"       if raw is Infinity
        return "-\u221E"      if raw is -Infinity
        return raw.name       if typeof raw is 'object' and raw.type is 'Vertex'
        return raw.id         if typeof raw is 'object' and raw.type is 'Edge'
        return "graph"        if typeof raw is 'object' and raw.type is 'Graph'
        return "tree"         if typeof raw is 'object' and raw.type is 'BinaryTree'
        return raw.toString() if typeof raw is 'object' and raw.type is 'Queue'
        return "" + raw

    txtValid: (txt) -> @txtToRaw(txt)?

    isNumber: (val) ->
        return ! isNaN(parseInt(val))

    removeNamespace: (varName) ->
        r = varName.split(/::/)
        if r.length == 2
            return r[1]
        else
            return r[r.length - 1]

    funcify: (arg) ->
        return arg if typeof(arg) is "function"
        return -> arg

    arrayify: (obj) ->
        if obj instanceof Array then obj else [obj]

    jqueryify: (obj) ->
        if typeof obj is 'string' then $("#" + obj) else obj

    stringify: (obj) ->
        if obj?.type is 'Graph'
            obj.toString()
        else
            JSON.stringify(obj)

    export: (obj) ->
        root = module?.exports ? window
        root.Vamonos or= {}
        @mixin( root.Vamonos, obj )

    mixin: (dest, src, f) ->
        for name, val of src
            if (typeof dest[name] is 'object') and (typeof src[name] is 'object')
                @mixin(dest[name], val)
            else
                dest[name] = if f? then f(val) else val
        return dest

    clone: (obj) ->
        return unless obj?
        return obj if (typeof obj).match /number|string|boolean/
        return obj.clone() if obj.type in ['Queue', 'Graph']
        if obj.type is 'stash'
            r = {}
            r[k] = Vamonos.clone(v) for k,v of obj
            return r

        return $.extend(true, [], obj) if obj instanceof Array
        return $.extend(true, {}, obj)

    # stringify and compress things
    encode: (thing) ->
        s = JSON.stringify(thing)
        c = @lzw_encode(s)
        h = unescape(encodeURIComponent(c))
        z = window.btoa(h)
        return z

    # uncompress and unstringify things
    decode: (base64str) ->
        s = window.atob(base64str)
        c = decodeURIComponent(escape(s))
        j = @lzw_decode(c)
        return JSON.parse(j)

    # Decompress an LZW-encoded string
    lzw_decode: (s) ->
        dict = {}
        data = (s + "").split("")
        currChar = data[0]
        oldPhrase = currChar
        out = [currChar]
        code = 256
        for i in [1 .. data.length - 1]
            currCode = data[i].charCodeAt(0)
            if (currCode < 256)
                phrase = data[i]
            else
               phrase = if dict[currCode] then dict[currCode] else (oldPhrase + currChar)
            out.push(phrase)
            currChar = phrase.charAt(0)
            dict[code] = oldPhrase + currChar
            code++
            oldPhrase = phrase
        return out.join("")

    # LZW-compress a string
    lzw_encode: (s) ->
        dict = {}
        data = (s + "").split("")
        out = []
        phrase = data[0]
        code = 256
        for currChar in data[1..]
            if dict[phrase + currChar]?
                phrase += currChar
                continue
            if phrase.length > 1
                out.push(dict[phrase])
            else
                out.push(phrase.charCodeAt(0))
            dict[phrase + currChar] = code
            code++
            phrase = currChar
        if phrase.length > 1
            out.push(dict[phrase])
        else
            out.push(phrase.charCodeAt(0))
        for i in [0 .. out.length - 1]
            out[i] = String.fromCharCode(out[i])
        return out.join("")
