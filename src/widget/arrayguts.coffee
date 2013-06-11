#_require ../common.coffee

class ArrayGuts

    constructor: ({tableContainer, @defaultArray, @varName, ignoreIndexZero, @displayOnly
                    showChanges, @cssRules, @showIndices, _dummyIndexZero, showLabel,
                    cellFormat, cellParse}) ->
        @$editBox   = null
        @editIndex  = null
        @firstIndex = if ignoreIndexZero then 1 else 0
        @defaultArray ?= []

        @rawToTxt   = cellFormat ? Common.rawToTxt
        @txtToRaw   = cellParse  ? Common.txtToRaw

        @showChanges = Common.arrayify(showChanges ? "next")

        @$rowIndices     = $("<tr>", {class: "array-indices"})
        @$rowCells       = $("<tr>", {class: "array-cells"})
        @$rowAnnotations = $("<tr>", {class: "array-annotations"})

        tableContainer.append( @$rowIndices, @$rowCells, @$rowAnnotations )

        # interestingly, "if blah" and "if blah is true" are different
        showLabel = @varName + ":" if showLabel is true

        if typeof showLabel is "string"
            row.append("<th></th>") for row in [@$rowIndices, @$rowCells, @$rowAnnotations]
            @$rowCells.find("th").html(showLabel)

        if ignoreIndexZero and _dummyIndexZero
            row.append("<th></th>") for row in [@$rowIndices, @$rowCells, @$rowAnnotations]


    event: (event, options...) -> switch event
        when "setup"
            [@stash, visualizer] = options

            # setup defaults in the stash (in case no edit mode happens)
            @theArray = @stash[@varName] = @defaultArray.slice() # shallow copy

            # register varName as an input if needed
            @stash._inputVars.push @varName unless @displayOnly
            
            # ensure array indices exist in the stash
            for [_,i,_] in @cssRules
                @stash[v] = null for v in @virtualIndexDependents(i)
            for i in @showIndices
                @stash[v] = null for v in @virtualIndexDependents(i)
           

        when "editStart"
            @arrayReset(@defaultArray)
            if @displayOnly
                row.hide() for row in [@$rowIndices, @$rowCells, @$rowAnnotations]
            else
                @$rowCells.on("click", "td", {}, (e) => @tdClick(e) )
        
        when "editStop"
            if ! @displayOnly
                @$rowCells.off("click")
                # shallow copy of @theArray
                @defaultArray = @theArray.slice(0)          

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

            if @displayOnly
                row.show() for row in [@$rowIndices, @$rowCells, @$rowAnnotations]

                # if this array is display-only, then @theArray (in the stash) would
                # have gotten reset to null. however, it's not so important that
                # @theArray corresponds to what's in the stash, as that's for input only
                @theArray = []

            @arrayReset(@defaultArray)

        when "render"
            @render(options...)


    render: (frame, type) ->
        newArray = frame[@varName] ? []

        row.find("td").removeClass() for row in [@$rowIndices, @$rowCells, @$rowAnnotations]

        # equalize the lengths
        while newArray.length < @theArray.length
            @arrayChopLast()
        while newArray.length > @theArray.length
            @arrayPushRaw(null)

        # apply CSS rules
        for [compare, indexName, className] in @cssRules
            index = @virtualIndex(frame, indexName)
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

        @$rowAnnotations.find("td").empty()
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
                    
    virtualIndexDependents: (indexStr) ->
        return [] unless indexStr.match(/^([a-zA-Z_]+|\d+)((-|\+)([a-zA-Z_]+|\d+))*$/g)
        return indexStr.match(/([a-zA-Z_]+)/g)



    tdClick: (event) ->
        # ignore clicks on existing inputbox
        return if @$editBox? and event.target is @$editBox.get(0)

        # .index() is 0-based index among siblings
        i = @$rowCells.find("td").index( $(event.target).closest("td") )

        @startEditingCell( i + @firstIndex ) 

    startEditingCell: (index) ->
        return if index is @editIndex
        if (@editIndex?)
            @stopEditingCell(yes)

        $cell = @getNthCell(index)

        @editIndex = index
        @$editBox = $("<input>", {class: "inline-input"})
        @$editBox.val( @rawToTxt(@theArray[index]) )
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
        @$rowCells.find("td:nth-of-type(#{i})")

    getNthColumn: (n) ->
        i = n - @firstIndex + 1
        @$rowIndices.add(@$rowCells).add(@$rowAnnotations).find("td:nth-of-type(#{i})")

    getNthAnnotation: (n) ->
        i = n - @firstIndex + 1
        @$rowAnnotations.find("td:nth-of-type(#{i})")


    # these are the only "approved" ways to edit the array.
    # they affect what is displayed and also the underlying @theArray

    arrayPushRaw: (val, showChanges) ->
        newindex = @theArray.length
        @theArray.push(val);
        @$rowIndices.append("<td>" + newindex + "</td>")
        @$rowCells.append( $("<td>", {text: @rawToTxt(val)}) )
        @$rowAnnotations.append("<td></td>")

        @markChanged(newindex) if showChanges

    arrayChopLast: ->
        @theArray.length--;
        row.find("td:last-child").remove() for row in [@$rowIndices, @$rowCells, @$rowAnnotations]
    
    arraySetFromTxt: (index, txtVal, showChanges) ->
        @arraySetFromRaw(index, @txtToRaw(txtVal), showChanges)

    arraySetFromRaw: (index, rawVal, showChanges) ->
        @theArray[index] = rawVal
        $cell = @getNthCell(index)

        oldhtml = $cell.html()

        # normally, there are no null elements in @theArray. the exception
        # is the first cell, and we still have to "display" it.

        # also, we must always cast to strings, or else comparison will fail
        # between integer 1 and string "1"

        newhtml = if @theArray[index]? then "" + @rawToTxt( @theArray[index] ) else ""

        if oldhtml isnt newhtml
            $cell.html(newhtml)
            @markChanged(index) if showChanges


    arrayReset: (newArray) ->
        @theArray.length = 0
        @theArray.push(null) for [0...@firstIndex]
        row.find("td").remove() for row in [@$rowIndices, @$rowCells, @$rowAnnotations]

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
        
Common.VamonosExport { Widget: { ArrayGuts } }

