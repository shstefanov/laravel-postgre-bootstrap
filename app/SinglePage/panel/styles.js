var bulk = require("bulk-require");
var styles = bulk(__dirname, [
  "../../../public/css/panel/**/**.css", 
  "../../../public/css/panel/*.less", 
  "../../../public/css/panel/*.scss"]);
console.log("styles: ", styles);
