
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

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject   : this
            givenArgs      : args

    event: (event, options...) -> 
        if event is 'checkErrors'
            [viz] = options
            s = ""
            s += c(viz) ? "" for c in @conditions
            console.log s
            return s if s.length

@Vamonos.export { Widget: { Error } }
