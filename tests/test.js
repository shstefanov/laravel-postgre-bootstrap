// require("jasminify/jasmine.css");
var _              = require("underscore");
var bulk           = require('bulk-require');
var jasminify      = require("jasminify");

var helpers        = require("helpers");

var config         = require("config");
helpers.deepExtend(config, config.test || {});

var App            = require("App");
App.Views          = bulk(__dirname+"/../frontend/views",       ["**/*.js", "**/*.coffee"]);
App.Models         = bulk(__dirname+"/../frontend/models",      ["**/*.js", "**/*.coffee"]);
App.Controllers    = bulk(__dirname+"/../frontend/controllers", ["**/*.js", "**/*.coffee"]);

var jasmine        = jasminify(window, function() {
  return document.getElementById(config.jasmine.output_container);
});

document.body.onload = function(){
  var someTests = [
    // Leave array empty to run all specs in all folders
    // bulk(__dirname, 'frontend/**/*.*' ),           // run all tests in specific folder
    // require("./Components/BaseRactiveComponent.js"),  // run only specific file
  ];

  someTests.length === 0 ? bulk(__dirname, '*/**/*.js' ): null;
  jasmine.getEnv().execute();
}
