class Visualizer

    constructor: ({@widgets, @maxFrames, @breakOnReturn, algorithm, autoStart}) ->
        @maxFrames     ?= 250
        autoStart      ?= false
        @breakOnReturn ?= false

        @currentFrameNumber = 0
        @breakpoints        = {}

        @inputVars = {}
        @watchVars = []

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

    setWatchVar: (varName) ->
        Vamonos.insertSet(varName, @watchVars)

    isWatchVar: (varName) ->
        return varName in @watchVars

    removeWatchVar: (varName) ->
        return unless varName in @watchVars
        ((w) -> w.splice(w.indexOf(varName), 1))(@watchVars)

    getBreakpoints: (proc) ->
        @breakpoints[proc] ?= []
        return @breakpoints[proc]

    setBreakpoint: (b, proc) ->
        @breakpoints[proc] ?= []
        Vamonos.insertSet(b, @breakpoints[proc])

    removeBreakpoint: (b, proc) ->
        @breakpoints[proc] ?= []
        ((bps) -> bps.splice(bps.indexOf(b), 1))(@breakpoints[proc])

    # ---------------- stash related methods ---------------- #

    parseVarName: (varname, isInput = false) ->
        defaultScope = if isInput then "global" else "main"
        return [defaultScope, varname] unless varname.match(/::/)
        return varname.split(/::/)

    ensureNamespace: (ns) ->
        @inputVars[ns]        ?= []
        @stash.namespaces[ns] ?= { global: @stash.namespaces.global }

    prepareStash: () ->
        @stash             = {}
        @stash.callStack   = []
        @stash.type        = 'stash'
        @stash.context     = { proc: "global", args: "", calledAtFrame: 0 }
        @stash.namespaces  = { global: {} }
        @inputVars.global ?= []

    initializeStash: () ->
        @stash.context   = { proc: "global", args: "", calledAtFrame: 0 }
        @stash.callStack = []
        for nsname, nsobj of @stash.namespaces
            for name, val of nsobj
                continue if name is 'global' # ignore the global alias in all namespaces
                nsobj[name] = undefined unless name in @inputVars[nsname]

    getFrame: () ->
        r = { _callStack: Vamonos.clone(@stash.callStack) } 

        for proc, ns of @stash.namespaces
            continue if proc is 'global' # deal with global last
            @cloneNamespaceToObj(r, proc, ns, proc is @stash.context.proc)
        @cloneNamespaceToObj(r, "global", @stash.namespaces.global, true)
        return r

    cloneNamespaceToObj: (obj, proc, ns, generic = false) ->
        for k, v of ns
            continue if typeof v is 'function' or k is 'global'
            cloned = Vamonos.clone(v)
            obj["#{proc}::#{k}"] = cloned
            obj[k] = cloned if generic and not obj[k]?
        
    # --------------- algorithm related methods -------------- #

    line: (n) ->
        # if context changed since last call of line(), tell the stash's
        # call stack what the previous line was.
        if @prevLine? and @stash.context isnt @prevLine.context and @stash.callStack.length > 0
            calls          = (s for s in @stash.callStack when s.context is @prevLine.context)
            s.line         = @prevLine.n for s in calls when not s.line?
            contextChanged = yes
        else
            contextChanged = no

        if contextChanged or @takeSnapshot(n, @stash.context.proc)
            throw "too many frames" if @currentFrameNumber >= @maxFrames

            newFrame              = @getFrame()
            newFrame._nextLine    = 
                result: @stash._lastReturnedProc
                context: @stash.context
                n: n
            @stash._lastReturnedProc = undefined
            newFrame._prevLine    = @prevLine
            newFrame._frameNumber = ++@currentFrameNumber
            @frames.push(newFrame)
        
        @prevLine = { n, context: @stash.context }
        throw "too many lines" if ++@numCallsToLine > 10000

    takeSnapshot: (n, proc) ->
        return n == 0 or
            @breakpoints[proc]?.length > 0 and n in @breakpoints[proc] or
            @watchVars.length > 0 and @diff(@frames[@frames.length-1], @getFrame(), @watchVars) 
        
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
            wrapped = @wrapProcedure(procName, procedure)
            @setVariable(
                "#{ns}::#{procName}",
                wrapped
                true
            ) for ns of @stash.namespaces

    wrapProcedure: (procName, procedure) ->
        return (args = {}, locals = []) =>
            save = {}
            for k in (k for k of args).concat(locals)
                val = @getVariable("#{procName}::#{k}") 
                save[k] = val if val?
            @setVariable("#{procName}::#{k}", undefined) for k in locals
            @stash.callStack.push(@stash.context)

            @stash.context = 
                proc          : procName
                args          : args
                calledAtFrame : @currentFrameNumber
            @setVariable("#{procName}::#{k}", v) for k, v of args

            ns   = @stash.namespaces[procName]
            ns._ = (n) => @line(n)

            procStr = procedure.toString()
            procStr = procStr.replace(/{/, "{\n\twith(ns) {")
            procStr = procStr.replace(/\s*}.*?$/, "\n\t}\n}")
            procStr = procStr.replace(/^/, "var evaledFunc = ")
            eval(procStr)
            ret = evaledFunc()

            @stash._lastReturnedProc = @stash.context
            @stash._lastReturnedProc.returnValue = ret

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

        mainArgs = {}
        for k in @inputVars.global
            v = @getVariable("global::#{k}") 
            continue if typeof v is 'function'
            mainArgs[k] = v

        try
            # there's always a "before" & "after" snapshot
            @line(0)
            throw "no main function" unless @namespace.global.main?
            @namespace.global.main(mainArgs)
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
