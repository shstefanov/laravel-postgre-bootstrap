var App = require("App");
module.exports = App.Model.extend("User", {
  defaults: {
    username:   null,
    password:   null,
    email:      null,
    created_at: null,
    updated_at: null
  }
});
