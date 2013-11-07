
$(function() {
    var myviz1 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Hardcoded({ breakpoints: [1] }),
            new Vamonos.Widget.Controls({ container: "controls1" })
        ],
        algorithm: function (_) {
            for (var i = 0; i < 50; i++) {
                _(1);
            }
        }
    });


    var myviz2 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Hardcoded({ breakpoints: [1] }),

            new Vamonos.Widget.Array({
                container: "array",
                varName: "A",
                showIndices: ["i"],
                defaultInput: [0,0,0,0,0,0,0,0]
            }),

            new Vamonos.Widget.Controls({
                container: "controls2",
                runStopButton: false,
                showWhileSliding: false
            })
        ],
        autoStart: true,

        algorithm: function (_) {
            with (this) {
                for (i = 0; i < A.length; i++) {
                    _(1);
                    A[i] = i+1;
                }
            }
        }
    });


    var myviz4 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Hardcoded({ breakpoints: [1] }),
            new Vamonos.Widget.Controls({ slider: false, container: "controls4" })
        ],
        algorithm: function (_) {
            for (var i = 0; i < 50; i++) {
                _(1);
            }
        }
    });

    var myviz5 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Hardcoded({ breakpoints: [1] }),
            new Vamonos.Widget.Controls({ buttons: false, container: "controls5" })
        ],
        autoStart: true,
        algorithm: function (_) {
            for (var i = 0; i < 50; i++) {
                _(1);
            }
        }
    });


});
