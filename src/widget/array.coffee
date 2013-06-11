#_require ../common.coffee
#_require arrayguts.coffee

class ArrayWrapper

    constructor: (options) ->
        @$container = Common.jqueryify(options.container)
        options.tableContainer = $("<table>", {class: "array"})
        @$container.append(options.tableContainer)
        @guts = new Vamonos.Widget.ArrayGuts(options)

    event: (args...) -> 
        @guts.event(args...)
        
Common.VamonosExport { Widget: { Array: ArrayWrapper } }

