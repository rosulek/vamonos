#_require ../common.coffee

class Hardcoded
    constructor: ({@breakpoints, @vars}) ->

    event: (event, options...) ->
        if event is "editStart"
            @stash._breakpoints = @breakpoints
            @stash[name] = value for name, value of @vars


Common.VamonosExport { Widget: { Hardcoded } }
