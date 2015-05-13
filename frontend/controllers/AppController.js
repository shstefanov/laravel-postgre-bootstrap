var BaseAppController = require("App").AppController;
var helpers           = require("helpers");
var api               = require("api");

module.exports = BaseAppController.extend("AppController", {
  getData: function(){
    var data = require("data");
    helpers.amap({
      users: function(cb){
        api.ajax({method:"GET", url:"/users"}, function(err, response, xhr){
          if(err) return cb(xhr.responseText);
          data.users.initialized = true;
          data.users.reset(JSON.parse(response));
        });
      }
    }, null, function(err){
      if(err) return console.error(err);
    });
  }
});
