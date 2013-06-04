#_require ./generic.coffee

class Interfacers.Pseudocode extends Interfacers.Generic

    constructor: ({@container, @userBreakpoints, @breakpoints}) ->
        
    # if user breakpoints is set enable/disable clicking in the gutter
    # to the set breakpoints
    changeMode: (mode_str) ->
        return unless mode_str is 'input'
        @vars[name] = value for name, value of @obj

    setup: (args...) ->
        super(args)
        @vars._breakpoints = @breakpoints


Common.vamonos_export { Interfacers: { Pseudocode } }
