var path = require("path");

module.exports = {
  watch: true,
  alias: {
    templates:    path.join(__dirname, "templates.js"),               // required
    routes:       path.join(__dirname, "routes.json"),                // required

    data:         path.join(__dirname, "data/data.js"),               // custom
    resources:    path.join(__dirname, "resources/resources.js"),     // custom
  },
  watch: true,
  loaders: [
    //{test: /regex/, loader: "loaderOptions" }
  ],
  plugins: []
};
