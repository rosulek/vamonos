#_require ../common.coffee

class Console

    constructor: () ->

    setup: (@stash) ->
        console.log("widget setup")
        
    setMode: (mode_str) ->
        console.log("widget setMode: " + mode_str)

    render: (frame, type) ->
        console.log("widget render, type=#{type}, frame: ", frame)

    clear: () ->
        console.log("widget clear")

Common.VamonosExport { Widget: { Console } }
