var App        = require("App");
var Controller = App.Controller;
var app;

module.exports = Controller.extend("InterfaceController", {
  
  initialize: function(options){ app = require("app"); },

  init: function(options){
    this.options = options;
    app.layout = new App.Views.Layout({
      el:   options.config.ractive.container,
      data: options.data
    });
  },

  routes: {
    "users.list": "listUsers",
    "users.edit": "editUser",
    "user.create":"createUser"
  },

  createUser: function(){ app.layout.radioToggle("visibility.createUser"); },
  listUsers:  function(){ app.layout.radioToggle("visibility.usersList" ); },
  editUser:   function(id){
    app.layout.radioToggle("visibility.editUser");
    var users = app.layout.get("users");
    if(!users.initialized){
      return users.once("reset", function(){
        app.layout.set("currentUser", users.get(id));
      }, this);
    }
    app.layout.set("currentUser", users.get(id));
  },

});
