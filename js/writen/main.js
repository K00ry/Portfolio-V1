// define(['tether','jquery', 'bootstrap'], function(Tether,$,bootstrap){
//     $('body').scrollspy({target: ".navbar", offset: 50});

// });

define(['jquery', 'background'], function($, YTPlayer) {






    //////// header animation \\\\\\\


    var fadeIn = TweenMax.staggerFrom('.main-meme', 2, { scale: 0.8, opacity: 0, delay: 0.5 });


    ///////////////////--------------- javascript code for desktop ----------- \\\\\\\\\\\\\\\\\\\\\ 

    if (document.documentElement.clientWidth >= 1024){

        /////////// YOU TUBE PLAYER \\\\\\\\\\\
        $("#P1").YTPlayer();
             ///////sticky Pages\\\\\\\\\\\\\

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



        //////////////////////// Scroll to \\\\\\\\\\\\\\\\
        var target_home = $('#home').offset().top,
            target_portfolio = $('#portfolio').offset().top,
            target_about = $('#about').offset().top;
        // target_contact = $('#contact').offset().top;


        //////////////////////// Scroll to \\\\\\\\\\\\\\\\
        var target_home = $('#home').offset().top,
            target_portfolio = $('#portfolio').offset().top,
            target_about = $('#about').offset().top;



        $("#home-link").click(function() {
            $("html, body").animate({ scrollTop: target_home }, 1500);
        });
        $("#port-link").click(function() {
            $("html, body").animate({ scrollTop: target_portfolio }, 1500);
        });

        $("#about-link").click(function() {
            $("html, body").animate({ scrollTop: target_about }, 1500);
        });
       

        var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: 0.1, duration: "450" } });
        new ScrollMagic.Scene({ triggerElement: "#home" })
            .setClassToggle("#home-li", "active-me")
            //.addIndicators() 
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#portfolio" })
            .setClassToggle("#portfolio-li", "active-me")
            //.addIndicators() 
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#about" })
            .setClassToggle("#about-li", "active-me")
            //.addIndicators() 
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#about" })
            .setClassToggle(".navbar", "active-transparent")
            //.addIndicators() 
            .addTo(controller);


        //////// name fade animation \\\\\\\



        var controller = new ScrollMagic.Controller();
        var header = $('#home-wrap');
        var abbas = TweenMax.to(header, 2, { opacity: 0, y: -75 });

        var headerScene = new ScrollMagic.Scene({
                triggerElement: '.port-head',
                triggerHook: 0.7,
                duration: '300'
            })
            .setTween(abbas)
            //.addIndicators()
            .addTo(controller);





        //////// portfolio H1 size decrease \\\\\\\

        var controller = new ScrollMagic.Controller();
        // var smallScene = TweenMax.fromTo($('.port-head'), 4, { css: { fontSize: "5em" } }, { css: { fontSize: "3em" } });
        var tweeny = new TimelineMax()
            .fromTo($('.port-head'), 4, { css: { fontSize: "7em" } }, { css: { fontSize: "4em" } }, 0)
            .to($('.port-head'), 4, { opacity: 1 }, 0);
        var smallerScene = new ScrollMagic.Scene({
                triggerElement: '#mobile-portfolio',
                triggerHook: 0.6,
                duration: '260',
                offset: 50

            })
            .setTween(tweeny)
            //.addIndicators({ name: "jasem" })
            .addTo(controller);


        // // //////// SKILLS H1 size decrease \\\\\\\

        var controller = new ScrollMagic.Controller();
        var smallScene2 = TweenMax.fromTo($('.port-head-2'), 4, { css: { fontSize: "5.5em" } }, { css: { fontSize: "3.5em" } });

        var smallerScene2 = new ScrollMagic.Scene({
                triggerElement: '.about-main',
                triggerHook: 0.6,
                duration: '360',
                offset: 100

            })
            .setTween(smallScene2)
            // .addIndicators()
            .addTo(controller);





        //////// portfolio animation \\\\\\\

        var controller = new ScrollMagic.Controller();
        var portScene = TweenMax.to($('#mobile-portfolio,#overlay-desktop'), 4, { opacity: 1, duration: 3 });
        var headerScene = new ScrollMagic.Scene({
                triggerElement: '.port-head',
                triggerHook: 0.6,
                duration: '400',
                offset: 50
            })
            .setTween(portScene)
            //.addIndicators()
            .addTo(controller);






        ////// portfolio END animation \\\\\\\

        var controller = new ScrollMagic.Controller();
        var portEndScene = TweenMax.to($('#projects'), 4, { opacity: 0, duration: 3, y: -80 });
        var aboutScene = new ScrollMagic.Scene({
                triggerElement: '.about-main',
                triggerHook: 0.8,
                duration: '200'
            })
            .setTween(portEndScene)
           // .addIndicators()
            .addTo(controller);



