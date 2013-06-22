class Visualizer

    constructor: ({@widgets, @maxFrames, algorithm, autoStart}) ->
        @maxFrames         ?= 250
        autoStart          ?= false

        @currentFrameNumber = 0
        @breakpoints        = {}

        @inputVars = {}
        @watchVars = {}

        @prepareStash()
        @namespace = @stash.namespaces
        @prepareAlgorithm(algorithm)

        @tellWidgets("setup", @)

        if autoStart
            @runAlgorithm() 
        else
            @editMode() 

    # --------------- public methods ------------------ #

    trigger: (event, options...) -> switch event
        when "runAlgorithm" then @runAlgorithm()
        when "editMode"     then @editMode()
        when "nextFrame"    then @nextFrame()
        when "prevFrame"    then @prevFrame()
        when "jumpFrame"    then @jumpFrame(options...)

    registerVariable: (name, isInput = false) ->
        [ns, varName] = @parseVarName(name, isInput)
        @ensureNamespace(ns)
        @namespace[ns][varName] ?= undefined

    setVariable: (name, value, isInput = false) ->
        [ns, varName] = @parseVarName(name, isInput)
        @ensureNamespace(ns)
        @namespace[ns][varName] = value
        Vamonos.insertSet(varName, @inputVars[ns]) if isInput
        return value # for chaining

    getVariable: (name, isInput = false) ->
        [ns, varName] = @parseVarName(name, isInput)
        @ensureNamespace(ns)
        return @namespace[ns][varName]

    getBreakpoints: (proc) ->
        @breakpoints[proc] ?= []
        return @breakpoints[proc]

    setBreakpoint: (b, proc) ->
        @breakpoints[proc] ?= []
        Vamonos.insertSet(b, @breakpoints[proc])

    removeBreakpoint: (b, proc) ->
        @breakpoints[proc] ?= []
        @breakpoints[proc].splice(@breakpoints[proc].indexOf(b), 1)

    # ---------------- stash related methods ---------------- #

    parseVarName: (varname, isInput = false) ->
        defaultScope = if isInput then "global" else "main"
        return [defaultScope, varname] unless varname.match(/::/)
        return varname.split(/::/)

    ensureNamespace: (ns) ->
        @inputVars[ns]        ?= []
        @watchVars[ns]        ?= []
        @stash.namespaces[ns] ?= { global: @stash.namespaces.global }

    prepareStash: () ->
        @stash             = {}
        @stash.callStack   = []
        @stash.type        = 'stash'
        @stash.context     = { proc: "global", args: "" }
        @stash.namespaces  = { global: {} }
        @inputVars.global ?= []
        @watchVars.global ?= []

    initializeStash: () ->
        @stash.context   = { proc: "global", args: "" }
        @stash.callStack = []
        for nsname, nsobj of @stash.namespaces
            for name, val of nsobj when not name in @inputVars[nsname]
                nsobj[name] = undefined unless name is 'global'

    getFrame: () ->
        r = {
            _callStack: Vamonos.clone(@stash.callStack)
        }
        for proc, ns of @stash.namespaces
            for k, v of ns
                continue if typeof v is 'function' or k is 'global'
                cloned = Vamonos.clone(v)
                r["#{proc}::#{k}"] = cloned
                r[k] = cloned if proc is @stash.context.proc
        return r

    # --------------- algorithm related methods -------------- #

    line: (n) ->
        # if context changed since last call of line(), tell the stash's
        # call stack what the last line was.
        if @prevLine? and @stash.context isnt @prevLine.context and @stash.callStack.length > 0
            calls = (s for s in @stash.callStack when s.context is @prevLine.context)
            s.line = @prevLine.n for s in calls when not s.line?

        if @takeSnapshot(n, @stash.context.proc)
            throw "too many frames" if @currentFrameNumber >= @maxFrames

            newFrame              = @getFrame()
            newFrame._nextLine    = { n, context: @stash.context }
            newFrame._prevLine    = @prevLine
            newFrame._frameNumber = ++@currentFrameNumber
            @frames.push(newFrame)
        
        @prevLine = { n, context: @stash.context }
        throw "too many lines" if ++@numCallsToLine > 10000

    takeSnapshot: (n, proc) ->
        return true if n is 0
        return n in @breakpoints[proc] if @breakpoints[proc]?.length > 0
        return @diff(@frames[@frames.length-1], @stash, @watchVars) if @watchVars.length > 0
        return false
        
    # this is somewhat hacky, comparing stringifications
    diff: (left, right, vars) ->
        tleft = {}
        tright = {}
        for v in vars
            tleft[v]  = left[v]
            tright[v] = right[v]
        return JSON.stringify(tleft) isnt JSON.stringify(tright)

    prepareAlgorithm: (algorithm) ->
        if typeof algorithm is 'function'
            algorithm = { "main": algorithm }
        for procName, procedure of algorithm
            @ensureNamespace(procName)
            @setVariable(
                "global::#{procName}",
                @wrapProcedure(procName, procedure),
                true
            )

    wrapProcedure: (procName, procedure) ->
        return (args = {}) =>

            if procName is "main"
                for k in @inputVars.global
                    v = @getVariable("global::#{k}") 
                    continue if typeof v is 'function'
                    args[k] = v

            save    = {}
            save[k] = @getVariable("#{procName}::#{k}") for k of args
            @stash.callStack.push(@stash.context)

            @stash.context = { proc: procName, args: args }
            @setVariable("#{procName}::#{k}", v) for k, v of args

            ret = procedure(@)

            @setVariable("#{procName}::#{k}", v) for k, v of save
            @stash.context = @stash.callStack.pop()

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
            throw "no main function" unless @namespace.global.main?
            @namespace.global.main()
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

    # ------------------ widget control methods ---------------------- #

    tellWidgets: (event, options...) ->
        for widget in @widgets
            widget.event(event, options...)

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
