
var myviz1;

$(function() {

    myviz1 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Hardcoded({ n: 6, watch: "n" }),
            new Vamonos.Widget.Controls({ container: "controls1" }),
            new Vamonos.Widget.CallStack({ container: "callstack1" }),
        ],
        algorithm: function (_) {
            with (this) {
                _(1); if (n <= 1) {
                _(2);    return n;
                _(3); } else {
                _(4);    ret = n * main({n: n-1});
                _(5);    return ret;
                      }
            }
        },
    });

    var myviz2 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Hardcoded({ n: 6, watch: "n" }),
            new Vamonos.Widget.Controls({ container: "controls2" }),
            new Vamonos.Widget.CallStack({
                container: "callstack2",
                procedureNames: {main: "RecursiveFactorial"}
            }),
        ],
        algorithm: function (_) {
            with (this) {
                if (n <= 1) {
                    return n;
                } else {
                    _(0);
                    ret = n * main({n: n-1});
                    _(0);
                    return ret;
                }
            }
        },
    });



    var myviz3 = new Vamonos.Visualizer({
        widgets: [
            new Vamonos.Widget.Hardcoded({ n: 9, watch: "n" }),
            new Vamonos.Widget.Controls({ container: "controls3" }),
            new Vamonos.Widget.CallStack({
                container: "callstack3",
                procedureNames: { main: "even" }
            })
        ],

        autoStart: true,

        algorithm: {
            main: function (_) {
                with (this) {
                    _(1);   if (n == 0) {
                    _(2);       return true;
                            } else {
                    _(4);       var res = odd({n: n-1});
                    _(5);       return res;
                            }
                }
            },
            odd:  function (_) {
                with (this) {
                    _(1);   if (n == 0) {
                    _(2);       return false;
                            } else {
                    _(4);       var res = main({n: n-1});
                    _(5);       return res;
                            }
                }
            }
        }
    });



});
