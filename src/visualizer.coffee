#_require ./common.coffee

###
#
#   src/visualizer.coffee :: exports Vamonos.Visualizer
#
#   Sets up control and maintains state for the visualization.
#
###

class Visualizer

    constructor: ({widgets, @algorithm}) ->
        @currentFrameNumber = 0
        @widgets            = Common.arrayify(widgets)

        # create the stash object
        @stash = { _breakpoints: [] }

        # pass a reference to the stash object to each widget
        ui.setup(@stash, this) for ui in @widgets

        @deactivate()


    ###
    #   Visualizer.generate()
    #
    #   Initializes the frame array, runs the algorithm, and activates
    #   widgets.
    ###
    generate: ->
        @frames = []
        @currentFrameNumber = 0
        @algorithm(this)
        @currentFrameNumber = 0
        f._numFrames = @frames.length for f in @frames
        @activate()
        @nextFrame()
        

    ###
    #   Visualizer.line(number)
    #
    #   marks an expression in the javascript algorithm simulation (passed
    #   in to constructor as 'algorithm') as corresponding to a particular
    #   line in the pseudocode.
    #
    #   takes in a pseudocode line number and pushes a frame only if it's set
    #   as a breakpoint in @stash._breakpoints.
    ###
    line: (n) ->
        return unless n in @stash._breakpoints
        newFrame              = Common.clone(@stash)
        newFrame._lineNumber  = n
        newFrame._frameNumber = ++@currentFrameNumber
        @frames.push(newFrame)


    ###
    #   Frame controls - move frame and send message to widgets
    #  
    #   frame numbers are 1-indexed
    ###
    nextFrame: ->
        @goToFrame(@currentFrameNumber + 1, "next")

    prevFrame: ->
        @goToFrame(@currentFrameNumber - 1, "prev")

    jumpFrame: (n) ->
        @goToFrame(n, "jump")

    goToFrame: (n, type) ->
        return unless 1 <= n <= @frames.length
        @currentFrameNumber = n
        for ui in @widgets
            ui.render(@frames[@currentFrameNumber-1], type)


    ###
    #   Interfacer controls - send a message to all widgets
    ###
    activate: -> 
        return if @mode is "display"
        for ui in @widgets 
            ui.setMode("display") 
        @mode = "display"

    deactivate: ->
        return if @mode is "edit"
        for ui in @widgets
            ui.setMode("edit") 
        @mode = "edit"


# Export the Visualizer object to the global namespace
Common.VamonosExport { Visualizer }
