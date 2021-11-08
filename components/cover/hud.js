

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

    const svg = document.querySelector("#cover-map")
    
    const charts_label = svg.contentDocument.querySelector("#charts-label-grp")
    const charts_marker = svg.contentDocument.querySelector("#charts-marker")

    const x_1 = svg.contentDocument.querySelector("#x-1-grp")
    const x_2 = svg.contentDocument.querySelector("#x-2-grp")
    const x_3 = svg.contentDocument.querySelector("#x-3-grp")
    const x_4 = svg.contentDocument.querySelector("#x-4-grp")
    const x_5 = svg.contentDocument.querySelector("#x-5-grp")
    const x_6 = svg.contentDocument.querySelector("#x-6-grp")
    
    // gsap.to(x_2, {duration: 2, rotation: 360, transformOrigin:'center'});
    // gsap.to(x_3, {duration: 3, rotation: 360, transformOrigin:'center', scale: 3.5});
    // gsap.to(x_4, {duration: 4, rotation: 360, transformOrigin:'center', scale: 0.5});
    // gsap.to(x_5, {duration: 5, rotation: 360, transformOrigin:'center', scale: 2.5});
    // gsap.to(x_6, {duration: 6, rotation: 360, transformOrigin:'center', scale: 1.5});

    var tl = gsap.timeline();
        tl.to(charts_label, {duration: 4, x: -5})
          .to(charts_label, {duration: 4, x: 7})
          .to(charts_label, {duration: 4, x: -3})
          .to(charts_label, {duration: 4, x: 1})

    var t2 = gsap.timeline();
        t2.to(charts_marker, {duration: 4, rotation: 45, transformOrigin:'center', y: -5})
          .to(charts_marker, {duration: 4, rotation: -90, transformOrigin:'center', y: 5})
          .to(charts_marker, {duration: 4, rotation: 180, transformOrigin:'center', x: 5})
          .to(charts_marker, {duration: 4, rotation: -60, transformOrigin:'center', x: -5})
          .to(x_1, {duration: 1, rotation: 360, transformOrigin:'center'});

}