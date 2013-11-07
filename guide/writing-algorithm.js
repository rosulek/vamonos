
$(function() {
    var pc = new Vamonos.Widget.Pseudocode({ container: "pseudocode" });
    // fake a Visualizer object a little bit in order to avoid any errors.
    var fakeVisualizer = {getBreakpoints:function(){return[]}}
    pc.event("setup",fakeVisualizer, {});
    pc.event("displayStart");
});
