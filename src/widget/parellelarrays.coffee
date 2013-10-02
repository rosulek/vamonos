class ParallelArrays

    @spec =
        container:
            type: "String"
            description: "id of the div within which this widget should draw itself"

    constructor: (sharedOptions) ->

        Vamonos.handleArguments
            widgetName: "ParallelArrays"
            widgetObject: this
            givenArgs: sharedOptions
            ignoreExtraArgs: true

        @$container = Vamonos.jqueryify(sharedOptions.container)
        delete sharedOptions.container
        tableContainer = $("<table>", {class: "array"})
        @$container.append(tableContainer)
        @guts = []

        for specificOptions in sharedOptions.arrays
            combinedOptions = Vamonos.clone(sharedOptions)
            delete combinedOptions.arrays
            combinedOptions[k] = v for k,v of specificOptions

            combinedOptions.tableContainer  = tableContainer
            combinedOptions._dummyIndexZero = true

            @guts.push( new Vamonos.Widget.ArrayGuts(combinedOptions) )

    event: (args...) -> 
        g.event(args...) for g in @guts
        
@Vamonos.export { Widget: { ParallelArrays } }
