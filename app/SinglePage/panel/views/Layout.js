var App       = require("App");
var View      = App.View;
var templates = App.Templates;

module.exports = View.extend({
  template:      templates.Layout,
  components: {
    UsersList:   require("./UsersList.js" ),
    EditUser:    require("./EditUser.js"  ),
    CreateUser:  require("./CreateUser.js"),
  }
});
