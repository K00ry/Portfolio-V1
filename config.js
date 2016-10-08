requirejs.config({

    baseUrl: 'js',
    paths: {
        
        tether: 'tether',
        jquery: 'jquery.min',
         bootstrap: 'bootstrap.min',
         tweenmax: 'TweenMax',
         timeline: 'TimelineMax',
         tweenlite: 'TweenLite',    
        scrollmagic: 'ScrollMagic',
        gsap: 'animation.gsap',
        background: 'jquery.mb.YTPlayer.min'
        
        

    },

    shim: {
        bootstrap: {

            deps: ['tether','jquery']
        }
        // ,
        // tweenlite: {
        //     exports: 'TweenLite'
        // }
    }



});
require(['tether'], function(Tether) {
    window.Tether = Tether; // attach to global scope
    // it's important to have this, to keep original module definition approach
    return Tether;
});

require(['tether','jquery', 'bootstrap',]);
require(['writen/main']);
