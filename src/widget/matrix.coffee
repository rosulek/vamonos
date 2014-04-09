class Matrix

    @description = "Displays a two dimensional array."

    @dependencies = [ "Vamonos.Widget.ArrayGuts" ]

    @spec =
        container:
            type: ["String", "jQuery Selector"]
            description:
                "The id or a jQuery selector of the div in which this widget " +
                "should draw itself."
        varName:
            type: "String"
            description: "the name of variable that this widget represents"
        showChanges:
            type: ["String", "Array"]
            defaultValue: "next"
            description:
                "type of frame shifts to highlight changes at, " +
                "can be multiple types with an array of strings"
        cssRules:
            type: "Array"
            defaultValue: []
            description:
                "an array of quadruples of the form [row/column, " +
                "comparison, index-variable-expr, css-class] " +
                "where every row/column in the matrix that matches the " +
                "comparason against the given index-variable-expr receives " +
                "the given css class."
        showIndices:
            type: "Array"
            defaultValue: []
            description:
                "an array of doubles of the form [row/column, " +
                "index-variable-expr] that show the text of the " +
                "index-variable-expr on the row/column it corresponds to."
        cellFormat:
            type: "Function"
            defaultValue: undefined
            description:
                "A function that takes the raw contents of each entry and " +
                "returns the html to be displayed."

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args

        @cellFormat    ?= Vamonos.rawToTxt
        @$container     = Vamonos.jqueryify(@container)

        @rows           = []
        @cols           = []

        @$cells         = {}
        @$rows          = {}

        @$colAnnotations = {}
        @$rowAnnotations = {}

        @$table = $("<table>", {class: "matrix"})
        @$container.append(@$table)

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options

            @viz.registerVariable(@varName)

            # ensure array indices exist in the stash
            for [_,_,i,_] in @cssRules
                @viz.registerVariable(v) for v in @virtualIndexDependents(i)
            for [_,i] in @showIndices
                @viz.registerVariable(v) for v in @virtualIndexDependents(i)

        when "editStart"
            @$container.hide()

        when "displayStart"
            @matrixReset()
            @$container.show()

        when "render"
            @render(options...)


    render: (frame, type) ->
        newMatrix = frame[@varName] ? {}

        @$table.find("td").removeClass()

        for r in @getRows(newMatrix)
            @matrixEnsureRow(r)

        for c in @getCols(newMatrix)
            @matrixEnsureColumn(c)

        # loop over *copies* of @rows, @cols because the @matrixRemove
        # methods modify them

        newRows = @getRows(newMatrix)
        for r in @rows[..]
            @matrixRemoveRow(r) unless r in newRows

        newCols = @getCols(newMatrix)
        for c in @cols[..]
            @matrixRemoveCol(c) unless c in newCols

        # apply CSS rules
        tmpFrame = {}
        tmpFrame[v] = frame[v] for v of frame

        for [leftIndex, compare, rightIndex, className] in @cssRules
            for r in @rows
                tmpFrame.row = r
                for c in @cols
                    tmpFrame.col = c

                    left = @virtualIndex(tmpFrame, leftIndex)
                    right = @virtualIndex(tmpFrame, rightIndex)

                    @$cells[r][c].addClass(className) if @comparator( compare, left, right )


        # apply the "changed" class after applying the other css rules
        showChange = type in @showChanges

        for r in @rows
            for c in @cols
                @matrixSetFromRaw(r, c, newMatrix[r]?[c], showChange)

        rowIndices = {}
        colIndices = {}

        for [type, i] in @showIndices
            home = if type is "row" then rowIndices else colIndices
            target = "" + @virtualIndex(frame, i)

            if home[target]?
                home[target].push(i)
            else
                home[target] = [i]

        for r in @rows
            @$rowAnnotations[r].html( if rowIndices[r]? then rowIndices[r].join(", ") else "" )
        for c in @cols
            @$colAnnotations[c].html( if colIndices[c]? then colIndices[c].join(", ") else "" )


    virtualIndex: (frame, indexStr) ->
        return null unless indexStr.match(/^([a-zA-Z_]+|\d+)((-|\+)([a-zA-Z_]+|\d+))*$/g)
        tokens = indexStr.match(/[a-zA-Z_]+|-|\+|\d+/g)

        if tokens.length is 1
            return frame[tokens[0]]

        prevOp = "+"
        total  = 0

        for t in tokens
            if prevOp?  # expecting a varname or constant
                thisTerm = if Vamonos.isNumber(t) then parseInt(t) else parseInt(frame[t])
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


    getRows: (matrix) ->
        r = ("" + v for v of matrix)
        return @smartSort(r)

    getCols: (matrix) ->
        c = []
        for r of matrix
            for k of matrix[r]
                c.push("" + k) unless k in c
        return @smartSort(c)

    smartSort: (list) ->
        if list.filter( (z) -> ! Vamonos.isNumber(z) ).length
            return list.sort( (a,b) -> a.localeCompare(b) )
        else
            return list.sort( (a,b) -> parseInt(a) - parseInt(b) )



    # these are the only "approved" ways to edit the matrix

    matrixEnsureRow: (newRowName, showChanges) ->
        newRowName = "" + newRowName
        return if newRowName in @rows

        @rows.push(newRowName)
        @smartSort(@rows)

        newPos = @rows.indexOf(newRowName)

        @theMatrix[newRowName] = {}
        @$rows[newRowName] = $newRow = $("<tr>").append(
            $("<th>", {class: "matrix-row-label", text: newRowName})
        )

        @$cells[newRowName] = {}
        for c in @cols
            $newRow.append( @$cells[newRowName][c] = $("<td>") )

        $newRow.append( @$rowAnnotations[newRowName] = $("<th>", {class: "matrix-row-annotation"}) )
        @$table.find("tr:nth-child(#{ newPos+1 })").after( $newRow )

        $newRow.find("td").addClass('changed') if showChanges

    matrixEnsureColumn: (newColName, showChanges) ->
        newColName = "" + newColName
        return if newColName in @cols

        @cols.push(newColName)
        @smartSort(@cols)

        newPos = @cols.indexOf(newColName)

        @$table.find("tr > :nth-child(#{ newPos + 1 })").each( (i,e) =>
            if i is 0
                $(e).after( $("<th>", {class: "matrix-col-label", text: newColName}) )
            else if i == @rows.length + 1
                $(e).after( @$colAnnotations[newColName] = $("<th>", {class: "matrix-col-annotation"}) )
            else
                $(e).after( @$cells[ @rows[i-1] ][ newColName ] = $("<td>") )
        )

        if showChanges
            for r in @rows
                @$cells[r][newColName].addClass("changed")

    matrixRemoveRow: (rowName) ->
        rowName = "" + rowName
        return unless rowName in @rows
        pos = @rows.indexOf(rowName)

        @rows.splice(pos, 1)

        @$table.find("tr:nth-child(#{ pos + 2 })").remove()

        delete @$rowAnnotations[rowName]
        delete @$cells[rowName]
        delete @theMatrix[rowName]


    matrixRemoveCol: (colName) ->
        colName = "" + colName
        return unless colName in @cols
        pos = @cols.indexOf(colName)

        @cols.splice(pos, 1)

        @$table.find("tr > :nth-child(#{ pos + 2 })").remove()

        delete @$colAnnotations[colName]
        for r in @rows
            delete @$cells[r][colName]
            delete @theMatrix[r][colName]


    matrixSetFromRaw: (i , j, rawVal, showChanges) ->
        @theMatrix[i][j] = rawVal
        $cell = @$cells[i][j]
        return unless $cell?

        oldhtml = $cell.html()

        # we must always cast to strings, or else comparison will fail
        # between integer 1 and string "1"

        newhtml = if rawVal? then "" + @cellFormat(rawVal) else ""

        if oldhtml isnt newhtml
            $cell.html(newhtml)
            @markChanged(i,j) if showChanges

    matrixReset: () ->
        @theMatrix       = {}
        @$cells          = {}
        @rows            = []
        @$rows           = {}
        @cols            = []
        @$rowAnnotations = {}
        @$colAnnotations = {}

        # start with 4 empty corners
        @$table.html(
            "<tr><th></th><th></th></tr><tr><th></th><th></th></tr>"
        )


    markChanged: (i,j) ->
        @$cells[i][j].addClass("changed")
        # "refresh" DOM element so that CSS transitions can restart
        dup = @$cells[i][j].clone()
        @$cells[i][j].replaceWith(dup)
        @$cells[i][j] = dup

    shallowCopy: (matrix) ->
        rows = @getRows(matrix)
        cols = @getCols(matrix)
        res = {}
        for r in rows
            res[r] = {}
            for c in cols
                res[r][c] = matrix[r][c]
        return res


    comparator: (str, a, b) ->
        if Vamonos.isNumber(a) and Vamonos.isNumber(b)
            res = parseInt(a) - parseInt(b)
        else
            res = a.localeCompare(b)

        switch str
            when "<"        then return res < 0
            when "<="       then return res <= 0
            when "=", "=="  then return res == 0
            when ">"        then return res > 0
            when ">="       then return res >= 0


@Vamonos.export { Widget: { Matrix } }
