var App       = require("App");
var View      = App.View;
var templates = App.Templates;

module.exports = App.View.extend({
  bindCollections: ["users"],
  template: templates.UsersList
});
