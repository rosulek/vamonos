$(function () {
    var myviz = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Array({
                container: "array",
                defaultInput: [6, 3, 1, 4, 1, 5, 9],
                ignoreIndexZero: false,
                varName: "A",
                cssRules: [
                    ["<", "i", "shaded"]
                ],
                showIndices: ["i", "m", "j"],
                showLabel: true
            }),

            new Vamonos.Widget.Pseudocode({
                container: "pseudocode",
                breakpoints: [1,3,6]
            }),

            new Vamonos.Widget.Controls({
                container: "viz-controls",
                showWhileSliding: true
            }),

            new Vamonos.Widget.Graph({
                varName: "G",
                container: "graph",
                defaultGraph: new Vamonos.DataStructure.Graph({
                    vertices: [ 
                        {id: "v0", x: 17,  y: 10},
                        {id: "v1", x: 98,  y: 10},
                        {id: "v2", x: 176, y: 13},
                        {id: "v3", x: 15,  y: 78},
                        {id: "v4", x: 100, y: 80},
                        {id: "v5", x: 182, y: 80},
                        {id: "v6", x: 15,  y: 138},
                        {id: "v7", x: 100, y: 140},
                        {id: "v8", x: 182, y: 140},
                    ],
                    edges: [
                        {source: 'v0',target: 'v4'},
                        {source: 'v1',target: 'v2'},
                        {source: 'v1',target: 'v4'},
                        {source: 'v3',target: 'v4'},
                        {source: 'v3',target: 'v6'},
                        {source: 'v3',target: 'v7'},
                        {source: 'v4',target: 'v8'},
                        {source: 'v4',target: 'v7'},
                        {source: 'v5',target: 'v8'},
                        {source: 'v6',target: 'v7'},
                        {source: 'v7',target: 'v8'},
                    ]
                })
            }),

        ],

        autoStart: true,

        algorithm: function (_) {
            with (this) {
                for (_(1), i = 0; i < A.length-1; _(1), i++) {
                    _(2);
                    m = i;
                    for (_(3), j = i+1; j < A.length; _(3), j++) {
                        _(4);
                        if (A[j] < A[m]) {
                            _(5);
                            m = j
                        }
                    }
                    j = null;
                    _(6);
                    var tmp = A[i];
                    A[i] = A[m];
                    A[m] = tmp;
                    m = null;
                }
                i = null;
            }
        }
    });

    myviz.trigger("jumpFrame", 23);

});
