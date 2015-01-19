/************************************************************************
*   Dev Platform - an online portfolio SPA to upload and view multiple  *
*   web applications in one centralised location.                       *
*                                 Amit Sharma - a.k.sharma1@outlook.com *
************************************************************************/

define(function(require) {
    var utils = require("objects/eventUtilities"),
        BaseController = require("./baseController"),
        NavBarView = require("../views/navBarView"),
        MainLayout = require("layouts/mainLayout");

    function getRegion(name) {
        return utils.request("getAppRegion", name);
    }
    
    return BaseController.extend({
        channelEvents: {
            "navItem:selected" : "itemSelected",
            // "settings:selected" : "onSettings",
            // "contact:selected" : "onContact",
            // "about:selected" : "onAbout"
        },
        onLogin : function() {
            //Login logic goes here
        },
        onHome : function() {
            //get the data items from the nav bar item selected
            // then genericaly delegate a task 
            var mainContentRegion = getRegion("mainContentRegion"),
                userPanelRegion = getRegion("userRegion");

            if (!mainContentRegion.hasView()) {
                mainContentRegion.show(MainLayout);
                if (!userPanelRegion.hasView()) {
                    userPanelRegion.show(new NavBarView());
                }
            }
        },
        itemSelected : function(evt) {
            console.log("Event = ", evt, "and ", evt.data);
        }
    });
});