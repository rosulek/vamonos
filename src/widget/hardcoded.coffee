#_require ../common.coffee

class Hardcoded extends GenericWidget
    constructor: ({@breakpoints, @vars}) ->

    setMode: (mode) ->
        if mode is "edit"
            @stash._breakpoints = @breakpoints
            @stash[name] = value for name, value of @vars

Common.VamonosExport { Widget: { Hardcoded } }
