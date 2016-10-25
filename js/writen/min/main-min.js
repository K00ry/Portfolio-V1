define(["jquery","background"],function($,e){function o(e){$(".title-ov").hide().html(H[e].name).fadeIn(1e3),$(".img-ov").hide().attr("src",H[e].img).fadeIn(1e3),$(".info-ov").hide().html(H[e].info).fadeIn(1e3),$(".demo-ov").hide().attr("href",H[e].git).fadeIn(1e3),$(".git-ov").hide().attr("href",H[e].git).fadeIn(1e3);var o="";$.each(H[e].tech,function(t,r){o+='<li class="tech-title"><img src="'+H[e].tech[t]+'"></li>'}),$(".tech-ov").hide().html(o).fadeIn(1e3)}var t=TweenMax.staggerFrom(".main-meme",2,{scale:.8,opacity:0,delay:.5});if(document.documentElement.clientWidth>=1024){$("#P1").YTPlayer();for(var r=new ScrollMagic.Controller,i=document.querySelectorAll("div.panel"),n=0;n<i.length;n++)new ScrollMagic.Scene({triggerElement:i[n],triggerHook:0}).setPin(i[n]).addTo(r);var a=$("#home").offset().top,l=$("#portfolio").offset().top,c=$("#about").offset().top,a=$("#home").offset().top,l=$("#portfolio").offset().top,c=$("#about").offset().top;$("#home-link").click(function(){$("html, body").animate({scrollTop:a},1500)}),$("#port-link").click(function(){$("html, body").animate({scrollTop:l},1500)}),$("#about-link").click(function(){$("html, body").animate({scrollTop:c},1500)});var r=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:.1,duration:"450"}});new ScrollMagic.Scene({triggerElement:"#home"}).setClassToggle("#home-li","active-me").addTo(r),new ScrollMagic.Scene({triggerElement:"#portfolio"}).setClassToggle("#portfolio-li","active-me").addTo(r),new ScrollMagic.Scene({triggerElement:"#about"}).setClassToggle("#about-li","active-me").addTo(r),new ScrollMagic.Scene({triggerElement:"#about"}).setClassToggle(".navbar","active-transparent").addTo(r);var r=new ScrollMagic.Controller,g=$("#home-wrap"),s=TweenMax.to(g,2,{opacity:0,y:-75}),m=new ScrollMagic.Scene({triggerElement:".port-head",triggerHook:.7,duration:"300"}).setTween(s).addTo(r),r=new ScrollMagic.Controller,d=(new TimelineMax).fromTo($(".port-head"),4,{css:{fontSize:"7em"}},{css:{fontSize:"4em"}},0).to($(".port-head"),4,{opacity:1},0),p=new ScrollMagic.Scene({triggerElement:"#mobile-portfolio",triggerHook:.6,duration:"260",offset:50}).setTween(d).addTo(r),r=new ScrollMagic.Controller,h=TweenMax.fromTo($(".port-head-2"),4,{css:{fontSize:"5.5em"}},{css:{fontSize:"3.5em"}}),f=new ScrollMagic.Scene({triggerElement:".about-main",triggerHook:.6,duration:"360",offset:100}).setTween(h).addTo(r),r=new ScrollMagic.Controller,w=TweenMax.to($("#mobile-portfolio,#overlay-desktop"),4,{opacity:1,duration:3}),m=new ScrollMagic.Scene({triggerElement:".port-head",triggerHook:.6,duration:"400",offset:50}).setTween(w).addTo(r),r=new ScrollMagic.Controller,u=TweenMax.to($("#projects"),4,{opacity:0,duration:3,y:-80}),S=new ScrollMagic.Scene({triggerElement:".about-main",triggerHook:.8,duration:"200"}).setTween(u).addTo(r)}else if(document.documentElement.clientWidth<1024&&document.documentElement.clientWidth>543){$("#P1").YTPlayer();var a=$("#home").offset().top,l=$("#portfolio").offset().top,c=$("#about").offset().top;$("#home-link").click(function(){$("html, body").animate({scrollTop:a},1500)}),$("#port-link").click(function(){$("html, body").animate({scrollTop:l},1500)}),$("#about-link").click(function(){$("html, body").animate({scrollTop:c},1500)});var r=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:.1,duration:"450"}});new ScrollMagic.Scene({triggerElement:"#home"}).setClassToggle("#home-li","active-me").addTo(r),new ScrollMagic.Scene({triggerElement:"#portfolio"}).setClassToggle("#portfolio-li","active-me").addTo(r),new ScrollMagic.Scene({triggerElement:"#about"}).setClassToggle("#about-li","active-me").addTo(r),new ScrollMagic.Scene({triggerElement:"#about"}).setClassToggle(".navbar","active-transparent").addTo(r);for(var r=new ScrollMagic.Controller,g=$("#home-wrap"),s=TweenMax.to(g,2,{opacity:0,y:-75}),m=new ScrollMagic.Scene({triggerElement:".port-head",triggerHook:.7,duration:"300"}).setTween(s).addTo(r),r=new ScrollMagic.Controller,d=(new TimelineMax).fromTo($(".port-head"),4,{css:{fontSize:"5em"}},{css:{fontSize:"3em"}},0).to($(".port-head"),4,{opacity:0},0),p=new ScrollMagic.Scene({triggerElement:"#mobile-portfolio",triggerHook:.6,duration:"260",offset:50}).setTween(d).addTo(r),r=new ScrollMagic.Controller,h=TweenMax.fromTo($(".port-head-2"),4,{css:{fontSize:"5.5em"}},{css:{fontSize:"3.5em"}}),f=new ScrollMagic.Scene({triggerElement:".about-main",triggerHook:.6,duration:"360",offset:100}).setTween(h).addTo(r),r=new ScrollMagic.Controller,w=TweenMax.to($("#mobile-portfolio,#overlay-desktop"),4,{opacity:1,duration:3}),m=new ScrollMagic.Scene({triggerElement:".port-head",triggerHook:.6,duration:"400",offset:50}).setTween(w).addTo(r),r=new ScrollMagic.Controller,u=TweenMax.to($("#projects"),4,{opacity:0,duration:3,y:-80}),S=new ScrollMagic.Scene({triggerElement:".about-main",triggerHook:.7,duration:"200"}).setTween(u).addTo(r),r=new ScrollMagic.Controller,i=document.querySelectorAll("div.panel"),n=0;n<i.length;n++)new ScrollMagic.Scene({triggerElement:i[n],triggerHook:0}).setPin(i[n]).addTo(r)}else{var r=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:.1,duration:"450"}}),T=TweenMax.to($(".navbar"),4,{css:{background:"#fff"}});new ScrollMagic.Scene({triggerElement:"#about"}).setTween(T).addTo(r);var v,k=$(".nav"),b=k.outerHeight()+15,M=k.find("a"),y=M.map(function(){var e=$($(this).attr("href"));if(e.length)return e});M.click(function(e){var o=$(this).attr("href"),t="#"===o?0:$(o).offset().top-b+1;$("html, body").stop().animate({scrollTop:t},1500),e.preventDefault()}),$(window).scroll(function(){var e=$(this).scrollTop()+b,o=y.map(function(){if($(this).offset().top<e)return this});o=o[o.length-1];var t=o&&o.length?o[0].id:"";v!==t&&(v=t,M.parent().removeClass("active-me").end().filter("[href='#"+t+"']").parent().addClass("active-me"))});var r=new ScrollMagic.Controller,g=$("#home-wrap"),s=TweenMax.to(g,2,{opacity:0,y:-80}),m=new ScrollMagic.Scene({triggerElement:g,triggerHook:.2,duration:"300"}).setTween(s).addTo(r),r=new ScrollMagic.Controller,C=(new TimelineMax).fromTo($(".port-head"),4,{css:{fontSize:"6em"}},{css:{fontSize:"3em"}},0).to($(".port-head"),4,{y:85,opacity:1},0),p=new ScrollMagic.Scene({triggerElement:".port-head",triggerHook:.7,duration:"300"}).setTween(C).addTo(r),r=new ScrollMagic.Controller,h=TweenMax.fromTo($(".port-head-2"),4,{css:{fontSize:"5em"}},{css:{fontSize:"3em"}}),f=new ScrollMagic.Scene({triggerElement:".about-main",triggerHook:.6,duration:"300",offset:100}).setTween(h).addTo(r),r=new ScrollMagic.Controller,w=TweenMax.to($("#mobile-portfolio"),4,{opacity:1,duration:3}),m=new ScrollMagic.Scene({triggerElement:"#portfolio",triggerHook:.6,duration:"300",offset:80}).setTween(w).addTo(r),r=new ScrollMagic.Controller,u=TweenMax.to($("#projects"),4,{opacity:0,duration:3,y:-80}),S=new ScrollMagic.Scene({triggerElement:".about-main",triggerHook:.9,duration:"300"}).setTween(u).addTo(r)}var E=$(".port-head"),x=$("#overlay-desktop"),H=[{name:"WEB_API",img:"img/work/responsive/1.png",info:"In This Project, using AJAX i used two Public API's(spotify/Flickr) to search for the artist and form a Gallery from the result,user then can choose and album and get latest pictures from Flickr related to the chosen album.",tech:["img/work/logos/html.png","img/work/logos/css.png","img/work/logos/sass.svg","img/work/logos/js.png","img/work/logos/jquery.png","img/work/logos/git.svg"],demo:"https://k00ry.github.io/web_api_v1/",github:"https://github.com/K00ry/web_api_v1"},{name:"WEB_APP",img:"img/work/responsive/2.png",info:"This project was about building a beautiful web application dashboard complete with JavaScript-driven charts and graphs base on a suplied graphic mockup. This was a front end project onlythat required to create the responsive layout in HTML and CSS with added JavaScript functionality. Flexbox and Sass proved to be invaluable tools.",tech:["img/work/logos/html.png","img/work/logos/css.png","img/work/logos/sass.svg","img/work/logos/js.png","img/work/logos/jquery.png","img/work/logos/git.svg"],demo:"https://k00ry.github.io/web_app_dashboard_v2/",github:"https://github.com/K00ry/web_app_dashboard_v2"},{name:"Responsive Layout",img:"img/work/responsive/3.png",info:"In this project, I used a mobile-first approach to create a responsive layout based on a mockup. There's no Framework or Javascript involved, just pure CSS and HTML5. I created this site as part of the Techdegree program, an intensive 6 months online coding bootcamp.",tech:["img/work/logos/html.png","img/work/logos/css.png","img/work/logos/sass.svg","img/work/logos/js.png","img/work/logos/git.svg"],demo:"https://k00ry.github.io/css_sass/",github:"https://github.com/K00ry/css_sass"},{name:"Interactive Video-player",img:"img/work/responsive/4.png",info:"This video player has custom controls created with CSS and Javascript. There is a functional caption track as well as an interactive transcript which highlights the text as the video plays. The text can be clicked on to jump to the appropriate time index in the video.",tech:["img/work/logos/html.png","img/work/logos/css.png","img/work/logos/js.png","img/work/logos/jquery.png","img/work/logos/git.svg"],demo:"https://k00ry.github.io/video_player_v2/",github:"https://github.com/K00ry/video_player_v2"},{name:"Registration Form",img:"img/work/responsive/5.png",info:"Similar to Responsive Layout project, I used a mobile-first approach to create a responsive form. The validation relies on HTML5 required tags. This form is created as part of the Techdegree program, an intensive 6 months online coding bootcamp.",tech:["img/work/logos/html.png","img/work/logos/css.png","img/work/logos/git.svg"],demo:"https://k00ry.github.io/online_registration_v2/",github:"https://github.com/K00ry/online_registration_v2"}],_;$(".work-mobile").click(function(){$("#overlay").addClass("open"),_=$(this).index(),$("#title").html(H[_].name),$("#over-img").attr("src",H[_].img),$("#info-text").html(H[_].info),$("#demo").attr("href",H[_].demo);var e="";$.each(H[_].tech,function(o,t){e+='<li class="tech-title"><img src="'+H[_].tech[o]+'"></li>'}),$("#techs").html(e)}),$("#overlay").click(function(){$("#overlay").removeClass("open")}),$(".work-desktop").click(function(){_=$(this).index(),o(_)})});
//# sourceMappingURL=./main-min.js.map