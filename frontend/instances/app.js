var bulk = require("bulk-require");
var App = require("App");
module.exports = new App.AppController(bulk(__dirname+"/../controllers", "*.js"),{
  config: require("config"),
  routes: require("../routes.json")
});
