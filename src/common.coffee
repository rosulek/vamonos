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
    @vamonos_export: (obj) ->
        # node uses exports as the module namespace. check to see if it's
        # there. otherwise, use 'this' - the browser window.
        root = exports ? window

        # is Vamonos already defined? if not create it
        root.Vamonos or= {}

        # merge obj into the Vamanos namespace
        root.Vamonos = @merge(root.Vamonos, obj)

    ### 
    #   Common.merge(obj1, obj2)
    #
    #   Merge all attributes of obj1 and obj2 recursively and return a new
    #   object.
    ###
    @merge: (obj1, obj2) ->
        ret = @clone(obj1)
        for name, val of obj2
            if (typeof ret[name] is 'object') and (typeof obj2[name] is 'object')
                ret[name] = @merge(obj1[name], obj2[name])
            else
                ret[name] = val
        ret

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

