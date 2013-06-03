

###
# Visualizer:
###

class Visualizer

    # ???????????????????????
    {arrayify, jqueryify, clone} = require 'Vamonos-Common'
    
    arrayify: (obj) ->
        if obj instanceof Array then obj else [obj]

    jqueryify: (obj) ->
        if typeof obj is 'string' then $("#" + obj) else obj

    # arrays: viewers, variables, breakpoints
    # objects: pseudocode
    constructor: ({pseudocode, variables, breakpoints, controls, inputters, viewers, algorithm}) ->
        @active          = no
        @current         = 0
        @variables       = arrayify(variables)
        @breakpoints     = arrayify(breakpoints)
        @userBreakpoints = pseudocode.userBreakpoints
        @$pseudocode     = jqueryify(pseudocode.container)


    generate: ->
        @clear() if @active
        # create a list of variables from the names of the variables
        @vars[v] = undefined for v in @variables
        # get values of variables from inputters
        @vars[name] = inputter.getInput() for name, inputter of @inputters
        # this is an array of cloned this.vars arrays
        @frames = []
        @algorithm(this)
        @active = yes 
        @showFrame("init")
        
    
    # takes in a pseudocode line number and pushes a frame only if it's set as a breakpoint
    line: (n) ->
        return unless n in @breakpoints
        # TODO need a clone function - copy mike's
        newFrame = clone(@vars)
        newFrame.lineNumber = n
        frames.push(newFrame)

    #createControls: ->
        #$("#" + @controls).html(   # html goes here )
            #slider goes here among other things

    showFrame: (transition) ->
        viewer.render(@frames[@current], transition) for viewer in @viewers

    clear: ->
        viewer.clear() for viewer in @viewers

