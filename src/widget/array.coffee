#_require ../common.coffee
#_require ./widget.coffee

class VArray extends Widget

    constructor: ({container, @defaultArray, @varName, ignoreIndexZero,
                    showChanges, @cssRules, @showIndices}) ->
        @$container = Common.jqueryify(container)
        @$editBox   = null
        @editIndex  = null
        @firstIndex = if ignoreIndexZero then 1 else 0

        # TODO check that this works
        @showChanges = Common.arrayify(showChanges ? "next")

        @$arrayTbl = $("<table>", {class: "array"}).append( 
            $("<tr>", {class: "array-indices"}),
            $("<tr>", {class: "array-cells"}),
            $("<tr>", {class: "array-annotations"})
        )
        @$container.append(@$arrayTbl)


    setup: (@stash) ->
        @theArray = stash[@varName] = []

        @stash[v] = null for [_, v, _] in @cssRules
        @stash[v] = null for v in @showIndices            

    setMode: (mode) ->
        if mode is "edit"
            @theArray.length = 0
            @theArray.push(null) if @firstIndex is 1        

            @$arrayTbl.find("tr").empty()

            if @defaultArray? and @defaultArray.length > @firstIndex
                @appendCellRaw(v) for v in @defaultArray[@firstIndex..]
            else 
                @appendCellRaw(null)

            # reset array indices in the stash
            @stash[v] = null for v in @showIndices            

            @$arrayTbl.on("click", "tr.array-cells td", {}, (e) => @tdClick(e) )
        
        else if mode is "display"
            # shallow copy of @theArray
            @defaultArray = @theArray.slice(0)
            @$arrayTbl.off("click")

    render: (frame, type) ->
        frameArray = frame[@varName]

        @$arrayTbl.find("td").removeClass()

        # equalize the lengths
        while frameArray.length < @theArray.length
            @chopLastCell()
        while frameArray.length > @theArray.length
            @appendCellRaw(null)

        # apply CSS rules
        for [compare, indexName, className] in @cssRules
            index = frame[indexName]
            if !isNaN(parseInt(index)) and @firstIndex <= index < frameArray.length
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
        for i in [@firstIndex...frameArray.length]
            @setCellRaw(i, frameArray[i], showChange)

        indices = {}
        for indexName in @showIndices
            index = frame[indexName]
            if indices[index]?
                indices[index].push(indexName)
            else
                indices[index] = [indexName]

        @$arrayTbl.find("tr.array-annotations td").empty()
        for i in [@firstIndex...frameArray.length]
            @getNthAnnotation(i).html( indices[i].join(", ") ) if indices[i]?



    # TODO this is just the default

    txtToRaw: (txt) ->
        if isNaN(parseInt(txt)) then null else parseInt(txt)

    rawToTxt: (txt) -> txt

    txtValid: (txt) -> @txtToRaw(txt)?



    tdClick: (event) ->
        # ignore clicks on existing inputbox
        return if @$editBox? and event.target is @$editBox.get(0)

        # .index() is 0-based index among siblings
        @startEditing( $(event.target).index() + @firstIndex ) 

    startEditing: (index) ->
        return if index is @editIndex
        if (@editIndex?)
            @endEditing(yes)

        $cell = @getNthCell(index)

        @editIndex = index
        @$editBox = $("<input class='inline-input'>")
        @$editBox.val(@theArray[index])
        @$editBox.width( $cell.width() );           
        @$editBox.on("blur",    (e) => @endEditing(yes) )
        @$editBox.on("keydown", (e) => @editKeyDown(e) ) 

        $cell.html( @$editBox )
        @getNthColumn(index).addClass("editing")
        @$editBox.focus();
        @$editBox.select();


    endEditing: (save) ->
        return unless @editIndex? and @$editBox?
        $cell = @getNthCell(@editIndex)

        last = @editIndex == @theArray.length - 1
        txt  = $cell.children("input").val()
        dead = last and @editIndex != @firstIndex and \
               ( (save and !@txtValid(txt)) or (!save and !@theArray[@editIndex]?) )

        if dead
            @chopLastCell()                        
        else if save and @txtValid(txt)
            @setCellTxt(@editIndex, txt)

        @getNthColumn(@editIndex).removeClass("editing")

        @editIndex = null
        @$editBox = null


        
    editKeyDown: (event) -> switch event.keyCode
        when 13 # enter key
            @endEditing(yes)
            return false

        when 32 # space
            @startEditingNext()
            return false

        when 9 # tab
            if event.shiftKey
                @startEditingPrev()
            else
                @startEditingNext()
            return false

        when 8 # backspace
            if @$editBox.val() is ""
                @startEditingPrev()
                return false

        when 37 # left-arrow
            elt = @$editBox.get(0)
            if elt.selectionStart == 0 and elt.selectionEnd == 0
                @startEditingPrev()
                return false

        when 39 # right-arrow
            txt = @$editBox.val();
            elt = @$editBox.get(0)
            if elt.selectionStart == txt.length and elt.selectionEnd == txt.length
                @startEditingNext()
                return false

        when 27 # escape
            @endEditing(no)
            return false
        

    getNthCell: (n) ->
        # .eq() is 0-indexed
        @$arrayTbl.find("tr.array-cells").children().eq(n - @firstIndex)

    getNthColumn: (n) ->
        # :nth-child() selector is 1-indexed
        i = n - @firstIndex + 1
        @$arrayTbl.find("tr td:nth-child(#{i})")

    getNthAnnotation: (n) ->
        # :nth-child() selector is 1-indexed
        i = n - @firstIndex + 1
        @$arrayTbl.find("tr.array-annotations td:nth-child(#{i})")


    startEditingNext: ->
        if @editIndex is @theArray.length - 1 
            return unless @txtValid( @$editBox.val() )
            @appendCellRaw(null) 

        @startEditing(@editIndex + 1)

    startEditingPrev: ->
        @startEditing(@editIndex - 1) if @editIndex > @firstIndex

    appendCellRaw: (val, showChanges) ->
        newindex = @theArray.length
        @theArray.push(val);
        @$arrayTbl.find("tr.array-indices").append("<td>" + newindex + "</td>")
        @$arrayTbl.find("tr.array-cells").append( $("<td>", {text: @rawToTxt(val)}) )
        @$arrayTbl.find("tr.array-annotations").append("<td></td>")

        @markChanged(newindex) if showChanges

    chopLastCell: ->
        @theArray.length--;
        @$arrayTbl.find("td:last-child").remove()
    
    setCellTxt: (index, txtVal, showChanges) ->
        @setCellRaw(index, @txtToRaw(txtVal), showChanges)

    setCellRaw: (index, rawVal, showChanges) ->
        @theArray[index] = rawVal
        $cell = @getNthCell(index)

        oldhtml = $cell.html()

        # normally, there are no null elements in @theArray. the exception
        # is the first cell, and we still have to "display" it
        newhtml = if @theArray[index]? \
                    then "" + @rawToTxt( @theArray[index] ) \
                    else ""

        $cell.html(newhtml)
        @markChanged(index) if showChanges and oldhtml != newhtml

    markChanged: (index) ->
        $col = @getNthColumn(index)
        $col.addClass("changed")
        
        # "refresh" each DOM element so that CSS transitions can restart
        $col.each( -> $(this).replaceWith( $(this).clone() ) )
        
Common.VamonosExport { Widget: { Array: VArray } }

    
