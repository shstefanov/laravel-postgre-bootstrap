var bulk = require("bulk-require");
var App  = require("App");

App.Models      = bulk(__dirname+"/models",      ["**/*.js", "**/*.coffee"]);
App.Views       = bulk(__dirname+"/views",       ["**/*.js", "**/*.coffee"]);
App.Controllers = bulk(__dirname+"/controllers", ["**/*.js", "**/*.coffee"]);

require("controllers");
require("./styles.js");

// require("resources");
// require("templates");
// var data        = require("data");
// var app         = require("app");
// app.setupControllers();
// app.router.bindRoutes();
// app.router.startHistory();
// app.getData();
