var bulk = require("bulk-require");
module.exports = bulk(__dirname+"/../templates", ['**/*.js','**/*.html']);
