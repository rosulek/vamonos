$(function() {

    var demo1array = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Array({
                varName: "A",
                container: "demo1array",
                defaultInput: [3,1,4,5,9,2,6]
            }),
        ]
    });

    var demo2array = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Array({
                varName: "A",
                container: "demo2array",
                defaultInput: [3,1,4,1,5,9],
                cssRules: [
                    [">", "i", "shaded"]
                ],
                showIndices: ["i"],
            }),

            // We need to tell Vamonos to take a snapshot at _(1).
            // The other way we could do this is by setting a watchVar
            // for i.
            new Vamonos.Widget.Hardcoded({breakpoints: [1]}),

            new Vamonos.Widget.Controls("demo2controls")
        ],

        algorithm: function(_) {
            with (this) {
                for (i = 0; i < 6; i++) {
                    _(1);
                }
            }
        }
    });

    var qs1 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Controls({
                container: "controls1"
            }),
            new Vamonos.Widget.Pseudocode({
                container: "quicksort1",
                procedureName: "quicksort"
            }),
            new Vamonos.Widget.Pseudocode({
                container: "partition1",
                procedureName: "partition"
            }),
            new Vamonos.Widget.VarName({
                container: "callstack-var1",
                varName: "_callstack",
                displayName: "Call Stack",
                watching: true
            }),
            new Vamonos.Widget.CallStack({
                container: "callstack1",
                procedureNames: {
                    quicksort: "Quicksort",
                    partition: "Partition"
                },
                ignoreMain: true
            }),
            new Vamonos.Widget.Hardcoded({
                A: [0,2,8,7,1,3,5,6,4],
            })
        ],
        algorithm: {
            main: function(_){
                with(this){
                    quicksort({ A:A, p:0, r:A.length-1 });
                }
            },
            quicksort: function(_){
                with(this){
                    _(1);   if (p < r) {
                    _(2);       q = partition({ A:A, p:p, r:r });
                    _(3);       quicksort({ A:A, p:p, r:q-1 });
                    _(4);       quicksort({ A:A, p:q+1, r:r });
                            }
                }
            },
            partition: function(_){
                with(this){
                    _(1);   x = A[r];
                    _(2);   i = p-1;
                    _(3);   for (j=p; j<r; _(3), j++) {
                    _(4);       if (A[j] < x) {
                    _(5);           i = i + 1;
                    _(6);           var temp = A[i]; 
                                    A[i] = A[j];
                                    A[j] = temp;
                                }
                            }
                    _(7);   var temp = A[i+1];
                            A[i+1] = A[r];
                            A[r] = temp;
                    _(8);   return(i+1);
                }
            }
        }
    });

    var qs2 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Controls({
                container: "controls2"
            }),
            new Vamonos.Widget.Pseudocode({
                container: "quicksort2",
                procedureName: "quicksort"
            }),
            new Vamonos.Widget.Pseudocode({
                container: "partition2",
                procedureName: "partition"
            }),
            new Vamonos.Widget.VarName({
                container: "callstack-var2",
                varName: "_callstack",
                displayName: "Call Stack",
                watching: true
            }),
            new Vamonos.Widget.CallStack({
                container: "callstack2",
                procedureNames: {
                    quicksort: "Quicksort",
                    partition: "Partition"
                },
                ignoreMain: true
            }),
            new Vamonos.Widget.VarName({
                container: "array-var2",
                varName: "A",
                watching: true
            }),
            new Vamonos.Widget.Array({
                container: "array2",
                varName: "A",
                defaultInput: [0,2,8,7,1,3,5,6,4],
                ignoreIndexZero: true,
            })
        ],
        algorithm: {
            main: function(_){
                with(this){
                    quicksort({ A:A, p:0, r:A.length-1 });
                }
            },
            quicksort: function(_){
                with(this){
                    _(1);   if (p < r) {
                    _(2);       q = partition({ A:A, p:p, r:r });
                    _(3);       quicksort({ A:A, p:p, r:q-1 });
                    _(4);       quicksort({ A:A, p:q+1, r:r });
                            }
                }
            },
            partition: function(_){
                with(this){
                    _(1);   x = A[r];
                    _(2);   i = p-1;
                    _(3);   for (j=p; j<r; _(3), j++) {
                    _(4);       if (A[j] < x) {
                    _(5);           i = i + 1;
                    _(6);           var temp = A[i]; 
                                    A[i] = A[j];
                                    A[j] = temp;
                                }
                            }
                    _(7);   var temp = A[i+1];
                            A[i+1] = A[r];
                            A[r] = temp;
                    _(8);   return(i+1);
                }
            }
        }
    });

    var qs3 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Controls({
                container: "controls3"
            }),
            new Vamonos.Widget.Pseudocode({
                container: "quicksort3",
                procedureName: "quicksort"
            }),
            new Vamonos.Widget.Pseudocode({
                container: "partition3",
                procedureName: "partition",
                breakpoints: "all"
            }),
            new Vamonos.Widget.VarName({
                container: "callstack-var3",
                varName: "_callstack",
                displayName: "Call Stack",
                watching: true
            }),
            new Vamonos.Widget.CallStack({
                container: "callstack3",
                procedureNames: {
                    quicksort: "Quicksort",
                    partition: "Partition"
                },
                ignoreMain: true
            }),
        
            new Vamonos.Widget.VarName({
                container: "array-var3",
                varName: "A",
                watching: true
            }),
            new Vamonos.Widget.Array({
                container: "array3",
                varName: "A",
                defaultInput: [0,2,8,7,1,3,5,6,4],
                ignoreIndexZero: true,
                showIndices: ["p","r","partition::j","partition::i"],
                cssRules: [
                    ['>', 'i', 'gt-i'],
                    ['<', 'p', 'lt-p'],
                    ['<=', 'j', 'leq-j'],
                    ['>','r','gt-r'],
                ],
            }),
        ],
        algorithm: {
            main: function(_){
                with(this){
                    quicksort({ A:A, p:1, r:A.length-1});
                }
            },
            quicksort: function(_){
                with(this){
                    _(1);   if (p < r) {
                    _(2);       q = partition({ A:A, p:p, r:r });
                    _(3);       quicksort({ A:A, p:p, r:q-1 });
                    _(4);       quicksort({ A:A, p:q+1, r:r });
                            }
                }
            },
            partition: function(_){
                with(this){
                    _(1);   i = p-1;
                    _(2);   for (j=p; j<r; _(3), j++) {
                    _(3);       if (A[j] < A[r]) {
                    _(4);           i = i + 1;
                    _(5);           var temp = A[i]; 
                                    A[i] = A[j];
                                    A[j] = temp;
                                }
                            }
                    _(6);   var temp = A[i+1];
                            A[i+1] = A[r];
                            A[r] = temp;
                    _(7);   return(i+1);
                }
            }
        }
    });

});
