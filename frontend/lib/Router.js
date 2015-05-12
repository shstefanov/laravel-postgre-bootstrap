// Backbone router needs jQuery to select 'window' and to attach 2 events to it
// Creating simple mockup

var Backbone               = require("backbone");
var Class                  = require("./Class.js");

var jQueryMockup = {
  on: function(event, handler){
    this.el.addEventListener(event, handler);
    return jQueryMockup;
  },
  off: function(event, handler){
    this.el.removeEventListener(event, handler);
    return jQueryMockup;
  }
};

Backbone.$ = function(el){
  jQueryMockup.el = el;
  return jQueryMockup;
}

var BaseRouter = Backbone.Router.extend({
  
});



BaseRouter.__className = "Router";
BaseRouter.extend      = Class.extend;
module.exports         = BaseRouter;



