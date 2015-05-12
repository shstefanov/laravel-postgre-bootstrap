var Controller = require("App").Controller;
var Layout     = require("../views/Layout.js");

module.exports = Controller.extend("InterfaceController", {
  initialize: function(options, app){
    this.options = options;
    this.layout = new Layout({
      el: this.options.config.mvc.container,
      data: require("data")
    });
  },

  routes: {
    goA: "goA",
    goB: ["goB", "goBAgain"],
    goC: ["goC", "goA"],
    "goC.hide": "hideAllC"
  },

  goA: function(id){
    console.log("goA", id);
  },
  goB: function(){
    console.log("goB");
  },

  goBAgain: function(){
    console.log("goBAgain");
  },

  goC: function(){
    console.log("goC");
  },

  hideAllC: function(){
    console.log("hideAllC", "goC.hide");
  }
});
