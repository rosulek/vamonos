#_require ../common.coffee

class Hardcoded
    constructor: ({@breakpoints, @vars}) ->

    setup: (@stash) ->

    setMode: (mode) ->
        if mode is "edit"
            @stash._breakpoints = @breakpoints
            @stash[name] = value for name, value of @vars

    render: (frame, type) ->

Common.VamonosExport { Widget: { Hardcoded } }
