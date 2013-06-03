class Vamonos.Interfacers.Pseudocode extends Vamonos.Interfacers.Generic

    constructor: ({@container, @userBreakpoints, @breakpoints}) ->
        
    changeMode: (mode_str) ->
        return unless mode_str is 'input'
        @vars[name] = value for name, value of @obj

    setup: (args...) ->
        super(args)
        @vars._breakpoints = @breakpoints


