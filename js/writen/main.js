define(['tweenmax','jquery','scrollmagic','tweenlite','scrollto'],function(TweenMax,$,ScrollMagic,TweenLite,scrollTo){



    /////////sticky Pages\\\\\\\\\\\\\

    var controller = new ScrollMagic.Controller();
    // get all slides
    var slides = document.querySelectorAll("div.panel");

    // create scene for every slide
    for (var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i],
                triggerHook: 0
            })
            .setPin(slides[i])
            // .addIndicators()
            .addTo(controller);
    }








////////////////////////

  $('a[href^="#"]').click(function(event) {
var id = $(this).attr("href");
var offset = 0;
var target = $(id).offset().top - offset;

$('html, body').animate({scrollTop:target}, 800);
event.preventDefault();
});



  
//    var controller = new ScrollMagic.Controller();
//      // define movement of panels
//      var wipeAnimation = new TimelineMax()
//          .fromTo("div.panel.second", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
//          .fromTo("div.panel.third",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
//          .fromTo("div.panel.fourth", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
//          .fromTo("div.panel.fifth", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from bottom
//          // create scene to pin and link animation
//      new ScrollMagic.Scene({
//          triggerElement: "#pinContainer",
//          triggerHook: "onLeave",
//          duration: "300%"
//      })
//      .setPin("#pinContainer")
//      // .setTween(wipeAnimation)
//      .addTo(controller);


























});













