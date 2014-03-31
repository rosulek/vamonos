class Error

    @description = """
        The `Error` widget serves as a way to create custom error conditions.
        The visualization will not change to DisplayMode unless all conditions
        are met.
        """

    @spec =
        conditions:
            type: "Array"
            description:
                "a list of functions that take a viz object and return " +
                "a string saying what went wrong."
            example: """
                new Vamonos.Widget.Error({
                    conditions: [
                        function(viz){
                            var s = viz.getVariable("s");
                            var t = viz.getVariable("t");
                            if (s.id === t.id) {
                                return "Ford-Fulkerson says: s and t must be different!";
                            }
                        }
                    ]
                })
                """

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject   : this
            givenArgs      : args

    event: (event, options...) ->
        if event is 'setup'
            [viz] = options
        else if event is 'checkErrors'
            [viz] = options
            s = ""
            s += c(viz) ? "" for c in @conditions
            return s if s.length

@Vamonos.export { Widget: { Error } }
