var Backbone          = require("backbone");
var Class             = require("./Class.js");

var BaseModel         = Backbone.Model.extend({
  idAttribute: require("config").models.id_attribute
});

BaseModel.__className = "Model";
BaseModel.extend      = Class.extend;
module.exports        = BaseModel;
