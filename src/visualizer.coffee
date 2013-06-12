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


###*
# The test project
#
# @project tester
# @title The Tester
# @icon http://a.img
# @url http://one.url
# @url http://two.url
# @author admo
# @contributor davglass
# @contributor entropy
###


###*
# Just a test
#
# @class Visualizer
# @constructor
# @param options {Object} asdfasdf
#   @param options.widgets {Array} list of widgets
#   @param options.algorithm {Function} callback
#   @param options.maxFrames {Number} something
#   @param options.autoStart {Boolean} whether to auto start
###

class Visualizer

    constructor: ({widgets, @algorithm, @maxFrames, autoStart}) ->
        @currentFrameNumber = 0
        @widgets            = Vamonos.arrayify(widgets)
        @maxFrames         ?= 250
        autoStart          ?= false

        @stash = { _breakpoints: [], _inputVars: [], _watchVars: [] }
        @tellWidgets("setup", @stash, @)

        if autoStart
            @runAlgorithm() 
        else
            @editMode() 

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
        if @takeSnapshot(n)
            throw "too many frames" if @currentFrameNumber >= @maxFrames

            newFrame              = Vamonos.clone(@stash)
            newFrame._lineNumber  = n
            newFrame._prevLine    = @prevLine
            newFrame._frameNumber = ++@currentFrameNumber
            @frames.push(newFrame)
        
        @prevLine = n
        throw "too many lines" if ++@numCallsToLine > 10000

    takeSnapshot: (n) ->
        return true if n is 0
        return n in @stash._breakpoints if @stash._breakpoints.length > 0
        return @diff(@frames[@frames.length-1], @stash, @stash._watchVars) if @stash._watchVars?
        return false
        
    # this is somewhat hacky, comparing stringifications
    diff: (left, right, vars) ->
        tleft = {}
        tright = {}
        for v in vars
            tleft[v]  = left[v]
            tright[v] = right[v]
        return JSON.stringify(tleft) isnt JSON.stringify(tright)

    trigger: (event, options...) -> switch event
        when "runAlgorithm" then @runAlgorithm()
        when "editMode"     then @editMode()
        when "nextFrame"    then @nextFrame()
        when "prevFrame"    then @prevFrame()
        when "jumpFrame"    then @jumpFrame(options...)


    tellWidgets: (event, options...) ->
        for widget in @widgets
            widget.event(event, options...)

    ###
    #   Visualizer.runAlgorithm()
    #
    #   Initializes the frame and stash arrays, runs the algorithm, and
    #   activates widgets.
    ###
    runAlgorithm: ->
        return if @mode is "display"

        # initialize stash except for reserved things and input vars registered by widgets
        for v of @stash
            @stash[v] = undefined unless v.match(/^_/) or v in @stash._inputVars

        @frames             = []
        @currentFrameNumber = 0
        @prevLine           = 0
        @numCallsToLine     = 0

        @tellWidgets("editStop") if @mode is "edit"

        try
            # there's always a "before" & "after" snapshot
            @line(0)
            @algorithm(this)
            @line(0)
        catch err
            switch err
                when "too many frames"
                    alert("Too many frames. You may have an infinite loop, or you may " +
                          "want to consider setting fewer breakpoints. " +
                          "Visualization has been truncated to the first " +
                          "#{@maxFrames} frames.")
                when "too many lines"
                    alert("Your algorithm has executed for over 10000 instructions. " +
                          "You may have an infinite loop. " +
                          "Visualization has been truncated.")
                else
                    throw err


        @currentFrameNumber = 0
        f._numFrames = @frames.length for f in @frames

        @mode = "display"
        @tellWidgets("displayStart")
        @nextFrame()


    editMode: ->
        return if @mode is "edit"
        @tellWidgets("displayStop") if @mode is "display"
        @mode = "edit"
        @tellWidgets("editStart")

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
        return unless @mode is "display" and 1 <= n <= @frames.length
        @currentFrameNumber = n
        @tellWidgets("render", @frames[@currentFrameNumber-1], type)


Vamonos.export { Visualizer }
