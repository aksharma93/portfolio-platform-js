/************************************************************************
*   Dev Platform - an online portfolio SPA to upload and view multiple  *
*   web applications in one centralised location.                       *
*                                 Amit Sharma - a.k.sharma1@outlook.com *
************************************************************************/

define(function(require) {
    var MainView,
        Backbone = require("backbone"),
        /* jshint unused:false */
        Marionette = require("marionette"),
        template = require("hbs!templates/devplatform/layout/mainContent");

    MainView = Backbone.Marionette.ItemView.extend({
        template : template,
        events : {
            "click .main-nav-item" : "onLogin"
        },
        onLogin : function() {
            console.log("You clicked the login tab");
        }
    });

    return MainView;
});