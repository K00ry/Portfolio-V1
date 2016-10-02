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







    /////////////////smoooth Navigation\\\\\\\\\\\\\\\\\\\\\\


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



    ///////////////// OVERLAY \\\\\\\\\\\\\\\\\\\\\\
    // .css("display", "flex");





    ////overlay data JSON

    var data = [{
        "name": "WEB_API",
        "img": "img/work/tablet/1.png",
        "info": "In This Project, using AJAX i used two Public API's(spotify/Flickr) to search for the artist and form a Gallery from the result,user then can choose and album and get latest pictures from Flickr related to the chosen album.",
        "tech": ['HTML', 'SASS', 'JavaScript', 'Jquery', 'AJAX', 'GIT'],
        "git": "https://k00ry.github.io/web_api_v1/"
    }, {
        "name": "WEB_APP",
        "img": "img/work/tablet/2.png",
        "info": "This project was about building a beautiful web application dashboard complete with JavaScript-driven charts and graphs base on a suplied graphic mockup. This was a front end project onlythat required to create the responsive layout in HTML and CSS with added JavaScript functionality. Flexbox and Sass proved to be invaluable tools.",
        "tech": ['HTML', 'SASS', 'JavaScript', 'Jquery', 'GIT'],
        "git": "https://k00ry.github.io/web_app_dashboard_v2/"
    }];



    var click_index;


    $('.work-mobile').click(function() {

        $('#overlay').addClass('open');
        click_index = $(this).index();
        $('#title').html(data[click_index].name);
        $('#over-img').attr("src", data[click_index].img);
        $('#info-text').html(data[click_index].info);
        $('#github-link').attr("href", data[click_index].git);

        var tech_list = '';
        $.each(data[click_index].tech, function(index, item) {
            tech_list += '<li class="tech-title">' + data[click_index].tech[index] + '</li>';

        });
        $('#techs').html(tech_list);





    });


    $('#overlay').click(function() {

        $('#overlay').removeClass('open');
    });







});
