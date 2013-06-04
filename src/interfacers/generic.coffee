Interfacers = exports? and @ or @Interfacers = {}

class Interfacers.Generic

    constructor: ->

    setup: (vars) ->
        @vars = vars

    changeMode: (mode) ->
        if @mode isnt mode
            dostuff()
        else
            dootherstuff()

    render: (args...) ->
        dostuff()

    clear: ->
        dostuff()
