var bulk = require("bulk-require");
var AppController = require("../controllers/AppController.js");
module.exports = new AppController(bulk(__dirname+"/../controllers", "*.js"),{
  config: require("config"),
  routes: require("../routes.json")
});
