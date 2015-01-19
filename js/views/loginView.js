/************************************************************************
*   Dev Platform - an online portfolio SPA to upload and view multiple  *
*   web applications in one centralised location.                       *
*                                 Amit Sharma - a.k.sharma1@outlook.com *
************************************************************************/

define(function(require) {
    var LoginView,
        Backbone = require("backbone"),
        /* jshint unused:false */
        Marionette = require("marionette"),
        template = require("hbs!templates/devplatform/login/login");

    LoginView = Backbone.Marionette.ItemView.extend({
        template : template
    });

    return LoginView;
});