var bulk = require("bulk-require");
var App  = require("App");
require("styles"   );
require("resources");
require("templates");
App.Views       = bulk(__dirname+"/views",       ["**/*.js", "**/*.coffee"]);
App.Models      = bulk(__dirname+"/models",      ["**/*.js", "**/*.coffee"]);
require("data");
var app         = require("app");
app.setupControllers();
app.router.bindRoutes();
app.router.startHistory();
console.log(app);
 
