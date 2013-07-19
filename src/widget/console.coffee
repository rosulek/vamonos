class Console

    event: (event, options...) -> 

        if event is 'render'
            console.log (
                options[0]._frameNumber + " : " + options[0]._snapshotReason
            )
        else if options.length > 0 
            console.log "widget event '#{event}', options:", options 
        else
            console.log "widget event '#{event}'"



Vamonos.export { Widget: { Console } }
