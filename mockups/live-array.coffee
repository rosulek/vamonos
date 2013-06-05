# TODO display array indices

arrayify = (obj) ->
        if obj instanceof Array then obj else [obj]

class LiveArrayMockup

    constructor: ({container, @defaultArray, @varName, ignoreIndexZero, @showChanges}) ->
        @$container = container
        @$editBox   = null
        @editIndex  = null
        @firstIndex = if ignoreIndexZero then 1 else 0

        # TODO arrayify @showChanges

        @showChanges ?= ["play"]

        @$arrayTbl = $("<table>", {class: "array"}).append( 
            $("<tr>", {class: "array-indices"}),
            $("<tr>", {class: "array-cells"}),
            $("<tr>", {class: "array-annotations"})
        )
        @$container.append(@$arrayTbl)


    setup: (stash) ->
        @theArray = stash[@varName] = []

    modeChange: (mode) ->
        if mode is "edit"
            @theArray.length = 0
            @theArray.push(null) if @firstIndex = 1        

            @$arrayTbl.find("tr").empty()

            if @defaultArray? and @defaultArray.length > @firstIndex
                @appendCellRaw(v) for v in @defaultArray[@firstIndex..]
            else 
                @appendCellRaw(null)

            @$arrayTbl.on("click", "tr.array-cells td", {}, (e) => @tdClick(e) )
        
        else if mode is "display"
            # shallow copy of @theArray
            @defaultArray = @theArray.slice(0)
            @$arrayTbl.off("click")

    render: (frame, type) ->
        frameArray = frame[@varName]

        while frameArray.length < @theArray.length
            @chopLastCell()

        showChange = type in @showChanges

        for i,v of frameArray
            if i >= @theArray.length
                @appendCellRaw(v, showChange)
            else
                @setCellRaw(i, v, showChange)


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


        
    editKeyDown: (event) ->
        k = event.keyCode
        shift = event.shiftKey
        
        # enter key
        if k is 13
            @endEditing(yes)
            return false

        # tab, space
        if (!shift and k is 9) or k is 32
            @startEditingNext()
            return false

        # shift-tab
        if shift && k is 9
            @startEditingPrev()
            return false
        
        # backspace
        if k is 8 && @$editBox.val() is ""
            @startEditingPrev()
            return false

        # left-arrow
        if k is 37
            elt = @$editBox.get(0)
            if elt.selectionStart == 0 and elt.selectionEnd == 0
                @startEditingPrev()
                return false

        # right-arrow
        if k is 39
            txt = @$editBox.val();
            elt = @$editBox.get(0)
            if elt.selectionStart == txt.length and elt.selectionEnd == txt.length
                @startEditingNext()
                return false

        # escape
        if k is 27
            @endEditing(no)
            return false
        

    getNthCell: (n) ->
        # .eq() is 0-indexed
        @$arrayTbl.find("tr.array-cells").children().eq(n - @firstIndex)

    getNthColumn: (n) ->
        # :nth-child() selector is 1-indexed
        i = n - @firstIndex + 1
        @$arrayTbl.find("tr td:nth-child(" + i + ")")

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

        # first index might be null, but we still have to "display" it
        newhtml = if @theArray[index]? \
                    then "" + @rawToTxt( @theArray[index] ) \
                    else ""

        $cell.html(newhtml)
        @markChanged(index) if showChanges and oldhtml != newhtml

    markChanged: (index) ->
        @getNthColumn(index).addClass("changed")
        

    
