requirejs.config({baseUrl:"js",paths:{tweenmax:"TweenMax.min",jquery:"jquery.min",scrollmagic:"ScrollMagic.min",tether:"tether",bootstrap:"bootstrap.min",gsap:"animation.gsap.min",indicator:"https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/plugins/debug.addIndicators",tweenlite:"TweenLite",cssplugin:"https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/plugins/CSSPlugin.min",scrollto:"https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/plugins/ScrollToPlugin.min"},shim:{bootstrap:{deps:["tether","jquery"]},tweenlite:{exports:"TweenLite"}}}),require(["tether"],function(e){return window.Tether=e,e}),require(["tether","jquery","bootstrap"]),require(["writen/main"]);