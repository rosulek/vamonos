class DisjointSet

    @description = "A disjoint set data structure for use in algorithms and widgets."
    @interface = {}
    @spec = 
        onUpdate:
            type: "Function"
            description: "A function that does something to an element in " +
                "the set when it the disjoint set is modified."
            defaultValue: undefined

    constructor: (args = {}) ->
        @updateFunc = args.onUpdate
        @type = 'DisjointSet'
        @guts = []

    @interface.makeSet = 
        args: [["elem", "an element"]]
        description: "creates a new set with `elem`"
    makeSet: (elem) ->
        return if @find(elem)
        @guts.push([elem])
        @update()

    @interface.find = 
        args: [["elem", "an element"]]
        description: "returns an integer representing the set with `elem` in it"
    find: (elem) ->
        for i in [0..@guts.length - 1]
            continue unless @guts[i]?
            return i if elem in @guts[i]

    @interface.union =
        args: [["e1", "an element"]
               ["e2", "an element"]]
        description: "joins the set containing `e1` with the one containing `e2`"
    union: (e1, e2) ->
        return [] unless e1? and e2?
        e1Set = @find(e1)
        e2Set = @find(e2)
        return [] unless e1Set? and e2Set? and e1Set isnt e2Set
        if @guts[e1Set].length > @guts[e2Set].length
            @guts[e1Set] = @guts[e1Set].concat(@guts[e2Set])
            @guts[e2Set] = []
            newSet = @guts[e1Set]
        else
            @guts[e2Set] = @guts[e2Set].concat(@guts[e1Set])
            @guts[e1Set] = []
            newSet = @guts[e2Set]
        @update()
        return newSet

    @interface.numSets =
        description: "returns the max number of sets that have existed"
    numSets: () ->
        @guts.length

    update: () ->
        return unless @updateFunc?
        for set in @guts
            for elem in set
                @updateFunc(elem)

    @interface.eachSet =
        args: [["f", "a function taking an array of elements and optionally an index"]]
        description: "applies `f` to each set in the DisjointSet, along with its index"
    eachSet: (f) ->
        control = { abort: false }
        for i in [0..@numSets()-1]
            continue unless @guts[i].length
            f(@guts[i],i,control)

    @interface.getSets =
        description: "returns a list of all the sets in the DisjointSet." +
                     "Sets are represented by lists. " +
                     "Note that some lists may be empty."
    getSets: ->
        return @guts

@Vamonos.export { DataStructure: { DisjointSet } }
