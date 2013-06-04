#_require ./generic.coffee

class Interfacers.Hardcoded extends Interfacers.Generic

    constructor: (@obj) ->
        
    changeMode: (mode_str) ->
        return unless mode_str is 'input'
        @vars[name] = value for name, value of @obj
