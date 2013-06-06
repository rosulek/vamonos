#_require ../common.coffee

class Hardcoded
    constructor: ({@breakpoints, @vars}) ->

    setup: ->

    setMode: (mode) ->
        if mode is "edit"
            @stash._breakpoints = @breakpoints
            @stash[name] = value for name, value of @vars

    render: ->

Common.VamonosExport { Widget: { Hardcoded } }
