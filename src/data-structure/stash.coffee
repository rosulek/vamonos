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
        r = new Stash()
        r[k] = Vamonos.clone(v) for k, v of @ when typeof v isnt 'function'
        return r

    _subroutine: ({procedureName, argNames, localVarNames, procedure, visualizer}) ->
        procedureName ?= "main"
        argNames      ?= []
        localVarNames ?= []
        
        throw "Stash: need routine for _subroutine method"    unless procedure?
        throw "Stash: need visualizer for _subroutine method" unless visualizer?

        @[procedureName] = (args = {}) =>
            # save arguments and local vars as simple references
            save    = {}
            save[k] = @[k] for k in localVarNames.concat(argNames)

            # push a clone of the stash onto the call stack
            @_callStack.push(Vamonos.clone(@))

            # bind arguments (come in as object {a: 1, b: 2})
            for k, v of args
                throw "#{k} not in args: #{argNames}" unless k in argNames
                @[k] = v

            if procedureName is "main"
                for k in @_inputVars
                    continue if typeof @[k] is 'function'
                    args[k] = k

            # set new context
            @_context = 
                proc: procedureName
                args: args

            # call routine, save return value
            ret = procedure(visualizer)

            # pop call stack
            oldStack = @_callStack.pop()

            # restore procedure arguments and local variables
            @[key] = val for key, val of save


            # delete bindings that weren't here before
            oldVarNames = (k for k, v of oldStack when k[0] isnt "_")
            delete @[key] for key of @ when not key in oldVarNames

            # restore old context
            @_context = oldStack._context

            # return the return value of the procedure
            return ret


Vamonos.export { DataStructure: { Stash } }
