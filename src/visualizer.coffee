

###
# Visualizer:
#
# takes an object with { pseudocode, controls, inputters, viewers, and the algorithm itself }
###

class Visualizer
    constructor: ({@pseudocode, @controls, @inputters, @viewers, @algorithm}) ->
        # not sure what this is about
        @generatedAndNotYetCleared = false
        
    createControls: ->
        $("#" + @controls).html(   # html goes here )

    generate: ->
        # not sure what this is about
        @clear() if @generatedAndNotYetCleared

        # create a list of variables from the names of the viewers
        @vars[v] = undefined for v of @viewers

