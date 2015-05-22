var App = require("App");

module.exports = App.ExtendedCollection.extend("UsersCollection", {
  model: require("./UserModel.js"),
  create: function(data, cb){
    var api = require("api"), self = this, app = require("app");
    if(data.password !== data.confirm) return cb("Password do not match");
    api.ajax({method: "POST", url:"/users", data: data}, function(err, response, xhr){
      if(err) return cb(response);
      var userData = JSON.parse(response);
      self.add(userData);
      cb();
      app.router.navigate("users/"+userData.id, true);
    });
  }
});
