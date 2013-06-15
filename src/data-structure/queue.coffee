class Queue

    constructor: ->
        @initialize()
        @type = 'queue'

    initialize: () ->
        @guts = []
        return this

    enqueue: (elem) ->
        @guts.push(elem)

    dequeue: () ->
        @guts.pop()

    isEmpty: () ->
        @guts.length == 0

    toString: () ->
        if @isEmpty() 
            "[ ]"
        else
            "[#{(Vamonos.rawToTxt(elem) for elem in @guts).join(", ")}]"


Vamonos.export { DataStructure: { Queue } }
