class ArrayGuts

    @description: "ArrayGuts is where array input and display happen."

    @spec =
        container:
            type:  "jQuery Selector"
            description: "a selector of the dom element the guts should go in"
        varName:
            type: "String"
            description: "the name of variable that this widget represents"
        defaultInput:
            type: "Array"
            defaultValue: []
            description: "the initial value for this array"
        ignoreIndexZero:
            type: "Boolean"
            defaultValue: false
            description: "whether the array should appear to be 1-indexed"
        displayOnly:
            type: "Boolean"
            defaultValue: false
            description: "whether the array is editable"
        showChanges:
            type: ["String", "Array"]
            description: "type of frame shifts to highlight changes at, " +
                        "can be multiple types with an array of strings"
            defaultValue: "next"
        cssRules:
            type: "Array"
            defaultValue: []
            description:
                "an array of triples of the form `\[comparison, " +
                "index-variable-expr, css-class\]` where every index in " +
                "the array that matches the comparason against the given " +
                "index-variable-expr receives the given css class."
            example: """
                cssRules: [
                    ['>', 'k', 'shaded'],
                    ['=', 'k+i', 'green'],
                ]
                """
        showIndices:
            type: "Array"
            description:
                "an array of index-variable-exprs of the form that show the " +
                "text of the index-variable-exprs on the indices they " +
                "correspond to."
            defaultValue: []
        showCellNumber:
            type: "Boolean"
            defaultValue: true
            description: "Whether to show a number above each cell."
        showLabel:
            type: "Boolean"
            defaultValue: false
            description: "whether to show the varName before the array"
        cellFormat:
            type: "Function"
            defaultValue: undefined
            description:
                "A function that takes the raw contents of each entry and " +
                "returns the html to be displayed."
        cellParse:
            type: "Function"
            defaultValue: undefined
            description:
                "A function that parses the text input from an editable cell " +
                "to an internal representation."
        persistent:
            type: "Boolean"
            defaultValue: false
            description:
                "whether to save the result of running the algorithm and to " +
                "use it as the initial value upon returning to edit mode."
        _dummyIndexZero:
            type: "Boolean"
            description: ""
            defaultValue: false
        maxInputLength:
            type: "Number"
            description: "Limit input to a certain number of characters."
            defaultValue: undefined
        firstCellBlank:
            type: "Boolean"
            description: "Leave the first cell blank."
            defaultValue: undefined

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args

        @cellFormat   ?= Vamonos.rawToTxt
        @cellParse    ?= Vamonos.txtToRaw
        @$editBox      = null
        @editIndex     = null
        @lastInput     = @defaultInput
        @firstIndex    = if @ignoreIndexZero then 1 else 0
        @showChanges   = Vamonos.arrayify(@showChanges ? "next")
        @txtValid      = (txt) -> return @cellParse(txt)?

        @$rowIndices     = $("<tr>", {class: "array-indices"})
        @$rowCells       = $("<tr>", {class: "array-cells"})
        @$rowAnnotations = $("<tr>", {class: "array-annotations"})

        @$cells        = []
        @$annotations  = []

        @$rowIndices.hide() unless @showCellNumber

        @container.append( @$rowIndices, @$rowCells, @$rowAnnotations )
        @container.css("margin-left", 26) if @firstCellBlank

        # interestingly, "if blah" and "if blah is true" are different
        @showLabel = @varName + ":" if @showLabel is true

        if typeof @showLabel is "string"
            row.append("<th></th>") for row in [@$rowIndices, @$rowCells, @$rowAnnotations]
            @$rowCells.find("th").html(@showLabel)

        if @ignoreIndexZero and @_dummyIndexZero
            row.append("<th></th>") for row in [@$rowIndices, @$rowCells, @$rowAnnotations]


    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options

            @viz.registerVariable(@varName)

            @viz.setVariable(@varName, @lastInput.slice()) unless @displayOnly # shallow copy
            @viz.allowExport(@varName) unless @displayOnly
            @theArray = []

            # ensure array indices exist in the stash
            for [_,i,_] in @cssRules
                @viz.registerVariable(v) for v in @virtualIndexDependents(i)
            for i in @showIndices
                @viz.registerVariable(v) for v in @virtualIndexDependents(i)

        when "editStart"
            @arrayReset(if @persistent then @viz.getVariable(@varName) else @lastInput)

            if @displayOnly
                row.hide() for row in [@$rowIndices, @$rowCells, @$rowAnnotations]
            else
                @$rowCells.on("click.arrayguts", "td", {}, (e) => @tdClick(e) )
                @$rowCells.prop("title", "Click in any cell to edit this array")

            @adjustHeight()

        when "editStop"
            if not @displayOnly
                @$rowCells.off("click.arrayguts")

                # shallow copy of @theArray
                @lastInput = @theArray.slice()
                @viz.setVariable(@varName, @theArray.slice())

                @stopEditingCell(false)
                @$rowCells.prop("title", "")


        when "displayStart"
            # @lastInput is the "input" that was passed into the algorithm.
            # in display mode, the first "render" event will highlight changes
            # from this baseline. so when display mode starts, the array widget
            # must be in a state where is both displaying @lastInput, and
            # @theArray matches @lastInput
            #
            # there are two reasons to reset to @lastInput here.
            #
            # 1. between edit & display modes, @theArray (in the stash) was
            #    modified by the algorithm
            #
            # 2. there never was an edit mode, in which case the array widget
            #    is not displaying anything

            if @displayOnly
                row.show() for row in [@$rowCells, @$rowAnnotations]

                @$rowIndices.show() if @showCellNumber

                # if this array is display-only, then @theArray (in the stash) would
                # have gotten reset to null. however, it's not so important that
                # @theArray corresponds to what's in the stash, as that's for input only
                @theArray = []

            @arrayReset(@lastInput)

        when "render"
            @render(options...)

        when "externalInput"
            [inp] = options
            return unless inp[@varName]?.constructor.name is 'Array'
            @lastInput = inp[@varName]


    render: (frame, type) ->
        newArray = frame[@varName]

        unless newArray?
            newArray = if @ignoreIndexZero then [Infinity] else []

        row.find("td").removeClass() for row in [@$rowIndices, @$rowCells, @$rowAnnotations]

        # equalize the lengths
        while newArray.length < @theArray.length
            @arrayChopLast()
        while newArray.length > @theArray.length
            @arrayPushRaw(null)

        # apply CSS rules
        for [compare, indexName, className] in @cssRules
            index = @virtualIndex(frame, indexName)
            if Vamonos.isNumber(index) and @firstIndex <= index < newArray.length
                $cell = @$cells[index]
                $selector = switch compare
                    when "<"        then $cell.prevAll()
                    when "<="       then $cell.prevAll().add($cell)
                    when "=", "=="  then $cell
                    when ">"        then $cell.nextAll()
                    when ">="       then $cell.nextAll().add($cell)
                $selector.addClass(className)

        # apply the "changed" class after applying the other css rules
        if newArray.length
            showChange = type in @showChanges
            for i in [@firstIndex...newArray.length]
                @arraySetFromRaw(i, newArray[i], showChange)

        indices = {}
        for i in @showIndices
            # strip namespaces from indices
            if /::/.test(i)
                i = i.split(/::/)[1]
            target = @virtualIndex(frame, i)
            indices[target] ?= []
            indices[target].push(i)

        @$rowAnnotations.find("td").empty()
        for i in [@firstIndex...newArray.length]
            @$annotations[i].html( indices[i].join(", ") ) if indices[i]?

        @adjustHeight()

    # maintains consistent size
    adjustHeight: () ->
        if @container.height() > (@maxHeight ? 0)
            @maxHeight = @container.height()
        else
            # @container.css("min-height",@maxHeight)

    resetHeight: () ->
        @maxHeight = 0
        @container.css("min-height","")

    resetHeight: () ->
        @maxHeight = 0
        @container.css("height","")

    virtualIndex: (frame, indexStr) ->
        return null unless indexStr.match(/^([a-zA-Z_]+|\d+)((-|\+)([a-zA-Z_]+|\d+))*$/g)
        tokens = indexStr.match(/[a-zA-Z_]+|-|\+|\d+/g)
        prevOp = "+"
        total  = 0

        for t in tokens
            if prevOp?  # expecting a varname or constant
                thisTerm = if Vamonos.isNumber(t) then parseInt(t) else frame[t]
                return null unless thisTerm?
                switch prevOp
                    when "+" then total += thisTerm
                    when "-" then total -= thisTerm
                prevOp = null
            else prevOp = t
        return total

    virtualIndexDependents: (indexStr) ->
        return [] unless indexStr.match(
            # "i+j" or "j+1" or "j" or "partition::j"
            /^((?:[\w\d_]+::)?[a-zA-Z_]+|\d+)((-|\+)((?:[\w\d_]+::)?[a-zA-Z_]+|\d+))*$/g
        )
        return indexStr.match(/((?:[\w\d_]+::)?[a-zA-Z_]+)/g)

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

        $cell = @$cells[index]

        @editIndex = index
        @$editBox = $("<input>", { class: "inline-input", maxlength: @maxInputLength })
        @$editBox.val( @cellFormat(@theArray[index]) )
        @$editBox.width( $cell.width() )
        @$editBox.on("blur.arrayguts",    (e) => @stopEditingCell(yes) )
        @$editBox.on("keydown.arrayguts", (e) => @editKeyDown(e) )

        $cell.html( @$editBox )
        $cell.addClass("editing")
        @$editBox.focus()
        @$editBox.select()


    startEditingNextCell: ->
        if @editIndex is @theArray.length - 1
            return unless @txtValid( @$editBox.val() )
            @arrayPushRaw(null)

        @startEditingCell(@editIndex + 1)


    startEditingPrevCell: ->
        @startEditingCell(@editIndex - 1) if @editIndex > @firstIndex


    stopEditingCell: (save) ->
        return unless @editIndex? and @$editBox?
        $cell = @$cells[@editIndex]

        last = @editIndex == @theArray.length - 1
        txt  = $cell.children("input").val()
        dead = last and @editIndex isnt @firstIndex and \
               ( (save and not @txtValid(txt)) or (not save and not @theArray[@editIndex]?) )

        if dead
            @arrayChopLast()
        else if save and @txtValid(txt)
            @arraySetFromTxt(@editIndex, txt)
        else
            @arraySetFromRaw(@editIndex, @theArray[@editIndex])

        $cell.removeClass("editing")

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
            txt = @$editBox.val()
            elt = @$editBox.get(0)
            if elt.selectionStart == txt.length and elt.selectionEnd == txt.length
                @startEditingNextCell()
                return false
        when 27 # escape
            @stopEditingCell(no)
            return false
        else
            return true

    # these are the only "approved" ways to edit the array.
    # they affect what is displayed and also the underlying @theArray

    arrayPushRaw: (val, showChanges) ->
        newindex = @theArray.length
        @theArray.push(val)

        $newCell = $("<td>", {text: @cellFormat(val)})
        $newAnnotation = $("<td>")

        @$cells.push( $newCell )
        @$annotations.push( $newAnnotation )

        @$rowIndices.append("<td>" + newindex + "</td>")
        @$rowCells.append( $newCell )
        @$rowAnnotations.append( $newAnnotation )

        @markChanged(newindex) if showChanges

    arrayChopLast: ->
        @theArray.length--
        @$cells.length--
        @$annotations.length--

        row.find("td:last-child").remove() for row in [@$rowIndices, @$rowCells, @$rowAnnotations]

    arraySetFromTxt: (index, txtVal, showChanges) ->
        @arraySetFromRaw(index, @cellParse(txtVal), showChanges)

    arraySetFromRaw: (index, rawVal, showChanges) ->
        @theArray[index] = rawVal
        $cell = @$cells[index]

        oldhtml = $cell.html()

        # normally, there are no null elements in @theArray. the exception
        # is the first cell, and we still have to "display" it.

        # also, we must always cast to strings, or else comparison will fail
        # between integer 1 and string "1"

        newhtml = if @theArray[index]? then "" + @cellFormat( @theArray[index] ) else ""

        if oldhtml isnt newhtml
            $cell.html(newhtml)
            @markChanged(index) if showChanges


    arrayReset: (newArray) ->
        @theArray.length = 0
        @$cells.length = 0
        @$annotations.length = 0

        for [0...@firstIndex]
            @theArray.push(null)
            @$cells.push(null)
            @$annotations.push(null)

        row.find("td").remove() for row in [@$rowIndices, @$rowCells, @$rowAnnotations]

        if newArray?.length > @firstIndex
            @arrayPushRaw(v) for v in newArray[@firstIndex..]
        else
            # can't display an empty array
            @arrayPushRaw(null)

    markChanged: (index) ->
        $cell = @$cells[index]
        $cell.addClass("changed")

        # "refresh" DOM element so that CSS transitions can restart
        dup = $cell.clone()
        $cell.replaceWith( dup )
        @$cells[index] = dup

@Vamonos.export { Widget: { ArrayGuts } }
