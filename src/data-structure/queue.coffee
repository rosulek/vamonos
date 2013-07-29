class Queue

    constructor: (arg = {}) ->
        @initialize(arg?.initialArray ? [])
        @comparator = arg?.comparator
        @type = 'queue'

    initialize: (elems = []) ->
        @guts = elems[..]
        return this

    enqueue: (elem) ->
        @guts.push(elem)

    dequeue: () ->
        @guts.shift()

    extractMin: () ->
        @resort()
        @dequeue()

    isEmpty: () ->
        @guts.length == 0

    clone: () ->
        new Vamonos.DataStructure.Queue({
            initialArray: Vamonos.clone(@guts)
            comparator: @comparator
        })

    resort: ->
        @guts.sort(@comparator)

    toString: () ->
        if @isEmpty() 
            "[ ]"
        else
            "[#{(Vamonos.rawToTxt(elem) for elem in @guts).join(", ")}]"


Vamonos.export { DataStructure: { Queue } }
