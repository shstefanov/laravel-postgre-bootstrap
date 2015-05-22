var Controller = require("App").Controller;
var controllers = require("controllers");

module.exports = Controller.extend("InterfaceController", {
  initialize: function(options){
    this.options = options;
    var data = require("data");
    var self = this;    
    data.users.bindAll("update", function(data){
      self.updateUser(this, data);
    });
  },

  routes: {
    
  },

  updateUser: function(user, data){
    controllers.UsersController.update(user.toJSON(), function(err, response){
      if(err) console.error(response);
      user.set(JSON.parse(response));
    });
  }

 

});
