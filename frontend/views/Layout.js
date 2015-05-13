var View      = require("App").View;
var templates = require("templates");

module.exports = View.extend({
  template: templates.Layout,
  components: {
    UsersList:   require("./UsersList.js" ),
    EditUser:    require("./EditUser.js"  ),
    CreateUser:  require("./CreateUser.js"),
  }
});
