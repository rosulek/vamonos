#_require ./common.coffee

###
#
#   src/visualizer.coffee :: exports Vamonos.Visualizer
#
#   Controls widgets, runs algorithm, and maintains state for the visualization.
#
#   Constructor Arguments:
#
#       widgets:        An array of Vamanos.Widget objects. These set up the
#                       stash and breakpoints, display variables and control
#                       the visualizer.
#
#       algorithm:      The algorithm itself, coded as a javascript function
#                       that takes a visualizer as input and calls the
#                       visualizer's line(n) method at places corresponding
#                       to pseudocode lines.
#
#       maxFrames:      The maximum number of frames that the line method will
#                       generate before throwing an error. Default is 250.
#
#       autoStart:      Should the visualizer start in display mode? Defaults
#                       to false.
#
###

class Visualizer

    constructor: ({widgets, @algorithm, @maxFrames, autoStart}) ->
        @currentFrameNumber = 0
        @widgets            = Common.arrayify(widgets)
        @maxFrames         ?= 250
        autoStart          ?= false

        # create the stash object
        @stash = { _breakpoints: [] }

        # pass a reference to the stash object to each widget
        ui.setup(@stash, this) for ui in @widgets

        @editMode()
        @runAlgorithm() if autoStart


    ###
    #   Visualizer.runAlgorithm()
    #
    #   Initializes the frame array, runs the algorithm, and activates
    #   widgets.
    ###
    runAlgorithm: ->
        @frames = []
        @currentFrameNumber = 0

        @displayMode()


        try
            # there's always a "before" & "after" snapshot
            @line(0)
            @algorithm(this)
            @line(0)
        catch err
            alert("Too many frames. You may have an infinite loop. " +
                  "Visualization has been truncated to the first " +
                  "#{@maxFrames} frames.")

        @currentFrameNumber = 0
        f._numFrames = @frames.length for f in @frames
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
    #
    #   n=0 is reserved for taking a snapshot of the variables before/after
    #   entire algorithm execution
    #
    ###
    line: (n) ->
        return unless n in @stash._breakpoints or n is 0
        throw "too many frames" if @currentFrameNumber >= @maxFrames

        newFrame              = Common.clone(@stash)
        newFrame._lineNumber  = n
        newFrame._frameNumber = ++@currentFrameNumber
        @frames.push(newFrame)

    ###
    #   Mode controls - tell all widgets to change modes.
    ###
    displayMode: ->
        return if @mode is "display"
        for ui in @widgets
            ui.setMode("display")
        @mode = "display"

    editMode: ->
        return if @mode is "edit"
        for ui in @widgets
            ui.setMode("edit")
        @mode = "edit"

    ###
    #   Frame controls - move frame and send message to widgets.
    #
    #   Frame numbers are 1-indexed.
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



Common.VamonosExport { Visualizer }
