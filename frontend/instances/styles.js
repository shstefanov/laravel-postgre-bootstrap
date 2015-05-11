var bulk = require("bulk-require");

console.log(bulk("../../public/css", ['**/*.css','**/*.less','css/**/*.sass']));
