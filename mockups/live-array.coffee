class LiveArrayMockup

    constructor: ({container, @separator, initialarray}) ->
        @$container   = container
        @theArray     = []
        @$inputBox    = null
        @editingIndex = null

        @$arrayTbl = $("<table>", {class: "array"}).append( 
            $("<tr>", {class: "array-indices"}),
            $("<tr>", {class: "array-cells"}),
            $("<tr>", {class: "array-annotations"})
        )
        @$container.append(@$arrayTbl)

        if initialarray.length
            @appendCell(v) for v in initialarray
        else 
            @appendCell(null)

        @$arrayTbl.on("click", "tr.array-cells td", {}, (e) => @tdClick(e) )


    valueEncode: (txt) ->
        if isNaN(parseInt(txt)) then null else parseInt(txt)

    valueDecode: (txt) -> txt

    valueValid: (txt) ->
        @valueEncode(txt)?


    tdClick: (event) ->
        # ignore clicks on existing inputbox
        @startEditing( $(event.target).index() ) unless @$inputBox? and event.target == @$inputBox.get(0)

    startEditing: (index) ->
        return if index is @editingIndex
        if (@editingIndex?)
            @endEditing(yes)

        $tgt = @getNthCell(index)

        @editingIndex = index
        @$inputBox = $("<input class='live-input'>")
        @$inputBox.val(@theArray[index])
        @$inputBox.width( $tgt.width() );           
        @$inputBox.on("blur",    (e) => @endEditing(yes)    )
        @$inputBox.on("keydown", (e) => @inpKeyDown(e) ) 

        $tgt.html( @$inputBox )
        $tgt.addClass("editing")
        @$inputBox.focus();
        @$inputBox.select();


    endEditing: (save) ->
        return unless @editingIndex? and @$inputBox?
        $activechild = @getNthCell(@editingIndex)

        last = @editingIndex == @theArray.length - 1
        txt  = $activechild.find("input").val()
        dead = last and @editingIndex != 0 and \
               ( (save and !@valueValid(txt)) or (!save and !@theArray[@editingIndex]?) )

        if dead
            @chopLastCell()                        
        else if save and @valueValid(txt)
            @theArray[@editingIndex] = @valueEncode(txt)

        $activechild.html( "" + @valueDecode( @theArray[@editingIndex] ) )
        $activechild.removeClass("editing")

        @editingIndex = null
        @$inputBox = null

        
    inpKeyDown: (event) ->
        k = event.keyCode
        shift = event.shiftKey
        
        # enter key
        if k is 13
            @endEditing(yes)
            return false

        # tab, space
        if k is 32 or (!shift and k is 9)
            @setNextActive()
            return false

        # shift-tab
        if shift && k is 9
            @setPrevActive()
            return false
        
        # backspace
        if k is 8 && @$inputBox.val() is ""
            @setPrevActive()
            return false

        # left-arrow
        if k is 37
            elt = @$inputBox.get(0)
            if elt.selectionStart == 0 and elt.selectionEnd == 0
                @setPrevActive()
                return false

        # right-arrow
        if k is 39
            txt = @$inputBox.val();
            elt = @$inputBox.get(0)
            if elt.selectionStart == txt.length and elt.selectionEnd == txt.length
                @setNextActive()
                return false

        # escape
        if k is 27
            @endEditing(no)
            return false
        

    getNthCell: (n) ->
        @$arrayTbl.find(".array-cells").children().eq(n)

    setNextActive: ->
        if @editingIndex is @theArray.length - 1 
            return unless @valueValid( @$inputBox.val() )
            @appendCell(null) 

        @startEditing(@editingIndex + 1)

    setPrevActive: ->
        @startEditing(@editingIndex - 1) if @editingIndex > 0

    appendCell: (val) ->
        newindex = @theArray.length
        @theArray.push(val);
        @$arrayTbl.find(".array-indices").append("<td>" + newindex + "</td>")
        @$arrayTbl.find(".array-cells").append( $("<td>", {text: @valueDecode(val)}) )
        @$arrayTbl.find(".array-annotations").append("<td></td>")

    chopLastCell: ->
        i = @theArray.length
        @theArray.length--;
        @$arrayTbl.find("td:last-child").remove()

    
    
