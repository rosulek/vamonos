class Queue

    constructor: (elems = []) ->
        @initialize(elems)
        @_type = 'queue'

    initialize: (elems = []) ->
        @guts = elems
        return this

    enqueue: (elem) ->
        @guts.push(elem)

    dequeue: () ->
        @guts.shift()

    isEmpty: () ->
        @guts.length == 0

    clone: () ->
        new Vamonos.DataStructure.Queue(Vamonos.clone(@guts))

    toString: () ->
        if @isEmpty() 
            "[ ]"
        else
            "[#{(Vamonos.rawToTxt(elem) for elem in @guts).join(", ")}]"


Vamonos.export { DataStructure: { Queue } }
