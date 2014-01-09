class Visualizer

    @description = """
        The central object of the Vamonos system. The Visualizer controls
        the flow of information to and from Widgets, keeps track of
        namespaces and variables, and runs the simulation itself.
        """

    @spec =
        widgets:
            type: "Array"
            description: "a list of widgets for use in the visualization"
            defaultValue: []
        algorithm:
            type: ["Function", "Object"]
            description:
                "as a function, the 'main' procedure. as an object, an " +
                "association of procedure names to functions."
            defaultValue: (->)
        maxFrames:
            type: "Number"
            defaultValue: 250
            description: "the maximum number of snapshots"
        autoStart:
            type: "Boolean"
            defaultValue: false
            description: "whether to skip edit mode at load time"

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args

        @breakpoints    = {}
        @watchVars      = []
        @registeredVars = {}
        @procedures     = {}

        @initializeStash()
        @prepareAlgorithm(@algorithm)

        @setupWidgets =>
            @tellWidgets("setupEnd")
            if @autoStart
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

    getFrame: (num = 0, shallow = false) ->
        r =
            _callStack   : (procName: c._procName, args: c._args for c in @stash.callStack)
            _frameNumber : num
            _prevLine    : @stash.currentScope._prevLine
            _nextLine    : @stash.currentScope._nextLine
            _procName    : @stash.currentScope._procName

        r._callStack[0].activeStackFrame = yes

        procsAlreadySeen = []

        for scope in @stash.callStack
            procName = scope._procName
            continue if procName in procsAlreadySeen
            bare = (procName == @stash.currentScope._procName)
            @cloneScopeToObj(r, procName, scope, bare, shallow)
            procsAlreadySeen.push(procName)

        @cloneScopeToObj(r, "global", @stash.globalScope, true, shallow)
        @cloneScopeToObj(r, "input",  @stash.inputScope,  true, shallow)

        return r

    cloneScopeToObj: (obj, procName, scope, bare = false, shallow) ->
        for k, v of scope
            continue if typeof v is 'function'
            continue if k is 'global'
            continue if /^_/.test k

            cloned                    = if shallow then v else Vamonos.clone(v)
            obj["#{procName}::#{k}"] ?= cloned
            obj[k]                   ?= cloned if bare

    line: (n, relevantScope) ->
        throw "too many frames" if @frameNumber >= @maxFrames
        throw "too many lines"  if ++@numCallsToLine > 10000

        switch n
            when "call"
                @calledProc = relevantScope.procName
            when "ret"
                (@returnStack ?= []).unshift(relevantScope) unless relevantScope.tailCall
                @returnedProc  = relevantScope.procName

        if typeof n is 'number'
            @stash.currentScope._nextLine = n

        reasons = @takeSnapshotReasons(n)
        if reasons
            frame = @getFrame(++@frameNumber)
            frame._snapshotReasons = reasons

            if @returnStack?.length
                frame._returnStack  = @returnStack[..]
                @returnStack.length = 0

            @frames.push(frame)

            # we only have a reason to take a snapshot when n is numeric
            # EXCEPT when we have a ret-then-call situation.. in that case
            # we take snapshot on the 'call' event, and don't want to clobber
            # @calledProc so that the next line(1) also takes snapshot
            if n is "call"
                @calledProc = null
            else
                @returnedProc = @calledProc = undefined

        if typeof n is 'number'
            @stash.currentScope._prevLine = n

        # reset the return stack if just in case we didn't take a snapshot
        # and reset it already. this prevents the call stack from accumulating
        # endlessly.
        @returnStack = [] if n is "call"

    takeSnapshotReasons: (n) ->
        reasons = null
        if n in @getCurrentBreakpoints()
            (reasons ?= {}).breakpoint = n

        if typeof n is 'number'
            changes = @watchVarsChanged()
            (reasons ?= {}).watchVarsChanged = changes if changes?
            (reasons ?= {}).procCalled       = @calledProc if @isWatchVar("_callstack") and @calledProc
            (reasons ?= {}).procReturned     = @returnedProc if @isWatchVar("_callstack") and @returnedProc

        if n is 'call' and @returnedProc and @isWatchVar("_callstack")
            (reasons ?= {}).procReturned = @returnedProc if @returnedProc

        if n is "end" #and @isWatchVar("_callstack")
            (reasons ?= {}).procReturned = "main"

        return reasons

    watchVarsChanged: () ->
        return unless @watchVars.length

        fakeFrame = @getFrame(Infinity, true)

        ret = (for v in @watchVars
                left  = @frames[@frames.length-1]?[v]
                right = fakeFrame[v]
                continue if Vamonos.stringify(left) is Vamonos.stringify(right)
                v)

        return if ret.length then ret else null

    prepareAlgorithm: (algorithm) ->
        if typeof algorithm is 'function'
            algorithm = { "main": algorithm }
        for procName, procedure of algorithm
            @procedures[procName] = @wrapProcedure(procName, procedure)

    wrapProcedure: (procName, procedure) ->
        return (args = {}, locals) =>

            newScope =
                _procName    : procName
                _args        : args

            newScope[name]  = proc for name, proc of @procedures
            newScope[name]  = value for name, value of args
            newScope[name] ?= undefined for name in @registeredVars[procName] ? []
            newScope.global = @stash.globalScope

            # in the rare case that we take a snapshot in a "call" event,
            # (which is when there is a consecutive ret+call), we want
            # the callstack to still reflect the preceding "ret" event
            # so we can display the returned frames. but we don't want
            # nextLine/prevLine to be displayed (because the ret+call are
            # from the same pseudocode line). setting currentScope = newScope
            # is safe and nice because it's a scope that has no next/prevLine

            @stash.currentScope = newScope

            @line("call", { procName: procName })

            if args._tailCall
                @stash.callStack[0] = newScope
            else
                @stash.callStack.unshift(newScope)

            ret = procedure.call(newScope, (n)=>@line(n))

            returnFrame =
                procName    : @stash.currentScope._procName
                args        : @stash.currentScope._args
                returnValue : ret
                tailCall    : args._tailCall

            @line("ret", returnFrame)

            unless args._tailCall
                @stash.callStack.shift()
                @stash.currentScope = @stash.callStack[0]

            return ret

    runAlgorithm: ->
        return if @mode is "display"

        @frames         = []
        @frameNumber    = 0
        @numCallsToLine = 0
        @returnStack    = []

        @initializeStash()
        @tellWidgets("editStop") if @mode is "edit"

        @mode = "running"

        unless @checkErrors() is "ok"
            @editMode()
            return

        mainArgs = {}
        for k, v of @stash.inputScope
            continue unless v?
            continue if /^_/.test k
            mainArgs[k] = v

        try
            throw "no main function" unless typeof @procedures.main is 'function'
            $("body").addClass("processing")
            @line("init")
            @procedures.main(mainArgs)
            @line("end")
            $("body").removeClass("processing")
        catch err
            $("body").removeClass("processing")
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

    setupWidgets: (stuffToDo) =>
        numWidgets = @widgets.length
        counter = 0

        nextF = () =>
            counter += 1
            if counter >= numWidgets
                stuffToDo()

        for widget in @widgets
            widget.event("setup", @, nextF)

    editMode: ->
        return if @mode is "edit"
        @tellWidgets("displayStop") if @mode is "display"
        @mode = "edit"
        @tellWidgets("editStart")

    checkErrors: ->
        errors = @tellWidgets("checkErrors", @).filter (x) -> x?
        if errors.length
            alert(errors.join("\n"))
        else
            return "ok"

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


@Vamonos.export { Visualizer }
