/************************************************************************
*   Dev Platform - an online portfolio SPA to upload and view multiple  *
*   web applications in one centralised location.                       *
*                                 Amit Sharma - a.k.sharma1@outlook.com *
************************************************************************/

define(function(require) {
    var Backbone = require("backbone"),
        Marionette = require("marionette"),
        /* jshint unused:false */
        MarionetteSubRouter = require("marionette.subrouter"),
        MainController = require("controllers/mainController");

	return Marionette.SubRouter.extend({
        controller: new MainController(),
        appRoutes: {
            "" : "onHome",
            "home": "onHome",
            "login": "onLogin"
        }
    });
});