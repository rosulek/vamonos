root = exports ? window
root.Vamonos = 

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
        return raw.name       if typeof raw is 'object' and raw.type is 'vertex'
        return raw.id         if typeof raw is 'object' and raw.type is 'edge'
        return "G"            if typeof raw is 'object' and raw.type is 'graph'
        return raw.toString() if typeof raw is 'object' and raw.type is 'queue'
        return "" + raw        

    txtValid: (txt) -> @txtToRaw(txt)?

    isNumber: (val) ->
        return ! isNaN(parseInt(val))
    
    arrayify: (obj) ->
        if obj instanceof Array then obj else [obj]

    jqueryify: (obj) ->
        if typeof obj is 'string' then $("#" + obj) else obj

    export: (obj) ->
        root = exports ? window
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
        return obj.clone() if obj.type is 'queue'
        if obj.type is 'stash'
            r = {}
            r[k] = Vamonos.clone(v) for k,v of obj
            return r

        return $.extend(true, [], obj) if obj instanceof Array
        return $.extend(true, {}, obj)

