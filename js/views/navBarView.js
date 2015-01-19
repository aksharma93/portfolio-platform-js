/************************************************************************
*   Dev Platform - an online portfolio SPA to upload and view multiple  *
*   web applications in one centralised location.                       *
*                                 Amit Sharma - a.k.sharma1@outlook.com *
************************************************************************/

define(function(require) {
    var MainView,
        Backbone = require("backbone"),
        utils = require("../objects/eventUtilities"),
        /* jshint unused:false */
        Marionette = require("marionette"),
        template = require("hbs!templates/devplatform/navigation/navBar");

    MainView = Backbone.Marionette.ItemView.extend({
        template : template,
        events : {
            // "click .nav-home" : "",
            // "click .nav-settings": "onSettings",
            // "click .nav-contact": "onContact",
            // "click .nav-about": "onAbout"
            "click li": "navItemSelected"
        },
        navItemSelected : function(options) {
            var item = options.currentTarget.attributes[1];
            utils.trigger("navItem:selected", item);
        },
        onHome : function() {
            console.log("You clicked the Home tab");

            utils.trigger("navItem:selected");
            //render home view
        },
        onSettings : function() {
            console.log("You clicked the Settings tab");
            utils.trigger("settingsngs:selected");
            // render settings view
        },
        onContact : function() {
            console.log("You clicked the Contact tab");
            utils.trigger("contact:selected");
            // render contact view
        },
        onAbout : function() {
            console.log("You clicked the About tab");
            utils.trigger("about:selected");
            // render about view
        }
    });

    return MainView;
});