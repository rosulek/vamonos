#_require ../common.coffee
#_require arrayguts.coffee

class ParallelArrays

    constructor: (sharedOptions) ->
        @$container = Common.jqueryify(sharedOptions.container)
        tableContainer = $("<table>", {class: "array"})
        @$container.append(tableContainer)
        @guts = []

        for specificOptions in sharedOptions.arrays
            combinedOptions = Common.clone(sharedOptions)
            combinedOptions[k] = v for k,v of specificOptions

            combinedOptions.tableContainer  = tableContainer
            combinedOptions._dummyIndexZero = true

            @guts.push( new Vamonos.Widget.ArrayGuts(combinedOptions) )

    event: (args...) -> 
        g.event(args...) for g in @guts
        
Common.VamonosExport { Widget: { ParallelArrays } }

