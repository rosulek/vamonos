#_require ../common.coffee

class Console extends GenericWidget

    setup: ->
        console.log("widget setup")
        
    setMode: (mode_str) ->
        console.log("widget setMode: " + mode_str)

    render: (frame, type) ->
        console.log("widget render, type=#{type}, frame: ", frame)

Common.VamonosExport { Widget: { Console } }
