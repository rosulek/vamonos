$(function(){
    var slideNum = parseInt(window.location.pathname.match("(\\d+)\\.html$")[1],10);
    var totalSlides = 15;
    console.log("slide " + slideNum + "/" + totalSlides);
    $("body").on("keydown",function(e){
        // 39 = right arrow
        if (e.keyCode == 39) {
            var next = slideNum + 1;
            if (next <= totalSlides) {
                window.location.replace(next + ".html");
            }
        }
        // 37 = left arrow
        else if (e.keyCode == 37) {
            var prev = slideNum - 1;
            if (prev > 0) {
                window.location.replace(prev + ".html");
            }
        }
    });
});
