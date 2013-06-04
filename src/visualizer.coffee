#_require ./common.coffee

###
# Visualizer:
###

class Visualizer

    constructor: ({varNames, controls, interfacers, algorithm}) ->
        @active        = no
        @currentFrame  = 0
        @varNames      = Common.arrayify(varNames)
        @interfacers   = Common.arrayify(interfacers)

        # create a list of variables from the names of the variables
        @vars = {}
        @vars[v] = undefined for v in @varNames

        ui.setup(@vars) for ui in @interfacers


    generate: ->
        @clear() if @active
        # this is an array of cloned this.vars arrays
        @frames = []
        @algorithm(this)
        @activate()
        @showFrame("init")
        
    # takes in a pseudocode line number and pushes a frame only if it's set as a breakpoint
    line: (n) ->
        return unless n in @vars._breakpoints
        # TODO need a clone function - copy mike's
        newFrame = clone(@vars)
        newFrame._lineNumber = n
        frames.push(newFrame)

    #createControls: ->
        #$("#" + @controls).html(   # html goes here )
            #slider goes here among other things

    activate: ->
        viewer.changeMode("active") for viewer in @viewers 

    showFrame: (transition) ->
        viewer.render(@frames[@currentFrame], transition) for viewer in @viewers

    clear: ->
        viewer.clear() for viewer in @viewers



# export Visualizer to global namespace. in node this is the exports variable.
# otherwise attach to the value of 'this' (the browser window)
root = exports ? @

# is Vamonos already defined there? if not create it
root.Vamanos or= {}

# attach the visualizer class to the Vamanos namespace
root.Vamanos.Visualizer = Visualizer
