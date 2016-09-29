define(['tweenmax', 'jquery', 'scrollmagic', 'tweenlite', 'scrollto'], function(TweenMax, $, ScrollMagic, TweenLite, scrollTo) {



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

    //   $('a[href^="#"]').click(function(event) {
    // var id = $(this).attr("href");

    // var target = $(id).offset().top ;

    // $('html, body').animate({scrollTop:target}, 800);
    // event.preventDefault();
    // });

    var target_home = $('#home').offset().top,
        target_portfolio = $('#portfolio').offset().top,
        target_about = $('#about').offset().top,
        target_contact = $('#contact').offset().top;





    $("#home-link").click(function() {
        $("html, body").animate({ scrollTop: target_home }, 500);
    });
    $("#port-link").click(function() {
        $("html, body").animate({ scrollTop: target_portfolio }, 500);
    });

    $("#about-link").click(function() {
        $("html, body").animate({ scrollTop: target_about }, 500);
    });
    $("#contact-link").click(function() {
        $("html, body").animate({ scrollTop: target_contact }, 500);
    });





















});
