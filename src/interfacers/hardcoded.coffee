#_require ./interfacer.coffee
#_require ../common.coffee

class Hardcoded extends Interfacer

    constructor: (@obj) ->
        
    changeMode: (mode_str) ->
        return unless mode_str is 'input'
        @vars[name] = value for name, value of @obj

Common.vamonos_export { Interfacers: { Hardcoded } }
