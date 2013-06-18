class Stash
    constructor: () ->
        @_breakpoints = {}
        @_inputVars   = []
        @_watchVars   = []
        @_type        = "stash"
        @_callStack   = []
        @_context     = proc: "os", args: ""

    _initialize: () ->
        # Reset context and call stack
        @_context   = proc: "os", args: ""
        @_callStack = []

        # initialize all vars that aren't private or set as input vars
        for v of this
            @[v] = undefined unless v.match(/^_/) or v in @_inputVars

    _clone: () ->
        Vamonos.mixin(new Stash(), this, Vamonos.clone)

    _subroutine: ({procedureName, argNames, localVarNames, procedure, visualizer}) ->
        procedureName ?= "main"
        argNames      ?= []
        localVarNames ?= []
        
        throw "Stash: need routine for _subroutine method"    unless procedure?
        throw "Stash: need visualizer for _subroutine method" unless visualizer?

        @[procedureName] = (args = {}) =>
            # save local vars and args
            save    = {}
            save[k] = @[k] for k in localVarNames.concat(argNames)

            # bind arguments (come in as object {a: 1, b: 2})
            for k, v of args
                throw "#{k} not in args: #{argNames}" unless k in argNames
                @[k] = v

            ## bind arguments (positional)
            #@[k] = v for [n, v] in ([argNames[i], args[i]] for i in [0..args.length-1])

            # push old context and bindings
            @_callStack.push(
                context: @_context
                oldVars: (k for k in @ when k[0] isnt "_")
            )

            # set new context
            @_context = 
                proc: procedureName
                args: ("#{k}=#{Vamonos.rawToTxt(v)}" for k,v of args)

            # call routine, save return value
            ret = procedure(visualizer)

            # restore overwritten local vars and arguments
            @[key] = val for key, val of save

            # pop call stack
            {oldVars, context} = @_callStack.pop()

            # delete bindings that weren't here before
            delete @[key] for key of @ when not key in oldVars

            # restore old context
            @_context = context

            # return the return value of the procedure
            return ret


Vamonos.export { DataStructure: { Stash } }
