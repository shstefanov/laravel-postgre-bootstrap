var Controller = require("App").Controller;
var Layout     = require("../views/Layout.js");
var app;

module.exports = Controller.extend("InterfaceController", {
  initialize: function(options, _app){
    app = _app;
    this.options = options;
    this.layout = new Layout({
      el: this.options.config.mvc.container,
      data: require("data")
    });
  },

  routes: {
    "users.list": "listUsers",
    "users.edit": "editUser",
    "user.create":"createUser"
  },

  createUser: function(){ this.layout.radioToggle("visibility.createUser"); },
  listUsers:  function(){ this.layout.radioToggle("visibility.usersList" ); },
  editUser:   function(id){
    this.layout.radioToggle("visibility.editUser");
    var users = this.layout.get("users");
    if(!users.initialized){
      return users.once("reset", function(){
        this.layout.set("currentUser", users.get(id));
      }, this);
    }
    this.layout.set("currentUser", users.get(id));
  },

});
