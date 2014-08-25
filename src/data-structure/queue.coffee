class Queue

    @description = "A queue data structure for use in algorithms and widgets."
    @interface = {}

    @spec =
        initialArray:
            type: "Array"
            defaultValue: []
            description: "The initial value of the queue."
        comparator:
            type: "Function"
            defaultValue: undefined
            description: 
                "A function taking two elements and returning `1`, " +
                "`0`, or `-1`. Used in the `sort` method."

    constructor: (arg = {}) ->
        @initialize(arg?.initialArray ? [])
        @comparator = arg?.comparator
        @type = 'Queue'


    @interface.initialize =
        args: [["elems", "an array of elements. DefaultValue: `[]`"]]
        description: "Sets `elems` to be the content of the queue."
    initialize: (elems = []) ->
        @guts = elems[..]
        return this

    @interface.enqueue = 
        args: [["elem", "an element"]]
        description: "Pushes `elem` onto the queue."
    enqueue: (elem) ->
        @guts.push(elem)

    @interface.dequeue =
        description: "Pops and element from the queue."
    dequeue: () ->
        @guts.shift()

    @interface.extractMin =
        description: 
            "Extracts the minimum element from the queue, according to " +
            "the comparator provided to the constructor, or JavaScript's " +
            "internal comparator." 
    extractMin: () ->
        @sort()
        @dequeue()

    @interface.isEmpty =
        description: "Returns true if the queue is empty."
    isEmpty: () ->
        @guts.length == 0

    clone: () ->
        new Vamonos.DataStructure.Queue({
            initialArray: Vamonos.clone(@guts)
            comparator: @comparator
        })

    @interface.sort =
        description: 
            "Sorts the queue in place according to the comparator " +
            "provided to the constructor, or JavaScript's internal " +
            "comparator."
    sort: ->
        @guts.sort(@comparator)

    @interface.toString =
        description: "Returns a string version of the queue."
    toString: () ->
        if @isEmpty() 
            "[ ]"
        else
            "[#{(Vamonos.rawToTxt(elem) for elem in @guts).join(", ")}]"

    @interface.contains =
        args: [["x", "an element"]]
        description: "Returns true if `x` is in the queue."
    contains: (x) ->
        @guts.some (elem) -> elem is x

@Vamonos.export { DataStructure: { Queue } }
