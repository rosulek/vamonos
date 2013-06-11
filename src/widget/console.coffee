class Console

    event: (event, options...) ->
        if options.length > 0 
            console.log "widget event '#{event}', options:", options 
        else
            console.log "widget event '#{event}'"

Vamonos.export { Widget: { Console } }
