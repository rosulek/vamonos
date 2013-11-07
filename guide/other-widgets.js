$(function(){

var myviz = new Vamonos.Visualizer({
    widgets: [

        new Vamonos.Widget.Array({
            container: "array",
            defaultInput: [0, 3, 1, 4, 1, 5, 9],
            ignoreIndexZero: true,
            varName: "A",
            cssRules: [
                [">", "j", "shaded"]
            ],
            showIndices: ["i", "j"],
            showLabel: false,
        }),

        new Vamonos.Widget.VarName({
            container: "a-var",
            varName: "A",
            inputVar: true,
        }),

        new Vamonos.Widget.Pseudocode({
            container: "pseudocode",
            breakpoints: "all",
        }),

        new Vamonos.Widget.Controls("controls")
    ],

    algorithm: function (_) {
        with (this) {
            for (j = 2; j < A.length; _(1), j++) {
_(2);           key = A[j];
_(3);           i = j - 1;
                while (_(4), i > 0 && A[i] > key) {
_(5);               A[i + 1] = A[i];
_(6);               i = i - 1;
                }
_(7);           A[i + 1] = key;
                i = null;
            }
            j = null;
        }
    },

});

var myviz2 = new Vamonos.Visualizer({
    widgets: [

        new Vamonos.Widget.Array({
            container: "array2",
            defaultInput: [0, 3, 1, 4, 1, 5, 9],
            ignoreIndexZero: true,
            varName: "A",
            cssRules: [
                [">", "j", "shaded"]
            ],
            showIndices: ["i", "j"],
            showLabel: false,
        }),

        new Vamonos.Widget.VarName({
            container: "a-var2",
            varName: "A",
            inputVar: true,
        }),

        new Vamonos.Widget.Pseudocode({
            container: "pseudocode2",
            breakpoints: "all",
        }),
        
        new Vamonos.Widget.VarName({
            container: "i-var2",
            varName: "i",
        }),

        new Vamonos.Widget.VarDisplay({
            container: "i2",
            varName: "i",
        }),

        new Vamonos.Widget.Controls("controls2")
    ],

    algorithm: function (_) {
        with (this) {
            for (j = 2; j < A.length; _(1), j++) {
_(2);           key = A[j];
_(3);           i = j - 1;
                while (_(4), i > 0 && A[i] > key) {
_(5);               A[i + 1] = A[i];
_(6);               i = i - 1;
                }
_(7);           A[i + 1] = key;
                i = null;
            }
            j = null;
        }
    },

});

});
