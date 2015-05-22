var App        = require("App");
var templates  = require("templates");
module.exports = App.View.extend({
  isolated: true,
  bindModels: ["currentUser"],
  template: templates.CreateUser,
  oninit: function(){
    this.on("submit", function(event){
      event.original.preventDefault();
      var self = this;
      this.root.get("users").create( this.fetch({
        username: "username",
        email:    "email",
        password: "password",
        confirm:  "confirm"
      }), function(err){ 
        self.set(err? {error: err} : {error:"",username:"",email:"",password:"",confirm:""}); 
      });
    });
  }
});
