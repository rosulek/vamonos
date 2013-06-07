### 
#
#   src/common.coffee
#
#   Common functions for use in Vamonos
#
#   usage: include "#_require ./relative_path_to_common.coffee" at top of
#   source file so that the build script will load it before the file you are
#   working on.
#
###

class Common

    @txtToRaw: (txt) ->
        return Infinity if txt.match(/^\+?(inf(inity)?|\u221E)$/i)
        return -Infinity if txt.match(/^-(inf(inity)?|\u221E)$/i)
        if isNaN(parseInt(txt)) then null else parseInt(txt)

    @rawToTxt: (raw) ->
        return "" unless raw?
        return "\u221E"  if raw is Infinity
        return "-\u221E" if raw is -Infinity
        return "" + raw        

    @txtValid: (txt) -> @txtToRaw(txt)?

    ###
    #   Common.arrayify( obj )
    #
    #   wraps obj in an array if it is not an array already
    ###
    @arrayify: (obj) ->
        if obj instanceof Array then obj else [obj]


    ###
    #   Common.jqueryify( obj )
    #
    #   if obj is a string, presumably a div-id, it gets converted to 
    #   jquery form.
    ###
    @jqueryify: (obj) ->
        if typeof obj is 'string' then $("#" + obj) else obj


    ###
    #   Common.vamonos_export({ obj1, obj2 })
    #
    #   exports names to the global Vamonos namespace
    ###
    @VamonosExport: (obj) ->
        # node uses exports as the module namespace. check to see if it's
        # there. otherwise, use 'this' - the browser window.
        root = exports ? window

        # is Vamonos already defined? if not create it
        root.Vamonos or= {}

        # mix-in obj into the Vamanos namespace
        @mixin( root.Vamonos, obj )

    ### 
    #   Common.mixin(dest, src)
    #
    #   Add all attributes of src object to dest object, recursively
    ###
    @mixin: (dest, src) ->
        for name, val of src
            if (typeof dest[name] is 'object') and (typeof src[name] is 'object')
                @mixin( dest[name], src[name])
            else
                dest[name] = src[name]

    ###
    #   Common.clone(obj)
    #
    #   Clones an object deeply and returns it.
    #
    #   Inline javascript (sorry!)
    ###
    `Common.clone = function (src) {
        function mixin(dest, source, copyFunc) {
            var name, s, i, empty = {};
            for(name in source){
                // the (!(name in empty) || empty[name] !== s) condition avoids copying properties in "source"
                // inherited from Object.prototype.  For example, if dest has a custom toString() method,
                // don't overwrite it with the toString() method that source inherited from Object.prototype
                s = source[name];
                if(!(name in dest) || (dest[name] !== s && (!(name in empty) || empty[name] !== s))){
                    dest[name] = copyFunc ? copyFunc(s) : s;
                }
            }
            return dest;
        }

        if(!src || typeof src != "object" || Object.prototype.toString.call(src) === "[object Function]"){
            // null, undefined, any non-object, or function
            return src; // anything
        }
        if(src.nodeType && "cloneNode" in src){
            // DOM Node
            return src.cloneNode(true); // Node
        }
        if(src instanceof Date){
            // Date
            return new Date(src.getTime()); // Date
        }
        if(src instanceof RegExp){
            // RegExp
            return new RegExp(src);   // RegExp
        }
        var r, i, l;
        if(src instanceof Array){
            // array
            r = [];
            for(i = 0, l = src.length; i < l; ++i){
                if(i in src){
                    r.push(Common.clone(src[i]));
                }
            }
            // we don't clone functions for performance reasons
            // UNCOMMENTED by MJR
        }
        else if(typeof source === 'function'){
            // function
            r = function(){ return src.apply(this, arguments); };
        }
        else{
            // generic objects
            r = src.constructor ? new src.constructor() : {}; //BUG Doesn't handle CSSStyleDeclaration types
        }
        return mixin(r, src, Common.clone);

    };`

    ###
    #   Common.addTableRow(jQtable)
    #   
    #   Appends a new row to a jquery table.
    #
    #   Inline javascript (sorry!)
    ###
    `Common.addTableRow = function (jQtable){
        jQtable.each(function(){
            var $table = $(this);
            // Number of td's in the last table row
            var n = $('tr:last td', this).length;
            var tds = '<tr>';
            for(var i = 0; i < n; i++){
                tds += '<td>&nbsp;</td>';
            }
            tds += '</tr>';
            if($('tbody', this).length > 0){
                $('tbody', this).append(tds);
            }else {
                $(this).append(tds);
            }
        });
    };`

Common.VamonosExport { Common }
