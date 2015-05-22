var AppController = require("App").AppController;
var helpers           = require("helpers");
var api               = require("api");

var controllers       = require("controllers");

module.exports = AppController.extend("AppController", {
  getData: function(){
    var data = require("data");
    helpers.amap({
      users: function(cb){
        controllers.UsersController.index(function(err, response){
          if(err) return cb(err);
          data.users.initialized = true;
          data.users.reset(response);
        });
      }
    }, null, function(err){
      if(err) return console.error(err);
    });
  }
});
