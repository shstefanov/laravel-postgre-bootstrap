var App = require("App");

module.exports = {

  visibility: {
    usersList:   false,
    editUser:    false,
    createUser:  false
  },

  currentUser:   undefined,
  users:         new App.Models.Users.UsersCollection()
  
};
