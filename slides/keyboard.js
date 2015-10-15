$(function(){
    var slideNum = parseInt(window.location.pathname.match("(\\d+)\\.html$")[1],10);
    var totalSlides = 15;
    console.log("slide " + slideNum + "/" + totalSlides);
    $("body").on("keydown",function(e){
        // 78 = "n"
        if (e.keyCode == 78) {
            var next = slideNum + 1;
            if (next <= totalSlides) {
                window.location.replace(next + ".html");
            }
        }
        // 80 = "p"
        else if (e.keyCode == 80) {
            var prev = slideNum - 1;
            if (prev > 0) {
                window.location.replace(prev + ".html");
            }
        }
    });
});