///////////////////--------------- javascript code for tablet ----------- \\\\\\\\\\\\\\\\\\\\\ 
    }else if (document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth > 543) {

         $("#P1").YTPlayer();
    

        //////////////////////// Scroll to \\\\\\\\\\\\\\\\
        var target_home = $('#home').offset().top,
            target_portfolio = $('#portfolio').offset().top,
            target_about = $('#about').offset().top;
        // target_contact = $('#contact').offset().top;





        $("#home-link").click(function() {
            $("html, body").animate({ scrollTop: target_home }, 1500);
        });
        $("#port-link").click(function() {
            $("html, body").animate({ scrollTop: target_portfolio }, 1500);
        });

        $("#about-link").click(function() {
            $("html, body").animate({ scrollTop: target_about }, 1500);
        });
        // $("#contact-link").click(function() {
        //     $("html, body").animate({ scrollTop: target_contact }, 1000);
        // });

        //////////////////////// Scroll  add Class \\\\\\\\\\\\\\\\

        var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: 0.1, duration: "450" } });
        new ScrollMagic.Scene({ triggerElement: "#home" })
            .setClassToggle("#home-li", "active-me")
            //.addIndicators() 
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#portfolio" })
            .setClassToggle("#portfolio-li", "active-me")
            //.addIndicators() 
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#about" })
            .setClassToggle("#about-li", "active-me")
            //.addIndicators() 
            .addTo(controller);
        new ScrollMagic.Scene({ triggerElement: "#about" })
            .setClassToggle(".navbar", "active-transparent")
            //.addIndicators() 
            .addTo(controller);





        //////// name fade animation \\\\\\\



        var controller = new ScrollMagic.Controller();
        var header = $('#home-wrap');
        var abbas = TweenMax.to(header, 2, { opacity: 0, y: -75 });

        var headerScene = new ScrollMagic.Scene({
                triggerElement: '.port-head',
                triggerHook: 0.7,
                duration: '300'
            })
            .setTween(abbas)
            //.addIndicators()
            .addTo(controller);





        //////// portfolio H1 size decrease \\\\\\\

        var controller = new ScrollMagic.Controller();
        // var smallScene = TweenMax.fromTo($('.port-head'), 4, { css: { fontSize: "5em" } }, { css: { fontSize: "3em" } });
        var tweeny = new TimelineMax()
            .fromTo($('.port-head'), 4, { css: { fontSize: "5em" } }, { css: { fontSize: "3em" } }, 0)
            .to($('.port-head'), 4, { opacity: 0 }, 0);
        var smallerScene = new ScrollMagic.Scene({
                triggerElement: '#mobile-portfolio',
                triggerHook: 0.6,
                duration: '260',
                offset: 50

            })
            .setTween(tweeny)
            //.addIndicators({ name: "jasem" })
            .addTo(controller);


        // // //////// SKILLS H1 size decrease \\\\\\\

        var controller = new ScrollMagic.Controller();
        var smallScene2 = TweenMax.fromTo($('.port-head-2'), 4, { css: { fontSize: "5.5em" } }, { css: { fontSize: "3.5em" } });

        var smallerScene2 = new ScrollMagic.Scene({
                triggerElement: '.about-main',
                triggerHook: 0.6,
                duration: '360',
                offset: 100

            })
            .setTween(smallScene2)
            // .addIndicators()
            .addTo(controller);





        //////// portfolio animation \\\\\\\

        var controller = new ScrollMagic.Controller();
        var portScene = TweenMax.to($('#mobile-portfolio,#overlay-desktop'), 4, { opacity: 1, duration: 3 });
        var headerScene = new ScrollMagic.Scene({
                triggerElement: '.port-head',
                triggerHook: 0.6,
                duration: '400',
                offset: 50
            })
            .setTween(portScene)
            //.addIndicators()
            .addTo(controller);






        ////// portfolio END animation \\\\\\\

        var controller = new ScrollMagic.Controller();
        var portEndScene = TweenMax.to($('#projects'), 4, { opacity: 0, duration: 3, y: -80 });
        var aboutScene = new ScrollMagic.Scene({
                triggerElement: '.about-main',
                triggerHook: 0.7,
                duration: '200'
            })
            .setTween(portEndScene)
           // .addIndicators()
            .addTo(controller);









        ///////sticky Pages\\\\\\\\\\\\\

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


        /// you tube player

        ///////////////////--------------- javascript code for mobile ----------- \\\\\\\\\\\\\\\\\\\\\ 
    } else {


        var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: 0.1, duration: "450" } });
        var backWhite = TweenMax.to($('.navbar'), 4, { css:{background:'#fff'} });
        new ScrollMagic.Scene({ triggerElement: "#about" })
            .setTween(backWhite)
           // .addIndicators() 
            .addTo(controller);


        //////////////////  SCROLL SPY  & smoooth Navigation  \\\\\\\\\\\\\\\\
        // Cache selectors
        var lastId,
            topMenu = $(".nav"),
            topMenuHeight = topMenu.outerHeight() + 15,
            // All list items
            menuItems = topMenu.find("a"),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function() {
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item; }
            });

        // Bind click handler to menu items
        // so we can get a fancy scroll animation
        menuItems.click(function(e) {
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 1500);
            e.preventDefault();
        });

        // Bind to scroll
        $(window).scroll(function() {
            // Get container scroll position
            var fromTop = $(this).scrollTop() + topMenuHeight;

            // Get id of current scroll item
            var cur = scrollItems.map(function() {
                if ($(this).offset().top < fromTop)
                    return this;
            });
            // Get the id of the current element
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";

            if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                menuItems
                    .parent().removeClass("active-me")
                    .end().filter("[href='#" + id + "']").parent().addClass("active-me");
            }
        });





        ////////////////////////////////////////////////   ////////////////////////////////////////////////







        ////////////////////////////////////////////////main head disappear\\\\
        var controller = new ScrollMagic.Controller();
        var header = $('#home-wrap');
        var abbas = TweenMax.to(header, 2, { opacity: 0, y: -80 });

        var headerScene = new ScrollMagic.Scene({
                triggerElement: header,
                triggerHook: 0.2,
                duration: '300'
            })
            .setTween(abbas)
            // .addIndicators()
            .addTo(controller);





        ////// portfolio H1 size decrease \\\\\\\

        var controller = new ScrollMagic.Controller();
        //  var smallScene = TweenMax.fromTo($('.port-head'), 4, { css: { fontSize: "5em" } }, { css: { fontSize: "3em" } });
        // var mobileScene  = TweenMax.to($('.port-head'), 4, { y: 80 ,opacity: 1});
        var tween = new TimelineMax()
            .fromTo($('.port-head'), 4, { css: { fontSize: "6em" } }, { css: { fontSize: "3em" } }, 0)
            .to($('.port-head'), 4, { y: 85, opacity: 1 }, 0);
            

        var smallerScene = new ScrollMagic.Scene({
                triggerElement: '.port-head',
                triggerHook: 0.7,
                duration: '300'

            })
            .setTween(tween)
           // .addIndicators({ name: "jasem" })
            .addTo(controller);


        //////// SKILLS H1 size decrease \\\\\\\

        var controller = new ScrollMagic.Controller();
        var smallScene2 = TweenMax.fromTo($('.port-head-2'), 4, { css: { fontSize: "5em" } }, { css: { fontSize: "3em" } });

        var smallerScene2 = new ScrollMagic.Scene({
                triggerElement: '.about-main',
                triggerHook: 0.6,
                duration: '300',
                offset: 100

            })
            .setTween(smallScene2)
            // .addIndicators()
            .addTo(controller);





        //////// portfolio animation \\\\\\\

        var controller = new ScrollMagic.Controller();
        // var tl = new TimelineMax();
        //     tl
        //         .from('.1',0.5,{ y:20,opacity:1})
        //         .from('.2',0.5,{ y:20,opacity:1})
        //         .from('.3',0.5,{ y:20,opacity:1})
        //         .from('.4',0.5,{ y:20,opacity:1})
        //         .from('.5',0.5,{ y:20,opacity:1});

        var portScene = TweenMax.to($('#mobile-portfolio'), 4, { opacity: 1, duration: 3 });
        var headerScene = new ScrollMagic.Scene({
                triggerElement: '#portfolio',
                triggerHook: 0.6,
                duration: '300',
                offset: 80
            })
            .setTween(portScene)
            //.addIndicators()
            .addTo(controller);






        //////// portfolio END animation \\\\\\\

        var controller = new ScrollMagic.Controller();
        var portEndScene = TweenMax.to($('#projects'), 4, { opacity: 0, duration: 3, y: -80 });
        var aboutScene = new ScrollMagic.Scene({
                triggerElement: '.about-main',
                triggerHook: 0.9,
                duration: '300'
            })
            .setTween(portEndScene)
            //.addIndicators()
            .addTo(controller);


    } //////////////////////////////////////////end break points!!



    var portofilo_h1 = $('.port-head');
    var overlay_desktop = $('#overlay-desktop');




    ///////////////// OVERLAY \\\\\\\\\\\\\\\\\\\\\\


    ////overlay data JSON

    var data = [{
        "name": "WEB_API",
        "img": "img/work/responsive/1.png",
        "info": "In This Project, using AJAX i used two Public API's(spotify/Flickr) to search for the artist and form a Gallery from the result,user then can choose and album and get latest pictures from Flickr related to the chosen album.",
        "tech": ['img/work/logos/html.png', 'img/work/logos/css.png', 'img/work/logos/sass.svg', 'img/work/logos/js.png', 'img/work/logos/jquery.png', 'img/work/logos/git.svg'],
        "demo": "https://k00ry.github.io/web_api_v1/",
        "github": "https://github.com/K00ry/web_api_v1"
    }, {
        "name": "WEB_APP",
        "img": "img/work/responsive/2.png",
        "info": "This project was about building a beautiful web application dashboard complete with JavaScript-driven charts and graphs base on a suplied graphic mockup. This was a front end project onlythat required to create the responsive layout in HTML and CSS with added JavaScript functionality. Flexbox and Sass proved to be invaluable tools.",
        "tech": ['img/work/logos/html.png', 'img/work/logos/css.png', 'img/work/logos/sass.svg', 'img/work/logos/js.png', 'img/work/logos/jquery.png', 'img/work/logos/git.svg'],
        "demo": "https://k00ry.github.io/web_app_dashboard_v2/",
        "github": "https://github.com/K00ry/web_app_dashboard_v2"
    }, {
        "name": "Responsive Layout",
        "img": "img/work/responsive/3.png",
        "info": "In this project, I used a mobile-first approach to create a responsive layout based on a mockup. There's no Framework or Javascript involved, just pure CSS and HTML5. I created this site as part of the Techdegree program, an intensive 6 months online coding bootcamp.",
        "tech": ['img/work/logos/html.png', 'img/work/logos/css.png', 'img/work/logos/sass.svg', 'img/work/logos/js.png', 'img/work/logos/git.svg'],
        "demo": "https://k00ry.github.io/css_sass/",
        "github": "https://github.com/K00ry/css_sass"
    }, {
        "name": "Interactive Video-player",
        "img": "img/work/responsive/4.png",
        "info": "This video player has custom controls created with CSS and Javascript. There is a functional caption track as well as an interactive transcript which highlights the text as the video plays. The text can be clicked on to jump to the appropriate time index in the video.",
        "tech": ['img/work/logos/html.png', 'img/work/logos/css.png', 'img/work/logos/js.png', 'img/work/logos/jquery.png', 'img/work/logos/git.svg'],
        "demo": "https://k00ry.github.io/video_player_v2/",
        "github": "https://github.com/K00ry/video_player_v2"
    }, {
        "name": "Registration Form",
        "img": "img/work/responsive/5.png",
        "info": "Similar to Responsive Layout project, I used a mobile-first approach to create a responsive form. The validation relies on HTML5 required tags. This form is created as part of the Techdegree program, an intensive 6 months online coding bootcamp.",
        "tech": ['img/work/logos/html.png', 'img/work/logos/css.png', 'img/work/logos/git.svg'],
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
        // overlay_desktop.fadeOut("1000");


        click_index = $(this).index();
        projectSync(click_index);
        // overlay_desktop.fadeIn("1000");

    });

    function projectSync(click_index) {
        $('.title-ov').hide().html(data[click_index].name).fadeIn(1000);
        $('.img-ov').hide().attr("src", data[click_index].img).fadeIn(1000);
        $('.info-ov').hide().html(data[click_index].info).fadeIn(1000);
        $('.demo-ov').hide().attr("href", data[click_index].git).fadeIn(1000);
        $('.git-ov').hide().attr("href", data[click_index].git).fadeIn(1000);

        var tech_list = '';
        $.each(data[click_index].tech, function(index, item) {
            tech_list += '<li class="tech-title"><img src="' + data[click_index].tech[index] + '"></li>';
        });
        $('.tech-ov').hide().html(tech_list).fadeIn(1000);
    }


});
