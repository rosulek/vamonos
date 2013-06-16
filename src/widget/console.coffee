class Console

    event: (event, options...) -> 

        if options.length > 0 
            console.log "widget event '#{event}', options:", options 
        else
            console.log "widget event '#{event}'"

        #switch event
            #when "render" 
                #[frame, type] = options
                #stackContexts = (call.context for call in frame._callStack)
                #console.log "current execution context: \"#{frame._context}\", " +
                            #"stack contents:", stackContexts

Vamonos.export { Widget: { Console } }
