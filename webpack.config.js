var fs                = require("fs");
var path              = require("path");
var webpack           = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var YAML              = require('yamljs');

require.extensions['.yml'] = function(module, filename) {
  var yaml_string = fs.readFileSync(filename, 'utf8').toString();
  module.exports = YAML.parse(yaml_string);
};

var bulk              = require('bulk-require');
var config            = JSON.stringify(bulk(path.join(__dirname,"config/frontend"), ['**/*.js','**/*.json', '**/*.yml']));

var assetsPathPattern = "public/dist/{destination}/[hash].[ext]";
var assetsOptions     = "url?limit=1&name="+assetsPathPattern+"&minetype=image/{ext}";

module.exports    = {
  // context:  "./", // The root folder, default - process.cwd()

  entry: {
    app:          "./frontend/app.js",
    test:         "./tests/test.js",
  },

  output: {
      filename:   "./public/dist/js/[name].bundle.js",
      publicPath: '/',
  },

  resolve: {
    alias: {
      "App":        path.join(process.cwd(), "frontend/lib/classes.js"),
      "helpers":    path.join(process.cwd(), "frontend/lib/helpers.js"),
      "app":        path.join(process.cwd(), "frontend/instances/app.js"),
      "config":     path.join(process.cwd(), "frontend/instances/config.js"),
      "api":        path.join(process.cwd(), "frontend/instances/api.js"),
      "resources":  path.join(process.cwd(), "frontend/resources/resources.js"),
      "data":       path.join(process.cwd(), "frontend/data/data.js"),
      "templates":  path.join(process.cwd(), "frontend/instances/templates.js"),
      "styles":     path.join(process.cwd(), "frontend/instances/styles.js")
    }
  },

  module:{

    loaders: [

      { test: /backbone.js$/,              loader:"imports?define=>false&_=>require('underscore')" },
      { test: /ractive.runtime.js$/,       loader:"imports?parse=>function(){}"          },

      { test: /\.json$/,                   loader: "json"                                },
      { test: /\.yml$/,                    loader: "json!yaml"                           },
      { test: /\.txt$/,                    loader: "raw"                                 },
      { test: /\.html$/,                   loader: "transform?html-minifyify!ractive"    },
      { test: /\.js$/,                     loader: "transform?bulkify"                   },
      { test: /\.js$/,                     loader: "source-map"                          },

      { test: /\.less$/,                   loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!autoprefixer!less-loader"   )},
      { test: /\.scss$/,                   loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!autoprefixer!sass-loader"   )},
      { test: /\.css$/,                    loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!autoprefixer"               )},

      { test: /\.gif/i,                    loader: assetsOptions.replace("{destination}", "images").replace("{ext}","gif" )  },
      { test: /\.jpe?g/i,                  loader: assetsOptions.replace("{destination}", "images").replace("{ext}","jpg" )  },
      { test: /\.png/i,                    loader: assetsOptions.replace("{destination}", "images").replace("{ext}","png" )  },
      { test: /\.svg/i,                    loader: assetsOptions.replace("{destination}", "images").replace("{ext}","svg" )  },

      { test: /\.woff/i,                   loader: assetsOptions.replace("{destination}", "fonts") .replace("{ext}","woff")  },
      { test: /\.eot/i,                    loader: assetsOptions.replace("{destination}", "fonts") .replace("{ext}","eot" )  },
      { test: /\.ttf/i,                    loader: assetsOptions.replace("{destination}", "fonts") .replace("{ext}","ttf" )  },

    ]
  },

  plugins: [

    new webpack.DefinePlugin({APP_CONFIG: config}),

    new ExtractTextPlugin("./public/dist/css/app.bundle.css", {
      allChunks: true
    })

  ]


};
