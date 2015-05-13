var App        = require("App");
var templates  = require("templates");
module.exports = App.View.extend({
  isolated: true,
  bindModels: ["currentUser"],
  template: templates.EditUser,
  oninit: function(){
    this.observe("currentUser", function(newVal){
      this.set(newVal? {username: newVal.get("username"), email: newVal.get("email")} : {username: "", email: ""});
    });

    this.on("submit", function(event){

      event.original.preventDefault();

      console.log( this.root.get("users"));


      this.get("currentUser").trigger("update", this.fetch({
        username: "username",
        email:    "email"
      }));
    });
  }
});
