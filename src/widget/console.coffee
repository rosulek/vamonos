#_require ../common.coffee

class Console

    event: (event, options...) ->
        if options.length > 0 
            console.log "widget event '#{event}', options:", options 
        else
            console.log "widget event '#{event}'"


Common.VamonosExport { Widget: { Console } }
