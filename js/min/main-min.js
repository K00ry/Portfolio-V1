function projectSync(e){$(".title-ov").hide().html(data[e].name).fadeIn(1e3),$(".img-ov").hide().attr("src",data[e].img).fadeIn(1e3),$(".info-ov").hide().html(data[e].info).fadeIn(1e3),$(".demo-ov").hide().attr("href",data[e].demo).fadeIn(1e3),$(".git-ov").hide().attr("href",data[e].github).fadeIn(1e3);var o="";$.each(data[e].tech,function(t,r){o+='<li class="tech-title"><img src="'+data[e].tech[t]+'" alt="tech-logo"></li>'}),$(".tech-ov").hide().html(o).fadeIn(1e3)}if(document.documentElement.clientWidth>=1024){$("#bgndVideo").YTPlayer();var target_home=$("#home").offset().top,target_portfolio=$("#projects").offset().top,target_about=$(".number-email").offset().top;$("#home-link").click(function(){$("html, body").animate({scrollTop:target_home},1500)}),$("#port-link").click(function(){$("html, body").animate({scrollTop:target_portfolio},1500)}),$("#about-link").click(function(){$("html, body").animate({scrollTop:target_about},1500)});var controller=new ScrollMagic.Controller,header=$("#home-wrap"),abbas=TweenMax.to(header,2,{opacity:0,y:-75}),headerScene=new ScrollMagic.Scene({triggerElement:".port-head",triggerHook:.7,duration:"300"}).setTween(abbas).addTo(controller),controller=new ScrollMagic.Controller,tweeny=(new TimelineMax).fromTo($(".port-head"),4,{css:{fontSize:"7em"}},{css:{fontSize:"4em"}},0).to($(".port-head"),4,{opacity:1},0),smallerScene=new ScrollMagic.Scene({triggerElement:"#mobile-portfolio",triggerHook:.6,duration:"260",offset:50}).setTween(tweeny).addTo(controller),controller=new ScrollMagic.Controller,tweenySkills=(new TimelineMax).fromTo($(".port-head-2"),4,{css:{fontSize:"5.5em"}},{css:{fontSize:"3em"}},0).to($(".skills-icons,.contact"),4,{opacity:1,duration:3}),smallerScene2=new ScrollMagic.Scene({triggerElement:".about-main",triggerHook:.6,duration:"200",offset:100}).setTween(tweenySkills).addTo(controller),controller=new ScrollMagic.Controller,portScene=TweenMax.to($("#mobile-portfolio,#overlay-desktop"),4,{opacity:1,duration:3}),headerScene=new ScrollMagic.Scene({triggerElement:".port-head",triggerHook:.6,duration:"400",offset:50}).setTween(portScene).addTo(controller),controller=new ScrollMagic.Controller,portEndScene=TweenMax.to($("#projects"),4,{opacity:0,duration:3,y:-80}),aboutScene=new ScrollMagic.Scene({triggerElement:".about-main",triggerHook:.8,duration:"200"}).setTween(portEndScene).addTo(controller)}else if(document.documentElement.clientWidth<1024&&document.documentElement.clientWidth>543){$("#P1").YTPlayer();var target_home=$("#home").offset().top,target_portfolio=$("#projects").offset().top,target_about=$(".number-email").offset().top;$("#home-link").click(function(){$("html, body").animate({scrollTop:target_home},1500)}),$("#port-link").click(function(){$("html, body").animate({scrollTop:target_portfolio},1500)}),$("#about-link").click(function(){$("html, body").animate({scrollTop:target_about},1500)});var controller=new ScrollMagic.Controller,header=$("#home-wrap"),abbas=TweenMax.to(header,2,{opacity:0,y:-75}),headerScene=new ScrollMagic.Scene({triggerElement:".port-head",triggerHook:.7,duration:"300"}).setTween(abbas).addTo(controller),controller=new ScrollMagic.Controller,tweeny=(new TimelineMax).fromTo($(".port-head"),4,{css:{fontSize:"5em"}},{css:{fontSize:"3em"}},0).to($(".port-head"),4,{opacity:0},0),smallerScene=new ScrollMagic.Scene({triggerElement:"#mobile-portfolio",triggerHook:.6,duration:"260",offset:50}).setTween(tweeny).addTo(controller),controller=new ScrollMagic.Controller,tweenySkills=(new TimelineMax).fromTo($(".port-head-2"),4,{css:{fontSize:"5.5em"}},{css:{fontSize:"3.5em"}},0).to($(".skills-icons"),4,{opacity:1,duration:3},0),smallerScene2=new ScrollMagic.Scene({triggerElement:".about-main",triggerHook:.6,duration:"100",offset:100}).setTween(tweenySkills).addTo(controller),controller=new ScrollMagic.Controller,portScene=TweenMax.to($("#mobile-portfolio,#overlay-desktop"),4,{opacity:1,duration:3}),headerScene=new ScrollMagic.Scene({triggerElement:".port-head",triggerHook:.6,duration:"400",offset:50}).setTween(portScene).addTo(controller),controller=new ScrollMagic.Controller,portEndScene=TweenMax.to($("#projects"),4,{opacity:0,duration:3,y:-80}),aboutScene=new ScrollMagic.Scene({triggerElement:".about-main",triggerHook:.7,duration:"200"}).setTween(portEndScene).addTo(controller)}else{var target_home=$("#home").offset().top,target_portfolio=$("#projects").offset().top,target_about=$(".number-email").offset().top;$("#home-link").click(function(){$("html, body").animate({scrollTop:target_home},1500)}),$("#port-link").click(function(){$("html, body").animate({scrollTop:target_portfolio},1500)}),$("#about-link").click(function(){$("html, body").animate({scrollTop:target_about},1500)});var controller=new ScrollMagic.Controller,header=$("#home-wrap"),abbas=TweenMax.to(header,2,{opacity:0,y:-80}),headerScene=new ScrollMagic.Scene({triggerElement:header,triggerHook:.2,duration:"300"}).setTween(abbas).addTo(controller),controller=new ScrollMagic.Controller,tween=(new TimelineMax).fromTo($(".port-head"),4,{css:{fontSize:"6em"}},{css:{fontSize:"3em"}},0).to($(".port-head"),4,{opacity:1},0),smallerScene=new ScrollMagic.Scene({triggerElement:".port-head",triggerHook:.7,duration:"300"}).setTween(tween).addTo(controller),controller=new ScrollMagic.Controller,tweenySkills=(new TimelineMax).fromTo($(".port-head-2"),4,{css:{fontSize:"5em"}},{css:{fontSize:"3em"}},0).to($(".skills-icons"),4,{opacity:1,duration:3},0),smallerScene2=new ScrollMagic.Scene({triggerElement:".about-main",triggerHook:.6,duration:"100",offset:100}).setTween(tweenySkills).addTo(controller),controller=new ScrollMagic.Controller,portScene=TweenMax.to($("#mobile-portfolio"),4,{opacity:1,duration:3}),headerScene=new ScrollMagic.Scene({triggerElement:"#portfolio",triggerHook:.6,duration:"300",offset:80}).setTween(portScene).addTo(controller),controller=new ScrollMagic.Controller,portEndScene=TweenMax.to($("#projects"),4,{opacity:0,duration:3,y:-80}),aboutScene=new ScrollMagic.Scene({triggerElement:".about-main",triggerHook:.9,duration:"300"}).setTween(portEndScene).addTo(controller)}var fadeIn=TweenMax.staggerFrom(".main-meme",2,{scale:.8,opacity:0,delay:1.5}),fadeInNav=TweenMax.staggerFrom(".navbar",2,{scale:.5,opacity:0,delay:1.5}),controller=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:.1,duration:"450"}}),backWhite=TweenMax.to($(".navbar"),4,{css:{background:"#fff"}});new ScrollMagic.Scene({triggerElement:"#about"}).setTween(backWhite).addTo(controller);var controller=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:.1,duration:"150"}});new ScrollMagic.Scene({triggerElement:"#home"}).setClassToggle("#home-li","active-me").addTo(controller),new ScrollMagic.Scene({triggerElement:"#portfolio"}).setClassToggle("#portfolio-li","active-me").addTo(controller),new ScrollMagic.Scene({triggerElement:"#about"}).setClassToggle("#about-li","active-me").addTo(controller);var data=[{name:"WEB_API",img:"img/work/responsive/1.png",info:"In This Project, using AJAX i used two Public API's(spotify/Flickr) to search for the artist and form a Gallery from the result,user then can choose and album and get latest pictures from Flickr related to the chosen album.",tech:["img/work/logos/html.png","img/work/logos/css.png","img/work/logos/sass.svg","img/work/logos/js.png","img/work/logos/jquery.png","img/work/logos/git.svg"],demo:"https://k00ry.github.io/web_api_v1/",github:"https://github.com/K00ry/web_api_v1"},{name:"WEB_APP",img:"img/work/responsive/2.png",info:"This project was about building a beautiful web application dashboard complete with JavaScript-driven charts and graphs base on a suplied graphic mockup. This was a front end project onlythat required to create the responsive layout in HTML and CSS with added JavaScript functionality. Flexbox and Sass proved to be invaluable tools.",tech:["img/work/logos/html.png","img/work/logos/css.png","img/work/logos/sass.svg","img/work/logos/js.png","img/work/logos/jquery.png","img/work/logos/git.svg"],demo:"https://k00ry.github.io/web_app_dashboard_v2/",github:"https://github.com/K00ry/web_app_dashboard_v2"},{name:"Responsive Layout",img:"img/work/responsive/3.png",info:"In this project, I used a mobile-first approach to create a responsive layout based on a mockup. There's no Framework or Javascript involved, just pure CSS and HTML5. I created this site as part of the Techdegree program, an intensive 6 months online coding bootcamp.",tech:["img/work/logos/html.png","img/work/logos/css.png","img/work/logos/sass.svg","img/work/logos/js.png","img/work/logos/git.svg"],demo:"https://k00ry.github.io/css_sass/",github:"https://github.com/K00ry/css_sass"},{name:"Interactive Video-player",img:"img/work/responsive/4.png",info:"This video player has custom controls created with CSS and Javascript. There is a functional caption track as well as an interactive transcript which highlights the text as the video plays. The text can be clicked on to jump to the appropriate time index in the video.",tech:["img/work/logos/html.png","img/work/logos/css.png","img/work/logos/js.png","img/work/logos/jquery.png","img/work/logos/git.svg"],demo:"https://k00ry.github.io/video_player_v2/",github:"https://github.com/K00ry/video_player_v2"},{name:"Registration Form",img:"img/work/responsive/5.png",info:"Similar to Responsive Layout project, I used a mobile-first approach to create a responsive form. The validation relies on HTML5 required tags. This form is created as part of the Techdegree program, an intensive 6 months online coding bootcamp.",tech:["img/work/logos/html.png","img/work/logos/css.png","img/work/logos/git.svg"],demo:"https://k00ry.github.io/online_registration_v2/",github:"https://github.com/K00ry/online_registration_v2"}],click_index;$(".work-mobile").click(function(){$("#overlay").addClass("open"),click_index=$(this).index(),$("#title").html(data[click_index].name),$("#over-img").attr("src",data[click_index].img),$("#info-text").html(data[click_index].info),$("#demo").attr("href",data[click_index].demo);var e="";$.each(data[click_index].tech,function(o,t){e+='<li class="tech-title"><img src="'+data[click_index].tech[o]+'"></li>'}),$("#techs").html(e)}),$("#overlay").click(function(){$("#overlay").removeClass("open")}),$(".work-desktop").click(function(){click_index=$(this).index(),projectSync(click_index)});