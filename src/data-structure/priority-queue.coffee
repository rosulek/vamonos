###
#
#   src/data-structures/priority-queue.coffee :: exports Vamonos.PriorityQueue
#
#   Priority Queue data structure.
#
#   TODO: test this datastructure because I don't think it's working right now
#
#   Constructor Arguments:
#
#       unique:         Forces each element of the integer priority queue to be unique.
#
#       sort_property:  The properity of the queue objects that the queue will be sorted by.
#
###

class PriorityQueue

	constructor: ({@unique, @sort_property}) ->
		@q = [];

    ###
    #   PriorityQueue.sort()
    #
    #   Using sort_properity, put the list into a specific order.
    #   TODO: the function name sort may conflict with an existing function
    #
    ###
	sort: ({}) ->
		#TODO: sort or heapify the list as part of the enqueue process
		       #we're probably going to want this when we visualize priority queues

    ###
    #   PriorityQueue.enqueue()
    #
    #   add the new element, e, to the list.
    #
    ###
	enqueue: ({@e}) ->
		return false if (@unique and @contains(e))
		@q.push(e)
		return true

    ###
    #   PriorityQueue.dequeue()
    #
    #   dequeue the next item from the list and return it.
    #
    ###
	dequeue: ({}) ->
		#TODO: if we switch to sorting (or heapify) on enqueue we'll 
		       #just want to pop the head when we dequeue
		return null if (@q.length <= 0)
		min = @q[0]
		for e in @q
			if (parseInt(e[@sort_property], 10) < parseInt(min[@sort_property], 10)) {
                min = e;
            }
        @remove(min)
        return min

    ###
    #   PriorityQueue.remove()
    #
    #   find the first (or only) occurrence of a specific element and remove it from the queue.
    #
    ###
	remove: ({@e}) ->
		i = 0
		for o in @q
			if o is e
				@q.splice(i,1)
			break
			i++

    ###
    #   PriorityQueue.remove()
    #
    #   Remove the item at a specific index from the queue.
    #
    ###
	removeat: ({index}) ->
		@q.splice(index,1)

    ###
    #   PriorityQueue.contains()
    #
    #   Check to see if the queue contains the item, e, already.
    #
    ###
	contains: ({e}) ->
		for o in @q
			return true if o is e
		return false

    ###
    #   PriorityQueue.size()
    #
    #   Returns the length of the queue.
    #
    ###
	size: ({}) ->
		return @q.size

Vamonos.export { PriorityQueue }