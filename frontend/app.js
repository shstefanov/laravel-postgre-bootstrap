var bulk = require("bulk-require");
var App  = require("App");
require("styles"   );
require("resources");
require("templates");
var views       = bulk(__dirname+"/views",       ["**/*.js", "**/*.coffee"]);
var models      = bulk(__dirname+"/models",      ["**/*.js", "**/*.coffee"]);
var app         = require("app");
app.setupControllers();
app.router.bindRoutes();
app.router.startHistory();
console.log(app);
 
