$(function() {

    ///////////sticky Pages\\\\\\\\\\\\\

    var controller = new ScrollMagic.Controller();
    // get all slides
    var slides = document.querySelectorAll("section.panel");

    // create scene for every slide
    for (var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i],
                triggerHook: 0
            })
            .setPin(slides[i])
            .addIndicators()
            .addTo(controller);
    }
var jasem = document.getElementById('port-link'),
 abbas = document.getElementById('portfolio');

jasem.onclick = function(e) {
    e.preventDefault();

  TweenLite.to($(window), 1, {scrollTo:abbas});
  };


 




    // TweenLite.to(window, 2, {scrollTo:"#someID"});

    // $("#nav ul li a[href^='#']").on('click', function(e) {

    //    // prevent default anchor click behavior
    //    e.preventDefault();

    //    // animate
    //    $('html, body').animate({
    //        scrollTop: $(this.hash).offset().top
    //      }, 300, function(){
   
    //        // when done, add hash to url
    //        // (default click behaviour)
    //        window.location.hash = this.hash;
    //      });

    // });









    /////////// Scroll TO \\\\\\\\\\\\\


//     $('#home-link').click(function(e) {
//         e.preventDefault();
//         $('body,html,document').stop(true).scrollTo($('#home'), { duration: 1000, interrupt: true });
//     });

//     $('#port-link').click(function(e) {
//         e.preventDefault();
//         $('body,html,document').scrollTo($('#portfolio'), { duration: 1000, interrupt: true });
//     });

//     $('#about-link').click(function(e) {

//         e.preventDefault();

//         $('body,html,document').scrollTo($('#about'), { duration: 1000, interrupt: true });
//     });

//     // $('#contact-link').click(function(e) {

//     //     e.preventDefault();

//     //     $('body,html,document').stop(true).scrollTo($('#contact'), { duration: 1000, interrupt: true });
//     // });


//   $('#contact-link').on('click', function() {
//     $('body,html,document').animate({
//         scrollTop: $("#portfolio").offset().top
//     }, 800);
// });








});
