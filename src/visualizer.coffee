#_require ./common.coffee

###
#
#   src/visualizer.coffee :: exports Vamonos.Visualizer
#
#   Sets up control and maintains state for the visualization.
#
###

class Visualizer

    constructor: ({varNames, interfacers, @controls, @algorithm}) ->
        @active             = no
        @currentFrameNumber = 0

        @varNames           = Common.arrayify(varNames)
        @interfacers        = Common.arrayify(interfacers)

        # create the vars object
        @vars = {}
        @vars[v] = undefined for v in @varNames

        # pass a reference to the vars object to each interfacer
        ui.setup(@vars) for ui in @interfacers


    ###
    #   Visualizer.currentFrame()
    #
    #   Easily access the current frame.
    ###
    currentFrame: -> @frames[@currentFrameNumber]


    ###
    #   Visualizer.generate()
    #
    #   Initializes the frame array, runs the algorithm, and activates
    #   interfacers.
    ###
    generate: ->
        @clear() if @active
        @frames = []
        @algorithm(this)
        @activate()
        @showFrame("init")
        

    ###
    #   Visualizer.line(number)
    #
    #   marks an expression in the javascript algorithm simulation (passed
    #   in to constructor as 'algorithm') as corresponding to a particular
    #   line in the pseudocode.
    #
    #   takes in a pseudocode line number and pushes a frame only if it's set
    #   as a breakpoint in @vars._breakpoints.
    ###
    line: (n) ->
        return unless n in @vars._breakpoints
        newFrame = Common.clone(@vars)
        newFrame._lineNumber = n
        frames.push(newFrame)


    ###
    #   Interfacer controls - send a message to all interfacers
    ###
    activate: -> 
        return if @active
        @active = yes
        for ui in @interfacers 
            ui.changeMode("active") 

    showFrame: (transition) ->
        for ui in @interfacers
            ui.render(@currentFrame(), transition) 

    deactivate: ->
        return unless @active
        @active = no
        for ui in @interfacers
            ui.changeMode("inactive") 

    clear: ->
        for ui in @interfacers
            ui.clear() 


# Export the Visualizer object to the global namespace
Common.vamonos_export { Visualizer }
