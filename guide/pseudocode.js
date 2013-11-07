
$(function() {
    var myviz1 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Hardcoded({ P: [1,2,3,4], x: 4 }),
            new Vamonos.Widget.Controls({ container: "controls1" }),
            new Vamonos.Widget.Pseudocode({
                container: "pseudocode1",
                breakpoints: [2,3,4]
            })
        ],
        algorithm: function (_) {
            with (this) {
                _(1);   res = 0;
                _(2);   for (i = P.length - 1; i >= 0; _(2), i--) {
                _(3);       res = res * x + P[i];
                        }
                _(4);   return res;
            }
        },
    });


    var myviz3 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Pseudocode({ container: "pseudocode3" })
        ]
    });
    myviz3.trigger("editMode");

    var myviz4 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Pseudocode({ container: "pseudocode4" })
        ]
    });
    myviz4.trigger("editMode");


    var myviz5 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Pseudocode({
                container: "pseudocode5",
                breakpoints: [1,3],
                editableBreakpoints: false
            })
        ]
    });
    myviz5.trigger("editMode");



    // **************************


    var myviz6 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Pseudocode({
                container: "pseudocode-even",
                breakpoints: "all",
                procedureName: "even"
            }),

            new Vamonos.Widget.Pseudocode({
                container: "pseudocode-odd",
                breakpoints: "all",
                procedureName: "odd"
            }),

            new Vamonos.Widget.Controls({
                container: "controls2",
                showWhileSliding: true,
            }),

            new Vamonos.Widget.VarDisplay({
                container: "vardisplay-n",
                varName: "n"
            }),

            new Vamonos.Widget.VarDisplay({
                container: "vardisplay-result",
                varName: "result"
            }),
        ],

        autoStart: true,

        algorithm: {
            main: function (_) {
                with (this) {
                    global.result = even({n: 9}); 
                }
            },
            even: function (_) {
                with (this) {
                    _(1);   if (n == 0) {
                    _(2);       return true;
                            } else {
                    _(4);       return odd({n: n-1});
                            }
                }
            },
            odd:  function (_) {
                with (this) {
                    _(1);   if (n == 0) {
                    _(2);       return false;
                            } else {
                    _(4);       return even({n: n-1});
                            }
                }
            }
        }
    });



});
