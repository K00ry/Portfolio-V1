// ({
//   baseUrl: './',
//    paths: {

//         'tether:': 'tether',
//         'jquery': 'jquery',
//         'bootstrap': 'bootstrap',
//         'jquery.mb.YTPlayer.min': 'jquery.mb.YTPlayer.min'
//     },


//   optimize: 'uglify2',


//   name: "writen/main",
//   out: 'main-ghoor.js'




// })

({
    baseUrl: ".",
    paths: {

        'tether': 'tether',
        'jquery': 'jquery',
        'bootstrap': 'bootstrap',
        'jquery.mb.YTPlayer.min': 'jquery.mb.YTPlayer.min'
    },

    shim: {
        bootstrap: {

            deps: ['tether', 'jquery']
        }
    },
    name: "writen/main",
    out: "main.js"
})
