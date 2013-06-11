#_require ../common.coffee

class VArray

    constructor: ({container, @defaultArray, @varName, ignoreIndexZero,
                    showChanges, @cssRules, @showIndices, _dummyIndexZero, showLabel}) ->
        @$container = Common.jqueryify(container)
        @$editBox   = null
        @editIndex  = null
        @firstIndex = if ignoreIndexZero then 1 else 0

        @showChanges = Common.arrayify(showChanges ? "next")

        @$arrayTbl = $("<table>", {class: "array"}).append( 
            $("<tr>", {class: "array-indices"}),
            $("<tr>", {class: "array-cells"}),
            $("<tr>", {class: "array-annotations"})
        )
        @$container.append(@$arrayTbl)

        @$arrayTbl.find("tr").append("<th></th>") if ignoreIndexZero and _dummyIndexZero

        # interestingly, "if blah" and "if blah is true" are different
        showLabel = @varName + ":" if showLabel is true

        if typeof showLabel is "string"
            @$arrayTbl.find("tr").append('<th></th>')
            @$arrayTbl.find("tr.array-cells th").html(showLabel)

    event: (event, options...) -> switch event
        when "setup"
            [@stash, visualizer] = options

            # setup defaults in the stash (in case no edit mode happens)
            @theArray = @stash[@varName] = @defaultArray.slice() # shallow copy

            # register varName as an input
            @stash._inputVars.push @varName


        when "editStart"
            @arrayReset(@defaultArray)
            @$arrayTbl.on("click", "tr.array-cells td", {}, (e) => @tdClick(e) )
        
        when "editStop"
            # shallow copy of @theArray
            @$arrayTbl.off("click")
            @defaultArray = @theArray.slice(0)

            # reset array indices in the stash
            @stash[v] = null for [_, v, _] in @cssRules
            @stash[v] = null for v in @showIndices            

        when "displayStart"
            # @defaultArray is the "input" that was passed into the algorithm.
            # in display mode, the first "render" event will highlight changes
            # from this baseline. so when display mode starts, the array widget
            # must be in a state where is both displaying @defaultArray, and
            # @theArray matches @defaultArray
            #
            # there are two reasons to reset to @defualtArray here.
            #
            # 1. between edit & display modes, @theArray (in the stash) was
            #    modified by the algorithm
            #
            # 2. there never was an edit mode, in which case the array widget
            #    is not displaying anything

            @arrayReset(@defaultArray)

        when "render"
            @render(options...)


    render: (frame, type) ->
        newArray = frame[@varName]

        @$arrayTbl.find("td").removeClass()

        # equalize the lengths
        while newArray.length < @theArray.length
            @arrayChopLast()
        while newArray.length > @theArray.length
            @arrayPushRaw(null)

        # apply CSS rules
        for [compare, indexName, className] in @cssRules
            index = frame[indexName]
            if Common.isNumber(index) and @firstIndex <= index < newArray.length
                $col = @getNthColumn(index)
                $selector = switch compare 
                    when "<"        then $col.prevAll() 
                    when "<="       then $col.prevAll().add($col)
                    when "=", "=="  then $col
                    when ">"        then $col.nextAll()
                    when ">="       then $col.nextAll().add($col)
                $selector.addClass(className)

        # apply the "changed" class after applying the other css rules
        showChange = type in @showChanges
        for i in [@firstIndex...newArray.length]
            @arraySetFromRaw(i, newArray[i], showChange)

        indices = {}
        for i in @showIndices
            target = @virtualIndex(frame, i)

            if indices[target]?
                indices[target].push(i)
            else
                indices[target] = [i]

        @$arrayTbl.find("tr.array-annotations td").empty()
        for i in [@firstIndex...newArray.length]
            @getNthAnnotation(i).html( indices[i].join(", ") ) if indices[i]?

    virtualIndex: (frame, indexStr) ->
        return null unless indexStr.match(/^([a-zA-Z_]+|\d+)((-|\+)([a-zA-Z_]+|\d+))*$/g)
        tokens = indexStr.match(/[a-zA-Z_]+|-|\+|\d+/g)
        prevOp = "+"
        total  = 0

        for t in tokens
            if prevOp?  # expecting a varname or constant
                thisTerm = if Common.isNumber(t) then parseInt(t) else frame[t]
                return null unless thisTerm?
                switch prevOp
                    when "+" then total += thisTerm
                    when "-" then total -= thisTerm
                prevOp = null
            else prevOp = t
        return total
                    
                


    tdClick: (event) ->
        # ignore clicks on existing inputbox
        return if @$editBox? and event.target is @$editBox.get(0)

        # .index() is 0-based index among siblings
        i = @$arrayTbl.find("tr.array-cells td").index( $(event.target).closest("td") )

        @startEditingCell( i + @firstIndex ) 

    startEditingCell: (index) ->
        return if index is @editIndex
        if (@editIndex?)
            @stopEditingCell(yes)

        $cell = @getNthCell(index)

        @editIndex = index
        @$editBox = $("<input>", {class: "inline-input"})
        @$editBox.val( Common.rawToTxt(@theArray[index]) )
        @$editBox.width( $cell.width() );           
        @$editBox.on("blur",    (e) => @stopEditingCell(yes) )
        @$editBox.on("keydown", (e) => @editKeyDown(e) ) 

        $cell.html( @$editBox )
        @getNthColumn(index).addClass("editing")
        @$editBox.focus()
        @$editBox.select()


    startEditingNextCell: ->
        if @editIndex is @theArray.length - 1 
            return unless Common.txtValid( @$editBox.val() )
            @arrayPushRaw(null) 

        @startEditingCell(@editIndex + 1)


    startEditingPrevCell: ->
        @startEditingCell(@editIndex - 1) if @editIndex > @firstIndex


    stopEditingCell: (save) ->
        return unless @editIndex? and @$editBox?
        $cell = @getNthCell(@editIndex)

        last = @editIndex == @theArray.length - 1
        txt  = $cell.children("input").val()
        dead = last and @editIndex isnt @firstIndex and \
               ( (save and not Common.txtValid(txt)) or (not save and not @theArray[@editIndex]?) )

        if dead
            @arrayChopLast()                        
        else if save and Common.txtValid(txt)
            @arraySetFromTxt(@editIndex, txt)
        else
            @arraySetFromRaw(@editIndex, @theArray[@editIndex])

        @getNthColumn(@editIndex).removeClass("editing")

        @editIndex = null
        @$editBox = null

        
    editKeyDown: (event) -> switch event.keyCode
        when 13 # enter key
            @stopEditingCell(yes)
            return false

        when 32 # space
            @startEditingNextCell()
            return false

        when 9 # tab
            if event.shiftKey
                @startEditingPrevCell()
            else
                @startEditingNextCell()
            return false

        when 8 # backspace
            if @$editBox.val() is ""
                @startEditingPrevCell()
                return false

        when 37 # left-arrow
            elt = @$editBox.get(0)
            if elt.selectionStart == 0 and elt.selectionEnd == 0
                @startEditingPrevCell()
                return false

        when 39 # right-arrow
            txt = @$editBox.val();
            elt = @$editBox.get(0)
            if elt.selectionStart == txt.length and elt.selectionEnd == txt.length
                @startEditingNextCell()
                return false

        when 27 # escape
            @stopEditingCell(no)
            return false
        
    # :nth-of-type() selector is 1-indexed

    getNthCell: (n) ->
        i = n - @firstIndex + 1
        @$arrayTbl.find("tr.array-cells td:nth-of-type(#{i})")

    getNthColumn: (n) ->
        i = n - @firstIndex + 1
        @$arrayTbl.find("tr td:nth-of-type(#{i})")

    getNthAnnotation: (n) ->
        i = n - @firstIndex + 1
        @$arrayTbl.find("tr.array-annotations td:nth-of-type(#{i})")


    # these are the only "approved" ways to edit the array.
    # they affect what is displayed and also the underlying @theArray

    arrayPushRaw: (val, showChanges) ->
        newindex = @theArray.length
        @theArray.push(val);
        @$arrayTbl.find("tr.array-indices").append("<td>" + newindex + "</td>")
        @$arrayTbl.find("tr.array-cells").append( $("<td>", {text: Common.rawToTxt(val)}) )
        @$arrayTbl.find("tr.array-annotations").append("<td></td>")

        @markChanged(newindex) if showChanges

    arrayChopLast: ->
        @theArray.length--;
        @$arrayTbl.find("td:last-child").remove()
    
    arraySetFromTxt: (index, txtVal, showChanges) ->
        @arraySetFromRaw(index, Common.txtToRaw(txtVal), showChanges)

    arraySetFromRaw: (index, rawVal, showChanges) ->
        @theArray[index] = rawVal
        $cell = @getNthCell(index)

        oldhtml = $cell.html()

        # normally, there are no null elements in @theArray. the exception
        # is the first cell, and we still have to "display" it.

        # also, we must always cast to strings, or else comparison will fail
        # between integer 1 and string "1"

        newhtml = if @theArray[index]? then "" + Common.rawToTxt( @theArray[index] ) else ""

        if oldhtml isnt newhtml
            $cell.html(newhtml)
            @markChanged(index) if showChanges


    arrayReset: (newArray) ->
        @theArray.length = 0
        @theArray.push(null) for [0...@firstIndex]
        @$arrayTbl.find("tr td").remove()

        if newArray? and newArray.length > @firstIndex
            @arrayPushRaw(v) for v in newArray[@firstIndex..]
        else 
            # can't display an empty array
            @arrayPushRaw(null)

    markChanged: (index) ->
        $col = @getNthColumn(index)
        $col.addClass("changed")
        
        # "refresh" each DOM element so that CSS transitions can restart
        $col.each( -> $(this).replaceWith( $(this).clone() ) )
        
Common.VamonosExport { Widget: { Array: VArray } }

