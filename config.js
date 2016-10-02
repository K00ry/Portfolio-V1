requirejs.config({

    baseUrl: 'js',
    paths: {
        tweenmax: 'TweenMax.min',
        jquery: 'jquery.min',
        scrollmagic: 'ScrollMagic.min',
        indicator: 'debug.addIndicators.min',
        tether: 'tether',
        bootstrap: 'bootstrap.min',
        gsap: 'animation.gsap.min',
        tweenlite: 'TweenLite',
        cssplugin: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/plugins/CSSPlugin.min',
        scrollto: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/plugins/ScrollToPlugin.min'

    },

    shim: {
        bootstrap: {

            deps: ['tether','jquery']
        }
        ,
        tweenlite: {
            exports: 'TweenLite'
        }
    }



});
require(['tether'], function(Tether) {
    window.Tether = Tether; // attach to global scope
    // it's important to have this, to keep original module definition approach
    return Tether;
});

require(['tether','jquery', 'bootstrap']);
require(['writen/main']);
