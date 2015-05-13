var Controller = require("App").Controller;
var app;
var api = require("api");

module.exports = Controller.extend("InterfaceController", {
  initialize: function(options, _app){
    app = _app;
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
    api.ajax({
      method: "PUT",
      url:    "/users/"+user.id,
      data:   data
    }, function(err, response, xhr){
      if(err) console.error(response);
      user.set(JSON.parse(response));
    });
  }

 

});
