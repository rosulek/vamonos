class Matrix

    constructor: ({container, @defaultInput, @varName,
                    showChanges, @cssRules, @showIndices, cellFormat}) ->

        @$container     = Vamonos.jqueryify(container)
        @defaultInput  ?= {}
        @rawToTxt       = cellFormat ? Vamonos.rawToTxt
        @showChanges    = Vamonos.arrayify(showChanges ? "next")

        @cssRules      ?= []
        @showIndices   ?= []

        @rows           = []
        @cols           = []
        @$cells         = {}
        @$rows          = {}

        @$table = $("<table>", {class: "matrix"})
        @$container.append(@$table)

    event: (event, options...) -> switch event
        when "setup"
            [@stash, visualizer] = options

            # setup defaults in the stash (in case no edit mode happens)
            @theMatrix = @stash[@varName] = @shallowCopy( @defaultInput )

            # register varName as an input if needed
            @stash._inputVars.push(@varName) unless @displayOnly
            
            # ensure array indices exist in the stash
            for [_,_,i,_] in @cssRules
                @stash[v] ?= null for v in @virtualIndexDependents(i)
            for [_,i] in @showIndices
                @stash[v] ?= null for v in @virtualIndexDependents(i)
           

        when "editStart"
            @$table.hide()

        when "displayStart"
            @matrixReset()

        when "render"
            @render(options...)


    render: (frame, type) ->
        newMatrix = frame[@varName] ? []

        @$table.find("td").removeClass()

        for r in @getRows(newMatrix)
            @matrixEnsureRow(r)

        for c in @getCols(newMatrix)
            @matrixEnsureColumn(c)

        # apply CSS rules
        for [type, compare, indexName, className] in @cssRules
            index = @virtualIndex(frame, indexName)
#            if Vamonos.isNumber(index) and @firstIndex <= index < newArray.length
#
#                if type is "row"
#                    $row = @getNthColumn(index)
#                    $selector = switch compare 
#                        when "<"        then $col.prevAll() 
#                        when "<="       then $col.prevAll().add($col)
#                        when "=", "=="  then $col
#                        when ">"        then $col.nextAll()
#                        when ">="       then $col.nextAll().add($col)
#                    $selector.addClass(className)

        # apply the "changed" class after applying the other css rules
        showChange = type in @showChanges

        for r in @rows
            for c in @cols
                @matrixSetFromRaw(r, c, newMatrix[r][c], showChange)

#        indices = {}
#        for i in @showIndices
#            target = @virtualIndex(frame, i)
#
#            if indices[target]?
#                indices[target].push(i)
#            else
#                indices[target] = [i]

#        @$rowAnnotations.find("td").empty()
#        for i in [@firstIndex...newArray.length]
#            @getNthAnnotation(i).html( indices[i].join(", ") ) if indices[i]?

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

    matrixEnsureRow: (r, showChanges) ->
        return if r in @rows

        @rows.push(r)
        @theMatrix[r] = {}
        @$rows[r] = $newRow = $("<tr>").append( $("<th>", {text: r}) )

        @$cells[r] = {}
        for c in @cols
            @$cells[r][c] = $("<td>")
            $newRow.append( @$cells[r][c] )

        @$table.append( $newRow )

    matrixEnsureColumn: (c, showChanges) ->
        return if c in @cols

        @cols.push(c)
        @$table.find("tr.matrix-label-row").append( $("<th>", {text: c}) )

        for r in @rows
            @$cells[r][c] = $("<td>")
            @$rows[r].append( @$cells[r][c] )


    matrixSetFromRaw: (i , j, rawVal, showChanges) ->
        @theMatrix[i][j] = rawVal
        $cell = @$cells[i][j]

        oldhtml = $cell.html()

        # we must always cast to strings, or else comparison will fail
        # between integer 1 and string "1"

        newhtml = if rawVal? then "" + @rawToTxt(rawVal) else ""

        if oldhtml isnt newhtml
            $cell.html(newhtml)
            @markChanged(i,j) if showChanges

    matrixReset: () ->
        @theMatrix = {}
        @$cells = {}
        @rows = []
        @$rows = {}
        @cols = []

        @$table.empty()
        @$table.append(
            $("<tr>", {class: "matrix-label-row"}).append($("<th>"))
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
        

Vamonos.export { Widget: { Matrix } }
