var bulk        = require("bulk-require");
var App         = require("App");

require("controllers");
require("./styles.js");

App.Templates   = bulk(__dirname+"/templates",   ["**/*.js", "**/*.html"  ]);
App.Models      = bulk(__dirname+"/models",      ["**/*.js", "**/*.coffee"]);
App.Views       = bulk(__dirname+"/views",       ["**/*.js", "**/*.coffee"]);
App.Controllers = bulk(__dirname+"/controllers", ["**/*.js", "**/*.coffee"]);

// require("resources");
// var data        = require("data");
var app    = window.app     = require("app");

app.init({
  config: require("config"),
  routes: require("./routes.json"),
  data:   require("./data/data.js")
}, function(){
  
  this.getData();
  
});
// app.setupControllers();
// app.router.bindRoutes();
// app.router.startHistory();
