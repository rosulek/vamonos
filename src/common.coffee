### 
#
#   src/common.coffee
#   Common functions for use in Vamonos
#
#   usage: include "#_require ./path_to_common.coffee" at top of source file so
#   that the build script will load it before the file you are writing.
#
###

class Common

    ###
    #   Common.arrayify( obj )
    #   wraps obj in an array if it is not an array already
    ###

    @arrayify: (obj) ->
        if obj instanceof Array then obj else [obj]


    ###
    #   Common.jqueryify( obj )
    #   if obj is a string, presumably a div-id, it gets converted to 
    #   jquery form.
    ###

    @jqueryify: (obj) ->
        if typeof obj is 'string' then $("#" + obj) else obj


    ###
    #   Common.vamonos_export({ obj1, obj2 })
    #   exports names to the global Vamonos namespace
    ###
    
    @vamonos_export: (obj) ->
        # node uses exports as the module namespace. check to see if it's
        # there. otherwise, use 'this' - the browser window.
        root = exports ? @

        # is Vamonos already defined? if not create it
        root.Vamanos or= {}

        # attach each obj to the Vamanos namespace
        for name, value of obj
            root.Vamanos[name] = value
