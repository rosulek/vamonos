class ParallelArrays

    constructor: (sharedOptions) ->
        @$container = Vamonos.jqueryify(sharedOptions.container)
        tableContainer = $("<table>", {class: "array"})
        @$container.append(tableContainer)
        @guts = []

        for specificOptions in sharedOptions.arrays
            combinedOptions = Vamonos.clone(sharedOptions)
            combinedOptions[k] = v for k,v of specificOptions

            combinedOptions.tableContainer  = tableContainer
            combinedOptions._dummyIndexZero = true

            @guts.push( new Vamonos.Widget.ArrayGuts(combinedOptions) )

    event: (args...) -> 
        g.event(args...) for g in @guts
        
Vamonos.export { Widget: { ParallelArrays } }
