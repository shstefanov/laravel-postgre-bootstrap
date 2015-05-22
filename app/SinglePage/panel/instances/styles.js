var bulk = require("bulk-require");
module.exports = bulk(__dirname+"/../../public/css", ['**/*.css','*.less','*.scss']);

