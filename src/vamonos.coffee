### 
#
#   src/common.coffee
#
#   Initializes namespace.
#   Common functions for use in Vamonos
#
### 
root = exports ? window
root.Vamonos = 
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
        return raw.name       if typeof raw is 'object' and raw._type is 'vertex'
        return raw.id         if typeof raw is 'object' and raw._type is 'edge'
        return "G"            if typeof raw is 'object' and raw._type is 'graph'
        return raw.toString() if typeof raw is 'object' and raw._type is 'queue'
        return "" + raw        

    txtValid: (txt) -> @txtToRaw(txt)?

    isNumber: (val) ->
        return ! isNaN(parseInt(val))
    
    ###
    #   Vamonos.arrayify( obj )
    #
    #   wraps obj in an array if it is not an array already
    ###
    arrayify: (obj) ->
        if obj instanceof Array then obj else [obj]


    ###
    #   Vamonos.jqueryify( obj )
    #
    #   if obj is a string, presumably a div-id, it gets converted to 
    #   jquery form.
    ###
    jqueryify: (obj) ->
        if typeof obj is 'string' then $("#" + obj) else obj


    ###
    #   Vamonos.vamonos_export({ obj1, obj2 })
    #
    #   exports names to the global Vamonos namespace
    ###
    export: (obj) ->
        # node uses exports as the module namespace. check to see if it's
        # there. otherwise, use 'this' - the browser window.
        root = exports ? window

        # is Vamonos already defined? if not create it
        root.Vamonos or= {}

        # mix-in obj into the Vamanos namespace
        @mixin( root.Vamonos, obj )

    ### 
    #   Vamonos.mixin(dest, src)
    #
    #   Add all attributes of src object to dest object, recursively
    ###
    mixin: (dest, src, f) ->
        for name, val of src
            if (typeof dest[name] is 'object') and (typeof src[name] is 'object')
                @mixin(dest[name], val)
            else
                dest[name] = if f? then f(val) else val
        return dest

    ###
    #   Vamonos.clone(obj)
    #
    #   Clones an object deeply and returns it.
    ###
    clone: (obj) ->
        return unless obj?
        return obj if (typeof obj).match /number|string/
        return obj.clone() if obj.type is 'queue'
        return obj._clone() if obj._type?.match /stash/
        return $.extend(true, [], obj) if obj instanceof Array
        return $.extend(true, {}, obj)

