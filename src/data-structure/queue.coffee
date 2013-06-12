class Queue

    constructor: ->
        @initialize()

    initialize: () ->
        @guts = []
        return this

    enqueue: (elem) ->
        @guts.push(elem)

    dequeue: (elem) ->
        @guts.pop()

    isEmpty: () ->
        @guts.length == 0


Vamonos.export { DataStructure: { Queue } }
