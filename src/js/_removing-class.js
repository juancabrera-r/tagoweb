
var viewPortWidth = $(window).width();
var width = 736;

/*
if  ( viewPortWidth > 736) {
    $("lu").removeClass("sm"),
        $("lu").removeClass("sm-clean")
}*/

if  ( viewPortWidth < 800) {
    $("lu").addClass("sm"),
        $("lu").addClass("sm-clean")

}