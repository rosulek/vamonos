### 
#
#   src/common.coffee
#
#   Initializes namespace.
#   Common functions for use in Vamonos
#
#   usage: include "#_require ./relative_path_to_common.coffee" at top of
#   source file so that the build script will load it before the file you are
#   working on.
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
        return "\u221E"  if raw is Infinity
        return "-\u221E" if raw is -Infinity
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
    mixin: (dest, src, copyFunc) ->
        for name, val of src
            if (typeof dest[name] is 'object') and (typeof src[name] is 'object')
                @mixin( dest[name], src[name])
            else
                dest[name] = if copyFunc? then copyFunc(src[name]) else src[name]
        return dest

    ###
    #   Vamonos.clone(obj)
    #
    #   Clones an object deeply and returns it.
    ###
    clone: (src) ->
        return src                                  if not src or typeof src isnt "object" 
        return src                                  if Object.prototype.toString.call(src) is "[object Function]"
        return src.cloneNode(true)                  if src.nodeType and "cloneNode" in src    # DOM Node
        return new Date(src.getTime())              if src instanceof Date
        return new RegExp(src)                      if src instanceof RegExp
        r  = (Vamonos.clone(elem) for elem in src)  if src instanceof Array 
        r ?= {}                                     # otherwise
        Vamonos.mixin(r, src, @clone)

