class Visualizer

    constructor: ({@widgets, @maxFrames, @breakOnReturn, algorithm, autoStart}) ->
        @maxFrames     ?= 250
        autoStart      ?= false
        @breakOnReturn ?= false

        @breakpoints    = {}
        @watchVars      = []
        @registeredVars = {}
        @procedures     = {}

        @initializeStash()
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

    registerVariable: (name) ->
        [ns, varName] = @parseVarName(name)
        (@registeredVars[ns] ?= []).push(varName)

    setVariable: (name, value) ->
        [ns, varName] = @parseVarName(name)
        # throw away ns information -- all input vars are args to main
        @stash.inputScope[name] = value
        return value # for chaining

    getVariable: (name) ->
        [ns, varName] = @parseVarName(name)
        return @stash.inputScope[name]

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

    parseVarName: (varname, defaultScope = "main") ->
        return [defaultScope, varname] unless varname.match(/::/)
        return varname.split(/::/)

    initializeStash: () ->
        @stash             ?= {}
        @stash.inputScope  ?=
            _procName: "input"

        @stash.callStack    = []
        @stash.globalScope  = {}
        @stash.currentScope = @stash.inputScope

    getFrame: () ->
        r = { _callStack: Vamonos.clone(@stash.callStack) } 
        procsAlreadySeen = []

        for scope in @stash.callStack
            procName = scope._procName
            continue if procName in procsAlreadySeen
            @cloneScopeToObj(r, procName, scope, procName is @stash.currentScope._procName)
            procsAlreadySeen.push(procName)

        @cloneScopeToObj(r, "global", @stash.globalScope, true)
        @cloneScopeToObj(r, "input",  @stash.inputScope,  true)
        return r

    cloneScopeToObj: (obj, procName, scope, bare = false) ->
        for k, v of scope
            continue if typeof v is 'function' 
            continue if k is 'global'
            continue if /^_/.test k
            cloned = Vamonos.clone(v)
            obj["#{procName}::#{k}"] ?= cloned
            obj[k] ?= cloned if bare
        
    contextChanged: () ->
        # if context changed since last call of line(), tell the stash's
        # call stack what the previous line was.
        return false unless @prevLine?
        return false unless @stash.currentScope isnt @prevLine.scope
        return false unless @stash.callStack.length

        calls  = (s for s in @stash.callStack when s.scope is @prevLine.scope)
        s._calledByLine = @prevLine.number for s in calls when not s._calledByLine?

        return !!@breakOnReturn

    line: (n) ->
        nextLine = 
            result : @stash.lastReturnedProc
            scope  : @stash.currentScope
            number : n

        if @contextChanged() or @takeSnapshot(n, @stash.currentScope._procName)
            throw "too many frames" if @currentFrameNumber >= @maxFrames

            newFrame                = @getFrame()
            newFrame._frameNumber   = ++@currentFrameNumber
            newFrame._prevLine      = @prevLine
            newFrame._nextLine      = nextLine
            @stash.lastReturnedProc = undefined
            @frames.push(newFrame)
        
        @prevLine = nextLine
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
            @procedures[procName] = @wrapProcedure(procName, procedure)

    newScope: (procName, args) =>
        newScope =
            _procName      : procName
            _args          : args
            _calledAtFrame : @currentFrameNumber

        newScope[name]  = proc for name, proc of @procedures
        newScope[name]  = value for name, value of args
        newScope[name] ?= undefined for name in @registeredVars[procName] ? []
        newScope.global = @stash.globalScope

        @stash.currentScope = newScope
        @stash.callStack.unshift(newScope)

        return newScope

    returnScope: (returnValue) =>
        returningScope              = @stash.callStack.shift()
        returningScope._returnValue = returnValue
        @stash.lastReturnedProc     = returningScope
        @stash.currentScope         = @stash.callStack[0] ? @stash.inputScope
        @line(0) if @breakOnReturn

    wrapProcedure: (procName, procedure) ->
        return (args = {}) =>
            scope = @newScope(procName, args)
            ret = procedure.call(scope, (n)=>@line(n))
            @returnScope(ret)
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
        for k, v of @stash.inputScope
            continue unless v?
            continue if /^_/.test k
            mainArgs[k] = v

        try
            # there's always a "before" & "after" snapshot
            @line(0)
            throw "no main function" unless typeof @procedures.main is 'function'
            @procedures.main(mainArgs)
            @line(0) unless @breakOnReturn
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
