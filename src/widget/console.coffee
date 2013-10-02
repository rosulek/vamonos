class Console

    # Console takes no arguments
    @spec = {}

    constructor: (args = {}) ->

        Vamonos.handleArguments
            widgetObject   : this
            givenArgs      : args


    event: (event, options...) -> 

        if event is 'render'
            console.log (
                options[0]._frameNumber + " : " + 
                JSON.stringify(options[0]._snapshotReasons)
            )
        else if options.length > 0 
            console.log "widget event '#{event}', options:", options 
        else
            console.log "widget event '#{event}'"



@Vamonos.export { Widget: { Console } }
