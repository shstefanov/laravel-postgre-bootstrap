var bulk = require("bulk-require");
var App  = require("App");
App.Controllers = bulk(__dirname+"/controllers", ["*.js"]);
console.log(App);


require("./styles.js");
// require("resources");
// require("templates");
// App.Views       = bulk(__dirname+"/views",       ["**/*.js", "**/*.coffee"]);
// App.Models      = bulk(__dirname+"/models",      ["**/*.js", "**/*.coffee"]);
// var data        = require("data");
// var app         = require("app");
// app.setupControllers();
// app.router.bindRoutes();
// app.router.startHistory();
// app.getData();
