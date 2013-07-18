class Visualizer

    constructor: ({@widgets, @maxFrames, @breakOnReturn, algorithm, autoStart}) ->
        @maxFrames     ?= 250
        autoStart      ?= false
        @breakOnCall   ?= false
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

    getCurrentBreakpoints: () ->
        @getBreakpoints(@stash.currentScope._procName)

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
        @stash                 ?= {}
        @stash.inputScope      ?= _procName: "input"
        @stash.callStack        = [ @stash.inputScope ]
        @stash.globalScope      = {}
        @stash.currentScope     = @stash.inputScope

    getFrame: (prevLine = {}, nextLine = {}, num = 0, theseVarsOnly) ->
        r = 
            _callStack   : Vamonos.clone(@stash.callStack)
            _frameNumber : num
            _prevLine    : prevLine
            _nextLine    : nextLine

        procsAlreadySeen = []

        for scope in @stash.callStack
            procName = scope._procName
            continue if procName in procsAlreadySeen
            bare = (procName == @stash.currentScope._procName)
            @cloneScopeToObj(r, procName, scope, bare, theseVarsOnly)
            procsAlreadySeen.push(procName)

        @cloneScopeToObj(r, "global", @stash.globalScope, true)
        @cloneScopeToObj(r, "input",  @stash.inputScope,  true)

        return r

    cloneScopeToObj: (obj, procName, scope, bare = false, theseVarsOnly) ->
        for k, v of scope
            continue if typeof v is 'function' 
            continue if k is 'global'
            continue if /^_/.test k
            continue if theseVarsOnly? and k in theseVarsOnly
            cloned                    = Vamonos.clone(v)
            obj["#{procName}::#{k}"] ?= cloned
            obj[k]                   ?= cloned if bare

    line: (n, returnFrame) ->
        throw "too many frames" if @frameNumber >= @maxFrames
        throw "too many lines"  if ++@numCallsToLine > 10000

        switch n
            when "call"
                @aProcedureWasCalled = @stash.currentScope._procName
            when "ret"
                (@returnStack ?= []).unshift(returnFrame)
                @aProcedureReturned = returnFrame.procName

        reason = @takeSnapshot(n)
        return unless reason

        nextLine = 
            procName : @stash.currentScope._procName
            number   : n

        frame = @getFrame(@stash.currentScope._prevLine, nextLine, ++@frameNumber)
        frame._snapshotReason = reason

        if @returnStack?.length
            frame._returnStack = @returnStack[..]
            @returnStack.length  = 0

        @frames.push(frame)
        console.log "#{@frameNumber} : #{reason}"
    
        @stash.currentScope._prevLine = nextLine
        @aProcedureWasCalled = @aProcedureReturned = undefined


    takeSnapshot: (n) ->
        if n in @getCurrentBreakpoints()
            return "breakpoint #{n} set for #{@stash.currentScope._procName}" 

        if @aProcedureWasCalled and typeof n is 'number'
            return "procedure \"#{@aProcedureWasCalled}\" called"  

        if @aProcedureReturned and typeof n is 'number' or n is "end"
            return "procedure \"#{@aProcedureReturned}\" returned" 

        return @watchVarsChanged()

    watchVarsChanged: () ->
        return false unless @watchVars.length and @frames.length

        fakeFrame = @getFrame(null, null, null, @watchVars)

        changedVars = for v in @watchVars
            left    = @frames[@frames.length-1][v]
            right   = fakeFrame[v]
            continue unless left? and right?
            continue if JSON.stringify(left) is JSON.stringify(right)
            "#{v}"

        return false unless changedVars.length
        return (
            "vatchVar#{if changedVars.length > 1 then "s" else ""} " +
            "\"#{changedVars.join("\", ")}\" changed"
        )

    prepareAlgorithm: (algorithm) ->
        if typeof algorithm is 'function'
            algorithm = { "main": algorithm }
        for procName, procedure of algorithm
            @procedures[procName] = @wrapProcedure(procName, procedure)

    wrapProcedure: (procName, procedure) ->
        return (args = {}) =>
            newScope =
                _procName : procName
                _args     : args

            newScope[name]  = proc for name, proc of @procedures
            newScope[name]  = value for name, value of args
            newScope[name] ?= undefined for name in @registeredVars[procName] ? []
            newScope.global = @stash.globalScope

            @stash.currentScope = newScope
            @stash.callStack.unshift(newScope)
            @line("call")

            ret = procedure.call(newScope, (n)=>@line(n))

            returningScope              = @stash.callStack.shift()
            @stash.currentScope         = @stash.callStack[0]

            returnFrame = 
                procName    : procName
                args        : args
                returnValue : ret

            @line("ret", returnFrame)

            return ret

    runAlgorithm: ->
        return if @mode is "display"

        @frames         = []
        @frameNumber    = 0
        @numCallsToLine = 0

        @initializeStash()
        @tellWidgets("editStop") if @mode is "edit"

        mainArgs = {}
        for k, v of @stash.inputScope
            continue unless v?
            continue if /^_/.test k
            mainArgs[k] = v

        try
            throw "no main function" unless typeof @procedures.main is 'function'
            @procedures.main(mainArgs)
            @line("end")
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


        @frameNumber = 0
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
        @goToFrame(@frameNumber + 1, "next")

    prevFrame: ->
        @goToFrame(@frameNumber - 1, "prev")

    jumpFrame: (n) ->
        @goToFrame(n, "jump")

    goToFrame: (n, type) ->
        return unless @mode is "display" and 1 <= n <= @frames.length
        @frameNumber = n
        @tellWidgets("render", @frames[@frameNumber-1], type)


Vamonos.export { Visualizer }
