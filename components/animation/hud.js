

/*

charts-marker, -label
maps-marker, -label
semiographics-marker, -label
temporals-marker, -label
storytelling-marker, -label

x-mark-group
x-1 ... x-20

*/

var run_animation = function() {

    var svgObject = document.getElementById('masthead').contentDocument;
    console.log(svgObject)
    var charts_marker = svgObject.getElementById('charts-marker');
    console.log(charts_marker)
    gsap.to(charts_marker, { duration: 1, rotation: 45 });


}