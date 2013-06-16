class Stash
    constructor: () ->
        @_breakpoints = []
        @_inputVars   = []
        @_watchVars   = []
        @_type        = "stash"
        @_callStack   = []

    _initialize: () ->
        @_context = "os"
        for v of this
            @[v] = undefined unless v.match(/^_/) or v in @_inputVars

    _clone: () ->
        Vamonos.mixin(new Stash(), this, Vamonos.clone)

    _subroutine: ({name, argnames, locals, routine, visualizer}) ->
        name     ?= "main"
        argnames ?= []
        locals   ?= []
        
        throw "Stash: need routine for _subroutine method" unless routine?
        throw "Stash: need visualizer for _subroutine method" unless visualizer?

        @[name] = (args...) =>
            # save local vars and args
            save = {}
            save[k] = @[k] for k in locals.concat(argnames)

            # bind arguments (positional only)
            @[k] = v for [n, v] in ([argnames[i], args[i]] for i in [0..args.length-1])

            # push old context and bindings
            @_callStack.push(
                context: @_context ? "os"
                bindings: (k for k in @ when k[0] isnt "_")
            )

            # set new context
            @_context = name

            # call routine
            routine(visualizer)

            # clean up: pop call stack, restore overwritten locals and args
            {bindings, context} = @_callStack.pop()
            @[key] = val for key, val of save
            delete @[key] for key of @ when not key in bindings
            @_context = context


Vamonos.export { DataStructure: { Stash } }
