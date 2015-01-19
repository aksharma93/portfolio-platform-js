/************************************************************************
*   Dev Platform - an online portfolio SPA to upload and view multiple  *
*   web applications in one centralised location.                       *
*                                 Amit Sharma - a.k.sharma1@outlook.com *
************************************************************************/

define(function(require) {
    var Marionette = require("marionette"),
        utils = require("objects/eventUtilities"),
        MainLayout = require("layouts/mainLayout");

    function getRegion(name) {
        return utils.request("getAppRegion", name);
    }
    
    return Marionette.Controller.extend({
        onLogin : function() {
            //Login logic goes here
        },
        onHome : function() {
            var mainContentRegion = getRegion("mainContentRegion");
            mainContentRegion.show(MainLayout);
        },
    });
});
           
        