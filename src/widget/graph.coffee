class Graph

    # ----------- styles and colors and jsplumb stuff -------------- #

    @editColor        = "#92E894"
    @lightEdgeColor   = "#E0E0E0"
    @darkEdgeColor    = "#CFCFCF"
    @deletionColor    = "#FF7D7D"
    @lineWidth        = 4

    normalPaintStyle:
        lineWidth: @lineWidth
        strokeStyle: @lightEdgeColor

    deletionPaintStyle:
        strokeStyle: @deletionColor
        lineWidth: @lineWidth

    additionPaintStyle:
        dashstyle: "1 1"
        strokeStyle: @editColor
        lineWidth: @lineWidth

    selectedPaintStyle:
        lineWidth: @lineWidth
        strokeStyle: @editColor

    hoverPaintStyle:
        lineWidth: @lineWidth
        strokeStyle: @darkEdgeColor

    customStyle: (color) ->
        lineWidth: Graph.lineWidth
        strokeStyle: color

    jsPlumbConnect: (sourceId, targetId) ->
            @jsPlumbInstance.connect
                source: sourceId
                target: targetId 

    # ------------ normal widget methods -------------- #

    constructor: ({
        container
        @varName
        @defaultGraph
        @inputVars

        @vertexLabels
        @vertexCssAttributes
        @edgeLabel
        @colorEdges

        @containerMargin
        @containerResizeLimitX
        @containerResizeLimitY
        @minX
        @minY
    }) ->

        @containerMargin ?= 20
        @containerResizeLimitX ?= window.innerWidth
        @containerResizeLimitY ?= window.innerHeight
        @minX ?= @minY ?= 100

        @inputVars  ?= {}
        @connections = []
        @nodes       = []

        @$outer  = Vamonos.jqueryify(container)
        @$inner  = $("<div>", {class: "graph-inner-container"})
        @$outer.append(@$inner)

        @theGraph = @defaultGraph ? new Vamonos.DataStructure.Graph()
        @inputVars[k] = @theGraph.vertex(v) for k,v of @inputVars

        @jsPlumbInstance = jsPlumb.getInstance 
            Connector: ["Straight"]
            PaintStyle: @normalPaintStyle
            Endpoint: "Blank"
            Anchor: [ "Perimeter", { shape: "Circle" } ]


   
    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            
            @viz.registerVariable(key, true) for key of @inputVars
            for e in @colorEdges when typeof e[0] is 'string'
                @viz.registerVariable(v) for v in e[0].split(/<?->?/)
            @viz.setVariable(@varName, Vamonos.clone(@defaultGraph), true)

        when "render"
            [frame, type] = options
            @updateGraphDisplay(frame)
            @previousFrame = frame

        when "displayStart" then @mode = "display"
        when "displayStop"  then @clearDisplay()
        when "editStart"    
            @editModeOn()
        when "editStop"     
            @editModeOff()
            @updateVizVariables()
            @clearDisplay()

    # ----------------- node, edge modification api ------------------ #

    addVertex: (x, y) ->
        vtx = {id: @nextVertexId(), x, y}
        @theGraph.addVertex(vtx)
        $new = @addNode(vtx)
        @updateGraphDisplay(@frameify(@theGraph))
        @resizeContainer()
        @selectNode($new)
        return $new

    removeVertex: (vid) ->
        @deselect()
        @removeNode(vid)
        @theGraph.removeVertex(vid)
        for k, v of @inputVars when v? and v.id is vid
            @inputVars[k] = undefined 
        @resizeContainer()
        return

    addEdge: (sourceId, targetId) ->
        opts = {}
        if @edgeLabel?.length > 1
            opts[@edgeLabel[0]] = @edgeLabel[1]
        @theGraph.addEdge(sourceId, targetId, opts)
        newConnection = @addConnection(sourceId, targetId)
        @resetEdges()
        @highlightEdge(@getNode(targetId)) if 'vertex' is @selected()
        return newConnection

    removeEdge: (sourceId, targetId) ->
        @deselect() if 'edge' is @selected()
        @theGraph.removeEdge(sourceId, targetId)
        @removeConnection(sourceId, targetId)
        @resetEdges()
        @highlightEdge(@getNode(targetId)) if 'vertex' is @selected()
        return

    # --------------- node methods -------------------- #

    addNode: (vertex) ->
        $v = $("<div>", {class: 'vertex', id: vertex.id})
        $v.hide()
        $v.attr('id', vertex.id)
        @prepareNodeContents(vertex, $v)
        $v.css("left", vertex.x)
        $v.css("top",  vertex.y)
        $v.css("position", "absolute")
        pos = @$inner.position()
        @jsPlumbInstance.draggable $v,
            containment: [
                pos.left
                pos.top
                @containerResizeLimitX
                @containerResizeLimitY
            ]
            drag: (event, ui) =>
                vtx = @theGraph.vertex(vertex.id)
                vtx.x = ui.position.left
                vtx.y = ui.position.top
                @resizeContainer()
        $v.on "dragstart", => Vamonos.moveToTop($v)
        $v.hover(
            ((e) =>
                return unless @mode is 'edit'
                if 'vertex' is @selected() 
                    return if vertex.id is @_$selectedNode.attr("id")
                $v.addClass('hovering')),
            ((e) =>
                $v.removeClass('hovering'))
        )
        @$inner.append($v)
        $v.fadeIn(100)
        @nodes.push($v)
        return $v

    nextVertexId: () ->
        @_customVertexNum ?= 0
        return "custom-vertex-#{@_customVertexNum++}"

    getNode: (vid) ->
        return unless @graphDrawn and vid?
        vid = vid.id unless typeof vid is 'string'
        return unless vid?
        @nodes.filter(($vtx) -> $vtx.attr("id") is vid)[0]

    prepareNodeContents: (vertex, $node) ->
        $contents = $("<div>", class: "vertex-contents")
        for type, style of @vertexLabels
            if type in ["ne","nw","se","sw"]
                $("<div>", { class:"vertex-#{type}-label" }).appendTo($node)
            else if type is "inner"
                if typeof style is "function"
                    $contents.text(Vamonos.rawToTxt(style(vertex)))
                else
                    $contents.text(style)
        $node.append($contents)

    updateNode: ($node, graph, frame) ->
        vertex = graph.vertex($node.attr("id"))
        @updateNodeLabels($node, vertex, frame)
        @updateNodeClasses($node, vertex)

    updateNodeLabels: ($node, vertex, frame = {}) ->
        for type, style of @vertexLabels
            $target = 
                if type is "inner"
                    $node.children("div.vertex-contents")
                else if type in ["ne","nw","se","sw"]
                    $node.children("div.vertex-#{type}-label")
            return unless $target?
            $target.html(
                if typeof style is "function"
                    Vamonos.rawToTxt(style(vertex))
                else if style.length
                    if style.every((o) -> typeof o is 'function')
                        Vamonos.rawToTxt(style[if @mode is 'edit' then 0 else 1](vertex))
                    else 
                        (v for v in style when frame[v]?.id is vertex.id)
                            .join(",")
                else
                    style
            )

    updateNodeClasses: ($node, vertex) ->
        if @mode isnt 'edit' and @vertexChanged(vertex)
            $node.addClass("changed") 
        for attr, val of @vertexCssAttributes
            if val.length
                $node.removeClass("#{attr}-#{kind}") for kind in val
                if vertex[attr] in val
                    $node.addClass("#{attr}-#{vertex[attr]}")
            else
                if vertex[attr] == val
                    $node.addClass("#{attr}")
                else
                    $node.removeClass("#{attr}")

    removeNode: (vid) ->
        $vtx = @getNode(vid)
        out = @theGraph.outgoingEdges(vid)
        ins = @theGraph.incomingEdges(vid)
        for edge in ins.concat(out)
            @removeConnection(edge.source.id, edge.target.id)
        @nodes.splice(@nodes.indexOf($vtx), 1)
        $vtx.fadeOut(100, () -> $vtx.remove())


    # ---------------------- connection methods ------------------ #

    addConnection: (sourceId, targetId) ->
        return if @getConnection(sourceId, targetId)
        edge       = @theGraph.edge(sourceId, targetId)
        connection = @jsPlumbConnect(sourceId, targetId)
        @setOverlays(connection, edge)
        connection.bind "click", (con) => 
            return unless @mode is 'edit'
            @selectConnection(con, edge)
        connection.bind "mouseenter", (con) =>
            return unless @mode is 'edit'
            return if con.id is @_$selectedCon?.id
            con.setPaintStyle(@hoverPaintStyle)
        connection.bind "mouseexit", (con) =>
            return unless @mode is 'edit'
            return if con.id is @_$selectedCon?.id
            con.setPaintStyle(@normalPaintStyle)
        @connections.push(connection)
        return connection

    removeConnection: (sourceId, targetId) ->
        connection = @getConnection(sourceId, targetId)
        return unless connection?
        @jsPlumbInstance.detach(connection) 
        @connections.splice(@connections.indexOf(connection), 1)

    getConnection: (sourceId, targetId) ->
        res = (e for e in @connections when e.sourceId == sourceId and e.targetId == targetId or
            if @theGraph.directed
                false
            else
                e.sourceId == targetId and e.targetId == sourceId)
        res[0]

    updateConnections: (graph, frame) ->
        @resetEdgeStyle($c) for $c in @connections
        for style in @colorEdges
            if typeof style[0] is 'string'
                [source, target] = style[0].split(/->/).map((v)->frame[v])
                continue unless source? and target?
                $con = @getConnection(source.id, target.id)
                continue unless $con?
                $con.setPaintStyle(@customStyle(style[1]))
            else if typeof style[0] is 'function'
                for edge in graph.edges
                    edgeHack = 
                        source: graph.vertex(edge.source)
                        target: graph.vertex(edge.target)
                    for attr, val of edge when not attr in ["source", "target"]
                        edgeHack[attr] = val
                    if style[0](edgeHack)
                        $con = @getConnection(edge.source.id, edge.target.id)
                        $con.setPaintStyle(@customStyle(style[1]))

    setOverlays: (connection, edge) ->
        connection.removeAllOverlays()
        if @theGraph.directed
            connection.addOverlay(["PlainArrow", {location:-4, width:8, length:8}])

        if @edgeLabel?[0]?
            connection.addOverlay([
                "Custom",
                create: () => @createLabel(edge)
            ])

    createLabel: (edge) =>
        val = Vamonos.rawToTxt(edge[@edgeLabel[0]] ? "")
        $label = $("<div class='graph-label'>#{val}</div>")
        return $("<div>").append($label)

    # ------------------ general interaction ---------------------- #

    editModeOn: () ->
        return if @mode is "edit"
        @mode = "edit"
        @updateGraphDisplay(@frameify(@theGraph))
        @$outer.disableSelection()
        # Clicks: 
        #   when no selection: vertex -> select,   non-vertex -> make new vertex
        #   when selection:    vertex -> new edge, non-vertex -> deselect
        @$outer.on "click.vamonos-graph", (e) =>
            $target = $(e.target)
            if not @selected()
                if $target.is("div.vertex-contents")
                    @selectNode($target.parent())
                if $target.is(@$inner)
                    @addVertex(e.offsetX - 12, e.offsetY - 12)
            else
                if $target.is("div.vertex-contents") and 'vertex' is @selected()
                    sourceId = @_$selectedNode.attr("id")
                    targetId = $target.parent().attr("id")
                    if sourceId is targetId
                        @deselect() 
                    else if @theGraph.edge(sourceId, targetId)
                        @removeEdge(sourceId, targetId)
                    else
                        @addEdge(sourceId, targetId)
                else if $target.is("div.vertex-contents") and 'edge' is @selected() 
                    @selectNode($target.parent())
                else if $target.is(@$inner)
                    @deselect()

    editModeOff: () ->
        @mode = undefined
        @$outer.off("click.vamonos-graph")

    # ----------------------- selection --------------------- #

    selected: () ->
        return 'vertex' if @_$selectedNode?
        return 'edge'   if @_$selectedCon?
        return false

    selectNode: ($v) ->
        @deselectConnection() if 'edge' is @selected()
        @deselectNode() if 'vertex' is @selected()
        @_$selectedNode = $v
        @_$selectedNode.addClass("selected")
        @_$selectedNode.removeClass('hovering')
        @openDrawer('vertex')
        # Show dotted and red lines for potential edge additions/deletions
        @_$others = @_$selectedNode.siblings("div.vertex").children("div.vertex-contents")
        @_$others.on "mouseenter.vamonos-graph", (e) => @highlightEdge($(e.target).parent())
        @_$others.on "mouseleave.vamonos-graph", @resetEdges

    selectConnection: (con, edge) ->
        @deselectNode() if 'vertex' is @selected()
        @deselectConnection() if 'edge' is @selected()
        @_$selectedCon = con
        @_$selectedCon.setPaintStyle(@selectedPaintStyle)
        @openDrawer('edge', edge)
            
    deselect: () ->
        @deselectNode()
        @deselectConnection()
        @closeDrawer()
        
    deselectNode: () ->
        return unless @_$selectedNode?
        @jsPlumbInstance.detach(@_possibleEdge) if @_possibleEdge?
        @_$others.off("mouseenter.vamonos-graph mouseleave.vamonos-graph")
        @_$selectedNode.removeClass("selected")
        @_$selectedNode = undefined

    deselectConnection: () ->
        return unless @_$selectedCon?
        @_$selectedCon = undefined
        @resetEdges()

    highlightEdge: ($vtx) =>
        connection = @getConnection(@_$selectedNode.attr("id"), $vtx.attr("id"))
        if connection?
            @_alteredEdge = connection
            connection.setPaintStyle(@deletionPaintStyle)
        else
            @_possibleEdge = @jsPlumbInstance.connect
                source: @_$selectedNode
                target: $vtx
                paintStyle: @additionPaintStyle
            if @theGraph.directed
                @_possibleEdge.addOverlay(["PlainArrow", {location:-4, width:8, length:8}])

    resetEdges: () =>
        if @_possibleEdge?
            @jsPlumbInstance.detach(@_possibleEdge)
            @_possibleEdge = undefined
        if @_alteredEdge?
            @_alteredEdge.setPaintStyle(@normalPaintStyle)
            @_alteredEdge = undefined
        @resetEdgeStyle(c) for c in @connections

    resetEdgeStyle: (c) =>
        return unless c?
        c.setPaintStyle(@normalPaintStyle)

    # ----------------------- drawer stuff ------------------------ #

    openDrawer: (type, elem) ->
        if @$drawer?
            @$drawer.html("")
        else
            @$drawer = $("<div>", { class: "graph-drawer" })
            @$drawer.hide()
            @$inner.append(@$drawer)
        $inputs = []
        switch type 
            when 'vertex'
                elem ?= @theGraph.vertex(@_$selectedNode.attr("id"))
                @$drawer.html("<span class='left'>vertex&nbsp;&nbsp;#{elem.name}</span>")
                $inputs = 
                    (for v of @inputVars
                        $button = $("<button>", {text: "#{v}"})
                        $button.on "click.vamonos-graph", (e) =>
                            @inputVars[v] = elem
                            @updateGraphDisplay(@frameify(@theGraph)))
            when 'edge'
                elem ?= @theGraph.edge(@_$selectedCon.sourceId, @_$selectedCon.sourceId)
                name = 
                    elem.source.name + "&nbsp;" +
                    (if @theGraph.directed then "->" else "-") + "&nbsp;" +
                    elem.target.name
                @$drawer.html("<span class='left'>edge&nbsp;&nbsp;#{name}</span>")

                $inputs = [
                    @createEditableAttribute(elem)
                ] if @edgeLabel?

        $removeButton = $("<button>", {text: "del"})
        $removeButton.on "click.vamonos-graph", (e) =>
            switch type
                when 'vertex' then @removeVertex(elem.id)
                when 'edge'   then @removeEdge(elem.source.id, elem.target.id)

        $inputs.push($removeButton)
        $inputHolder = $("<span>", {class: "right"})
        $inputHolder.append($inputs)
        @$drawer.append($inputHolder)
        unless @$drawer.is(":visible")
            @$drawer.fadeIn("fast")
            @$outer.animate(height: (@$outer.height() + @$drawer.height()), 200)

    closeDrawer: () ->
        return unless @$drawer?
        @$drawer.fadeOut("fast")
        @$outer.animate( height:@$outer.height()-@$drawer.height(), 200, =>
            @resizeContainer()
        )

    createEditableAttribute: (edge) =>
        $attr = $("<span>#{@edgeLabel[0]}&nbsp;=&nbsp;" +
                  "#{Vamonos.rawToTxt(edge[@edgeLabel[0]])}&nbsp;</span>")
        $attr.on "click", => @editAttribute($attr, edge)
        return $attr

    editAttribute: ($outer, edge) =>
        @editModeOff()
        $outer.html($("<span>#{@edgeLabel[0]}&nbsp;=&nbsp;</span>"))
        $editor = $("<input class='editing'>")
        $editor.hide()
        $editor.val(edge[@edgeLabel[0]] ? "")
        $editor.width(40)
        $editor.on "keydown.vamonos-graph", (event) =>
            if event.keyCode in [13, 32, 9, 27]
                @doneEditingAttribute($outer, $editor, edge)
        $editor. on "blur.vamonos-graph", (event) =>
            @doneEditingAttribute($outer, $editor, edge)
        $outer.append($editor)
        $editor.fadeIn "fast"
        $editor.focus()
        $editor.select()

    doneEditingAttribute: ($outer, $editor, edge) ->
        val = Vamonos.txtToRaw($editor.val())
        if val?
            edge[@edgeLabel[0]] = val
        $outer.html(@createEditableAttribute(edge))
        @setOverlays(@_$selectedCon, edge)
        @editModeOn()

    # -------------------- utility functions --------------------- #
    
    vertexChanged: (newv) ->
        return false unless @previousFrame?
        oldv = @previousFrame[@varName].vertices.filter((v) -> v.id is newv.id)[0]
        return @varChanged(newv, oldv)

    varChanged: (newv, oldv) ->
        return false unless oldv? and newv?
        r1 = (oldv[k] == v for k, v of newv)
        r2 = (newv[k] == v for k, v of oldv)
        not r1.concat(r2).every((b) -> b)

    frameify: (obj) ->
        ret = {}
        ret[@varName] = obj
        return ret

    updateVizVariables: () ->
        if @theGraph.vertices.length > 0
            @viz.setVariable(@varName, Vamonos.clone(@theGraph), true)
        else
            alert "GRAPH WIDGET: need vertices please!" 
            throw "GRAPH WIDGET: leaving edit mode without vertices"
        graph = @viz.getVariable(@varName, true)
        for k, v of @inputVars
            unless v?
                alert "GRAPH WIDGET: please set #{k}!"
                throw "GRAPH WIDGET: need a value for #{k}!"
            @viz.setVariable(k, graph.vertex(v.id), true)

    updateGraphDisplay: (frame) ->
        graph = frame[@varName]
        frame[k] = v for k,v of @inputVars if @mode is 'edit' 
        if @graphDrawn
            $e.removeClass("changed") for $e in @nodes.concat(@connections)
        else
            @addNode(v) for v in graph.vertices
            @addConnection(e.source.id, e.target.id) for e in graph.edges
            @graphDrawn = yes
            Vamonos.moveToTop($n) for $n in @nodes
        @updateNode($n, graph, frame) for $n in @nodes
        @updateConnections(graph, frame)
        @previousFrame = Vamonos.clone(@inputVars) if @mode is 'edit'
        @resizeContainer()

    resizeContainer: () ->
        return unless @nodes.length
        max_x = Math.max(@nodes.map((v) => 
            @containerMargin + v.width() + v.position().left)..., @minX)
        max_y = Math.max(@nodes.map((v) => 
            @containerMargin + v.height() + v.position().top)..., @minY)
        if @$drawer? and @$drawer.is(":visible")
            max_y += @$drawer.height()
        @$outer.width(max_x)
        @$outer.height(max_y)
        
    clearDisplay: () ->
        @deselect()
        @$drawer = undefined
        @jsPlumbInstance.reset()
        @$inner.html("")
        @graphDrawn = no
        @connections = []
        @nodes = []
        @previousFrame = undefined

Vamonos.export { Widget: { Graph } }
