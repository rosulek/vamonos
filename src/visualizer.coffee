class Visualizer

    constructor: ({@widgets, @maxFrames, algorithm, autoStart}) ->
        @maxFrames         ?= 250
        autoStart          ?= false

        @currentFrameNumber = 0
        @breakpoints        = {}

        @inputVars = []
        @watchVars = []

        @prepareStash()
        @prepareAlgorithm(algorithm)

        @tellWidgets("setup", @)

        if autoStart
            @runAlgorithm() 
        else
            @editMode() 

    # ---------------  Public Methods ------------------ #

    trigger: (event, options...) -> switch event
        when "runAlgorithm" then @runAlgorithm()
        when "editMode"     then @editMode()
        when "nextFrame"    then @nextFrame()
        when "prevFrame"    then @prevFrame()
        when "jumpFrame"    then @jumpFrame(options...)

    line: (n) ->
        # if context changed since last call of line(), tell the stash's
        # call stack what the last line was.
        if @prevLine? and @stash._context isnt @prevLine.context and @stash._callStack.length > 0
            calls = (s for s in @stash._callStack when s.context is @prevLine.context)
            s.line = @prevLine.n for s in calls when not s.line?

        if @takeSnapshot(n, @stash._context.proc)
            throw "too many frames" if @currentFrameNumber >= @maxFrames

            newFrame              = @getFrame()
            newFrame._nextLine    = { n, context: @stash._context }
            newFrame._prevLine    = @prevLine
            newFrame._frameNumber = ++@currentFrameNumber
            @frames.push(newFrame)
        
        @prevLine = { n, context: @stash._context }
        throw "too many lines" if ++@numCallsToLine > 10000

    registerVariable: (name) ->
        @stash[name] ?= undefined

    setVariable: (name, value, isInput = false) ->
        @stash[name] = value
        Vamonos.insertSet(name, @inputVars) if isInput
        return value # for chaining

    getVariable: (name) ->
        @stash[name]

    getBreakpoints: (proc) ->
        @breakpoints[proc] ?= []
        return @breakpoints[proc]

    setBreakpoint: (b, proc) ->
        @breakpoints[proc] ?= []
        Vamonos.insertSet(b, @breakpoints[proc])

    removeBreakpoint: (b, proc) ->
        @breakpoints[proc] ?= []
        @breakpoints[proc].splice(@breakpoints[proc].indexOf(b), 1)

    # ---------------- Internals ------------------- #
    
    parseVarName: (varname) ->
        return varname unless varname.match(/::/)
        return varname.split(/::/)

    prepareStash: () ->
        @stash = {}
        @stash._callStack = []
        @stash._type      = 'stash'
        @stash._context   = proc: "os", args: ""

    initializeStash: () ->
        @stash._context   = proc: "os", args: ""
        @stash._callStack = []
        for v of @stash
            @stash[v] = undefined unless v.match(/^_/) or v in @inputVars

    getFrame: () ->
        r = {}
        r[k] = Vamonos.clone(v) for k, v of @stash
        return r

    takeSnapshot: (n, proc) ->
        return true if n is 0
        return n in @breakpoints[proc] if @breakpoints[proc]?.length > 0
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

    tellWidgets: (event, options...) ->
        for widget in @widgets
            widget.event(event, options...)

    prepareAlgorithm: (algorithm) ->
        if typeof algorithm is 'function'
            algorithm = { "main": algorithm }
        for procedureName, procedure of algorithm
            @inputVars.push(procedureName)
            @stash[procedureName] = @wrapProcedure(procedureName, procedure)

    wrapProcedure: (procedureName, procedure) ->
        return (args = {}) =>
            save    = {}
            save[k] = @stash[k] for k of args
            @stash._callStack.push
                varNames: (k for k, v of @stack when k[0] isnt "_")
                _context: @stash._context
            @stash[k] = v for k, v of args # bind arguments (come in as object {a: 1, b: 2})
            if procedureName is "main"
                for k in @inputVars
                    continue if typeof @stash[k] is 'function'
                    args[k] = k
            @stash._context = { proc: procedureName, args: args } # set new context
            ret = procedure(@) # call routine, save return value
            oldStack = @stash._callStack.pop()
            @stash[key] = val for key, val of save
            # delete bindings that weren't here before
            delete @stash[key] for key of @stash when not key in oldStack.varNames
            @stash._context = oldStack._context
            return ret

    runAlgorithm: ->
        return if @mode is "display"

        @frames             = []
        @currentFrameNumber = 0
        @prevLine           = 0
        @numCallsToLine     = 0

        @initializeStash()
        @tellWidgets("editStop") if @mode is "edit"

        try
            # there's always a "before" & "after" snapshot
            @line(0)
            throw "no main function" unless @stash.main?
            @stash.main()
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
