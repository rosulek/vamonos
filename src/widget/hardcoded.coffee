class Hardcoded
    @description =
        "Hardcoded takes an object containing mappings of variable names to \n" +
        "default values.\n" +
        "\n" +
        ">     new Vamonos.Widget.Hardcoded({ \n" +
        ">         i: 1, \n" +
        ">         A: [3,1,4] \n" +
        ">     }) \n" +
        "\n" +
        "Hardcoded has a couple magical variable names: `breakpoints` and \n" +
        "`watch`. `breakpoints` is used for setting breakpoints without a \n" +
        "Pseudocode widget. It takes a list of linenumbers. \n" +
        "\n" +
        ">     new Vamonos.Widget.Hardcoded({ breakpoints: [3,1,4] }) \n" +
        "\n" +
        "`watch` takes a list of variable names to add to watchVars. \n" +
        "\n" +
        ">     new Vamonos.Widget.Hardcoded({ watch: [\"i\", \"k\"] }) " +
        "\n" +
        "Note: setting `_callStack` as a watch var will break on procedure " +
        "calls and returns"

    # Since Hardcoded has a non-standard constructor, it does not use
    # Vamonos.handleArguments, and does not have a @spec.

    constructor: (@args = {}) ->

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            for name, value of @args
                if name is "breakpoints"
                    @setBreakpoints(value)
                else if name is "watch"
                    @setWatchVars(value)
                else
                    @viz.setVariable(name, value, true)

        when "editStop"
            # put things in stash again
            for name, value of @args when name isnt "breakpoints" and name isnt "watch"
                @viz.setVariable(name, value, true)

    setBreakpoints: (breakpoints) ->
        if breakpoints.constructor.name is 'Array'
            @viz.setBreakpoint(n, "main") for n in breakpoints
        else
            for context, points of breakpoints
                @viz.setBreakpoint(n, context.proc) for n in points

    setWatchVars: (vars) ->
        if vars.constructor.name is 'Array'
            @viz.setWatchVar(v) for v in vars
        else if typeof vars is 'string'
            @viz.setWatchVar(vars)

@Vamonos.export { Widget: { Hardcoded } }
