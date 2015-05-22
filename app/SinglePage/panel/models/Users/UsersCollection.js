var App = require("App");
var controllers = require("controllers");

module.exports = App.ExtendedCollection.extend("UsersCollection", {
  model: require("./UserModel.js"),
  create: function(data, cb){
    self = this, app = require("app");
    if(data.password !== data.confirm) return cb("Password do not match");
    controllers.UsersController.store(data, function(err, response){
      if(err) return cb(response);
      var userData = JSON.parse(response);
      self.add(userData);
      cb();
      app.router.navigate("users/"+userData.id, true);
    });
  }
});
