class LiveArrayMockup

    constructor: ({container, @separator, initialarray}) ->
        @$container = container
        @value = [null]
        @activeindex = null
        @initArray(initialarray)


    tdclickhandler: (event) ->
        @setactive( $(event.target).index() )

    setactive: (i) ->
        return if i is @activeindex
        if (@activeindex?)
            @deactivate()

        $tgt = @$array.find(".array-cells").children().eq(i)

        @activeindex = i
        @$inputbox = $("<input class='live-input'>")
        @$inputbox.val(@value[i])
        @$inputbox.width( $tgt.width() );            

        $tgt.html( @$inputbox )
        @$inputbox.focus();
        @$inputbox.select();


    deactivate: ->
        return unless @activeindex?
        $activechild = @getnthcell(@activeindex)
        @value[@activeindex] = $activechild.find("input").val();
        $activechild.html(@value[@activeindex])

        if @activeindex == @value.length - 1 and @activeindex > 0 and (!@value[@activeindex]? or @value[@activeindex] is "")
            @chopLastCell()                        

        @activeindex = null

        
    keydownhandler: (event) =>
        # enter key
        if event.keyCode is 13
            @deactivate()
            return false

        # tab, space
        if event.keyCode is 32 or (!event.shiftKey && event.keyCode is 9)
            @setnextactive()
            return false

        # shift-tab
        if event.shiftKey && event.keyCode is 9
            @setprevactive()
            return false
        
        # delete
        if event.keyCode is 8 && @$inputbox.val() is ""
            @setprevactive()
            return false

        

    getnthcell: (n) ->
        @$array.find(".array-cells").children().eq(n)

    setnextactive: ->
        @appendCell() if @activeindex == @value.length - 1
        @setactive(@activeindex + 1)

    setprevactive: ->
        return if @activeindex == 0
        @setactive(@activeindex - 1)

    appendCell: ->
        newindex = @value.length
        @value.length++;
        @$array.find(".array-indices").append("<td>" + newindex + "</td>")
        @$array.find(".array-cells").append("<td></td>")
        @$array.find(".array-annotations").append("<td></td>")

    chopLastCell: ->
        i = @value.length
        @value.length--;
        @$array.find("td:last-child").remove()


    initArray: (arr) ->
        @$array = $("""
                        <table class='array'>
                        <tr class='array-indices'><td>0</td></tr>
                        <tr class='array-cells'><td></td></tr>
                        <tr class='array-annotations'><td></td></tr>
                        </table>
                    """)
        @$container.append(@$array)

        @$array.on("click",   "td",    {}, (e) => @tdclickhandler(e) )
        @$array.on("blur",    "input", {}, (e) => @deactivate(e)    )
        @$array.on("keydown", "input", {}, (e) => @keydownhandler(e) )

    
    
