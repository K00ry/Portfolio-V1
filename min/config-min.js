requirejs.config({baseUrl:"js",paths:{"tether:":"tether",jquery:"jquery",bootstrap:"bootstrap","jquery.mb.YTPlayer.min":"jquery.mb.YTPlayer.min"},shim:{bootstrap:{deps:["tether","jquery"]}}}),require(["tether"],function(e){return window.Tether=e,e}),require(["jquery"]),require(["writen/main"]);