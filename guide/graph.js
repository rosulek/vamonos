$(function() {

    var p1 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Pseudocode({
                container: "pseudocode1",
            }),
        ]
    });



    var p2 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Controls("controls2"),

            new Vamonos.Widget.Pseudocode({
                container: "pseudocode2",
            }),

            new Vamonos.Widget.VarName({
                container: "u-var2",
                varName: "u",
            }),

            new Vamonos.Widget.VarDisplay({
                container: "u2",
                varName: "u",
                attributes: ["name","key","pred"]
            }),

            new Vamonos.Widget.VarName({
                container: "v-var2",
                varName: "v",
            }),

            new Vamonos.Widget.VarDisplay({
                container: "v2",
                varName: "v",
                attributes: ["name","key","pred"]
            }),

            new Vamonos.Widget.VarName({
                container: "q-var2",
                varName: "Q",
            }),

            new Vamonos.Widget.Queue({
                container: "queue2",
                varName: "Q",
                showLabel: false,
                displayOnly: true
            }),

            new Vamonos.Widget.VarName({
                container: "g-var2",
                varName: "G",
                inputVar: true,
                watching: true,
            }),

            new Vamonos.Widget.Graph({
                container: "graph2",
                varName: "G",
                inputVars: { r: "p2v3" },
                defaultGraph: new Vamonos.DataStructure.Graph({
                    vertices: [
                        {id: "p2v0", x: 17,  y: 10},
                        {id: "p2v1", x: 98,  y: 10},
                        {id: "p2v2", x: 176, y: 13},
                        {id: "p2v3", x: 15,  y: 78},
                        {id: "p2v4", x: 100, y: 80},
                        {id: "p2v5", x: 182, y: 80},
                        {id: "p2v6", x: 15,  y: 138},
                        {id: "p2v7", x: 100, y: 140},
                        {id: "p2v8", x: 182, y: 140},
                    ],
                    edges: [
                        {source: 'p2v0',target: 'p2v4', w:1},
                        {source: 'p2v1',target: 'p2v2', w:2},
                        {source: 'p2v1',target: 'p2v4', w:5},
                        {source: 'p2v3',target: 'p2v4', w:3},
                        {source: 'p2v3',target: 'p2v6', w:1},
                        {source: 'p2v4',target: 'p2v8', w:10},
                        {source: 'p2v5',target: 'p2v8', w:2},
                        {source: 'p2v6',target: 'p2v7', w:3},
                        {source: 'p2v7',target: 'p2v8', w:2},
                    ]
                }),
            })

        ],

        algorithm: function(_){
            with (this) {
                G.eachVertex(function(vtx){
    _(1);           u = vtx;
    _(2);           u.key = Infinity;
    _(3);           u.pred = null;
                });
    _(4);       r.key = 0;
    _(5);       Q = new Vamonos.DataStructure.Queue({
                    initialArray: G.getVertices(),
                    comparator: function(a,b){
                        return (a.key == b.key ? 0 :
                                a.key  > b.key ? 1 : -1)
                    },
                });
    _(6);       while (_(6), !Q.isEmpty()) {
    _(7);           u = Q.extractMin();
                    G.eachNeighbor(u, function(vtx){
    _(8);               v = vtx;
    _(9);               if (Q.contains(v) && G.edge(u,v).w < v.key) {
    _(10);                   v.pred = u;
    _(11);                  v.key = G.edge(u,v).w;
                        }
                    })

                }
            }
        },
    });

    var p3 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Controls("controls3"),

            new Vamonos.Widget.Pseudocode({
                container: "pseudocode3",
            }),

            new Vamonos.Widget.VarName({
                container: "u-var3",
                varName: "u",
            }),

            new Vamonos.Widget.VarDisplay({
                container: "u3",
                varName: "u",
                attributes: ["name","key","pred"]
            }),

            new Vamonos.Widget.VarName({
                container: "v-var3",
                varName: "v",
            }),

            new Vamonos.Widget.VarDisplay({
                container: "v3",
                varName: "v",
                attributes: ["name","key","pred"]
            }),

            new Vamonos.Widget.VarName({
                container: "q-var3",
                varName: "Q",
            }),

            new Vamonos.Widget.Queue({
                container: "queue3",
                varName: "Q",
                showLabel: false,
                displayOnly: true
            }),

            new Vamonos.Widget.VarName({
                container: "g-var3",
                varName: "G",
                inputVar: true,
                watching: true,
            }),

            new Vamonos.Widget.Graph({
                container: "graph3",
                varName: "G",
                inputVars: { r: "p3v3" },
                vertexLabels: {
                    inner: {
                        edit: function(vtx){ return vtx.name },
                        display: function(vtx){ return vtx.key },
                    },
                    sw: {
                        edit: function(vtx){ return "" },
                        display: function(vtx){ return vtx.name },
                    },
                    ne: ['u','v'],
                    nw: ['r'],
                },
                edgeLabel: "w",
                edgeCssAttributes: {
                    red: "u->v",
                    green: function(edge){
                        return (edge.target.pred ? edge.target.pred.id === edge.source.id : false)
                            || (edge.source.pred ? edge.source.pred.id === edge.target.id : false)
                    },
                },
                defaultGraph: new Vamonos.DataStructure.Graph({
                    vertices: [
                        {id: "p3v0", x: 17,  y: 10},
                        {id: "p3v1", x: 98,  y: 10},
                        {id: "p3v2", x: 176, y: 13},
                        {id: "p3v3", x: 15,  y: 78},
                        {id: "p3v4", x: 100, y: 80},
                        {id: "p3v5", x: 182, y: 80},
                        {id: "p3v6", x: 15,  y: 138},
                        {id: "p3v7", x: 100, y: 140},
                        {id: "p3v8", x: 182, y: 140},
                    ],
                    edges: [
                        {source: 'p3v0',target: 'p3v4', w:1},
                        {source: 'p3v1',target: 'p3v2', w:2},
                        {source: 'p3v1',target: 'p3v4', w:5},
                        {source: 'p3v3',target: 'p3v4', w:3},
                        {source: 'p3v3',target: 'p3v6', w:1},
                        {source: 'p3v4',target: 'p3v8', w:10},
                        {source: 'p3v5',target: 'p3v8', w:2},
                        {source: 'p3v6',target: 'p3v7', w:3},
                        {source: 'p3v7',target: 'p3v8', w:2},
                    ]
                }),
            })
        ],

        algorithm: function(_){
            with (this) {
                G.eachVertex(function(vtx){
    _(1);           u = vtx;
    _(2);           u.key = Infinity;
    _(3);           u.pred = undefined;
                });
    _(4);       r.key = 0;
    _(5);       Q = new Vamonos.DataStructure.Queue({
                    initialArray: G.getVertices(),
                    comparator: function(a,b){
                        return (a.key == b.key ? 0 :
                                a.key  > b.key ? 1 : -1)
                    },
                });
    _(6);       while (_(6), !Q.isEmpty()) {
    _(7);           u = Q.extractMin();
                    G.eachNeighbor(u, function(vtx){
    _(8);               v = vtx;
    _(9);               if (Q.contains(v) && G.edge(u,v).w < v.key) {
    _(10);                  v.pred = u;
    _(11);                  v.key = G.edge(u,v).w;
                        }
                    })

                }
            }
        },
    });

});
