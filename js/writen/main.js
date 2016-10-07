define(['jquery', 'background'], function($, YTPlayer) {




    var portofilo_h1 = $('.port-head');
    var overlay_desktop = $('#overlay-desktop');


    //////// header animation \\\\\\\

    $("#P1").YTPlayer();

    var fadeIn = TweenMax.staggerFrom('.main-meme', 2, { scale: 0.8, opacity: 0, delay: .5 });





    //////// name fade animation \\\\\\\



    var controller = new ScrollMagic.Controller();
    var header = $('#home-wrap');
    var abbas = TweenMax.to(header, 2, { opacity: 0, y: -80 });

    var headerScene = new ScrollMagic.Scene({
            triggerElement: '.port-head',
            triggerHook: 0.7,
            duration: '300'
        })
        .setTween(abbas)
        //.addIndicators()
        .addTo(controller);

    //////// portfolio animation \\\\\\\

    var controller = new ScrollMagic.Controller();
    var portScene = TweenMax.to($('#mobile-portfolio,.carousel'), 4, { opacity: 1, duration: 3 });
    var headerScene = new ScrollMagic.Scene({
            triggerElement: '.port-head',
            triggerHook: 0.2,
            duration: '200',
            offset: 50
        })
        .setTween(portScene)
        //.addIndicators()
        .addTo(controller);


    //////// portfolio H1 size decrease \\\\\\\

    var controller = new ScrollMagic.Controller();
    var smallScene = TweenMax.fromTo($('.port-head'), 4, { css: { fontSize: "5em" } }, { css: { fontSize: "3em" } });
    var smallerScene = new ScrollMagic.Scene({
            triggerElement: '#mobile-portfolio',
            triggerHook: 0.6,
            duration: '360',
            offset: 50

        })
        .setTween(smallScene)
        //.addIndicators({ name: "jasem" })
        .addTo(controller);













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
        target_portfolio = $('#portfolio').offset().top;
    // target_about = $('#about').offset().top,
    // target_contact = $('#contact').offset().top;





    $("#home-link").click(function() {
        $("html, body").animate({ scrollTop: target_home }, 1000);
    });
    $("#port-link").click(function() {
        $("html, body").animate({ scrollTop: target_portfolio }, 1500);
    });

    // $("#about-link").click(function() {
    //     $("html, body").animate({ scrollTop: target_about }, 1000);
    // });
    // $("#contact-link").click(function() {
    //     $("html, body").animate({ scrollTop: target_contact }, 1000);
    // });



    ///////////////// OVERLAY \\\\\\\\\\\\\\\\\\\\\\






    ////overlay data JSON

    var data = [{
        "name": "WEB_API",
        "img": "img/work/responsive/1.png",
        "info": "In This Project, using AJAX i used two Public API's(spotify/Flickr) to search for the artist and form a Gallery from the result,user then can choose and album and get latest pictures from Flickr related to the chosen album.",
        "tech": ['img/work/logos/html.png','img/work/logos/css.png', 'img/work/logos/sass.svg', 'img/work/logos/js.png', 'img/work/logos/Jquery.png', 'img/work/logos/git.svg'],
        "demo": "https://k00ry.github.io/web_api_v1/",
        "github": "https://github.com/K00ry/web_api_v1"
    }, {
        "name": "WEB_APP",
        "img": "img/work/responsive/2.png",
        "info": "This project was about building a beautiful web application dashboard complete with JavaScript-driven charts and graphs base on a suplied graphic mockup. This was a front end project onlythat required to create the responsive layout in HTML and CSS with added JavaScript functionality. Flexbox and Sass proved to be invaluable tools.",
        "tech": ['img/work/logos/html.png','img/work/logos/css.png', 'img/work/logos/sass.svg', 'img/work/logos/js.png', 'img/work/logos/Jquery.png', 'img/work/logos/git.svg'],
        "demo": "https://k00ry.github.io/web_app_dashboard_v2/",
        "github": "https://github.com/K00ry/web_app_dashboard_v2"
    },{
        "name": "Responsive Layout",
        "img": "img/work/responsive/3.png",
        "info": "This project was about building a beautiful web application dashboard complete with JavaScript-driven charts and graphs base on a suplied graphic mockup. This was a front end project onlythat required to create the responsive layout in HTML and CSS with added JavaScript functionality. Flexbox and Sass proved to be invaluable tools.",
        "tech": ['img/work/logos/html.png','img/work/logos/css.png', 'img/work/logos/sass.svg', 'img/work/logos/js.png','img/work/logos/git.svg'],
        "demo": "https://k00ry.github.io/css_sass/",
        "github": "https://github.com/K00ry/css_sass"
    },{
        "name": "Interactive Video-player",
        "img": "img/work/responsive/4.png",
        "info": "This project was about building a beautiful web application dashboard complete with JavaScript-driven charts and graphs base on a suplied graphic mockup. This was a front end project onlythat required to create the responsive layout in HTML and CSS with added JavaScript functionality. Flexbox and Sass proved to be invaluable tools.",
        "tech": ['img/work/logos/html.png', 'img/work/logos/css.png', 'img/work/logos/js.png', 'img/work/logos/Jquery.png', 'img/work/logos/git.svg'],
        "demo": "https://k00ry.github.io/video_player_v2/",
        "github": "https://github.com/K00ry/video_player_v2"
    },{
        "name": "Registration Form",
        "img": "img/work/responsive/5.png",
        "info": "This project was about building a beautiful web application dashboard complete with JavaScript-driven charts and graphs base on a suplied graphic mockup. This was a front end project onlythat required to create the responsive layout in HTML and CSS with added JavaScript functionality. Flexbox and Sass proved to be invaluable tools.",
        "tech": ['img/work/logos/html.png', 'img/work/logos/css.png',  'img/work/logos/git.svg'],
        "demo": "https://k00ry.github.io/online_registration_v2/",
        "github": "https://github.com/K00ry/online_registration_v2"
    }];



    var click_index;


    $('.work-mobile').click(function() {

        $('#overlay').addClass('open');
        click_index = $(this).index();
        $('#title').html(data[click_index].name);
        $('#over-img').attr("src", data[click_index].img);
        $('#info-text').html(data[click_index].info);
        $('#demo').attr("href", data[click_index].demo);

        var tech_list = '';
        $.each(data[click_index].tech, function(index, item) {
            tech_list += '<li class="tech-title"><img src="' + data[click_index].tech[index] + '"></li>';

        });
        $('#techs').html(tech_list);
    });


    $('#overlay').click(function() {

        $('#overlay').removeClass('open');
    });


    $('.work-desktop').click(function() {
            overlay_desktop.hide().fadeOut("900");


        click_index = $(this).index();
        projectSync(click_index);
        overlay_desktop.fadeIn("900");
       
    });

       function projectSync (click_index){
             $('.title-ov').html(data[click_index].name);
        $('.img-ov').attr("src", data[click_index].img);
        $('.info-ov').html(data[click_index].info);
        $('.demo-ov').attr("href", data[click_index].git);
        $('.git-ov').attr("href", data[click_index].git);

        var tech_list = '';
        $.each(data[click_index].tech, function(index, item) {
            tech_list += '<li class="tech-title"><img src="' + data[click_index].tech[index] + '"></li>';
        });
        $('.tech-ov').html(tech_list);
        }




});
