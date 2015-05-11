
var App = require("App");
var bulk = require("bulk-require");

console.log(bulk(__dirname+"/../public/css", ['**/*.css','**/*.less','css/**/*.sass']));

console.log(require("config"));
