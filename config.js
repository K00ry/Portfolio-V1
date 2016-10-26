requirejs.config({

    baseUrl: 'js',
    paths: {

        'tether:': 'tether',
        'jquery': 'jquery',
        'bootstrap': 'bootstrap',
        'jquery.mb.YTPlayer.min': 'jquery.mb.YTPlayer.min'
    },

    shim: {
        bootstrap: {

            deps: ['tether', 'jquery']
        }
    }



});
require(['tether'], function(Tether) {
    window.Tether = Tether; // attach to global scope
    // it's important to have this, to keep original module definition approach
    return Tether;
});

// require(['tether', 'jquery', 'bootstrap']);
 require([ 'jquery'])
require(['writen/main']);

// if (document.documentElement.clientWidth >= 1024){

//     }else if (document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth > 543) {

//           } else {

//           }
