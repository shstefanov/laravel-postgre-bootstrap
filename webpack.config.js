var fs                = require("fs");
var path              = require("path");
var webpack           = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var bulk              = require('bulk-require');
var config            = JSON.stringify(bulk(__dirname, ['config/frontend/**/*.js','config/frontend/**/*.json']).config.frontend);

var imagesPathPattern = "public/dist/images/[hash].[ext]";
var imagesOptions     = "url?limit=1&name="+imagesPathPattern+"&minetype=image/{ext}";

module.exports    = {
  // context:  "./", // The root folder, default - process.cwd()

  entry: {
    app:    "./frontend/app.js",
    test:   "./tests/test.js",
  },

  output: {
      filename: "./public/dist/js/[name].js",
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

      { test: /\.less$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!autoprefixer!less-loader")},
      { test: /\.scss$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!autoprefixer!sass-loader")},
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!autoprefixer")},


      { test: /\.gif/i,                    loader: imagesOptions.replace("{ext}","gif")  },
      { test: /\.jpe?g/i,                  loader: imagesOptions.replace("{ext}","jpg")  },
      { test: /\.png/i,                    loader: imagesOptions.replace("{ext}","png")  },
      { test: /\.svg/i,                    loader: imagesOptions.replace("{ext}","svg")  },

    ]
  },

  plugins: [

    new webpack.DefinePlugin({APP_CONFIG: config}),

    new ExtractTextPlugin("./public/dist/css/victus.bundle.css", {
      allChunks: false
    })

  ]


};
