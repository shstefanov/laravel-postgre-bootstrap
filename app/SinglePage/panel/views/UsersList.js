var App        = require("App");
var templates  = require("templates");
module.exports = App.View.extend({
  bindCollections: ["users"],
  template: templates.UsersList
});
