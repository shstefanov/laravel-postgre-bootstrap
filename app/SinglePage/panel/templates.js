var bulk = require("bulk-require");
module.exports = bulk(__dirname+"/templates",      ["**/*.html"]);
