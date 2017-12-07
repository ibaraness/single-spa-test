const path = require('path');
const webpack = require('webpack');
const helpers = require('./config/helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');


module.exports = {
    /**
     * The entry point from which Webpack start building the bundle
     */
    entry: {
        polyfills:"./src/polyfills.ts",
        main:"./root_application.js"
    }, 
    resolve: {
        /**
         * An array of extensions thast should be discoverable by the module loader
         */
        extensions: ['.js', '.ts']
    },
    /**
     * The output directory and file name(s) of the bundle
     */
    output: {
        path: path.resolve(__dirname, 'dist'), //output directory
        filename: "[name].js" // name of generated bundle
    },
    module: {
        /**
         * Different loader rules that makes webpack able to load other files types different from JavaScript
         */
      rules: [
          /**
           * css-loader: The css-loader loads css files and returns css code.
           * style-loader: The style-loader adds this css code as a style element to the DOM
           */
          {
              test: /\.css$/,
              loader: ["style-loader", "css-loader"]
          },
          /**
           * awesome-typescript-loader: transpile typescript to javascript
           * angular2-template-loader: allow us to load templates and styles with relative path:
           *    ...
           *    @Component({
           *        selector: 'app-component',
           *        templateUrl: './relative-path-to-template/template.html',
           *        styleUrls: './relative-path-to-styles/style.scss'
           *    })
           *    ...
           */
          {
              test: /\.ts$/,
              loaders: ["awesome-typescript-loader", 'angular2-template-loader']
          },
          /**
           * tslint-loader: run lint on TypeScript files before transpling (enforce: "pre")
           */
          {
              test: /\.ts$/,
              enforce: "pre",
              loader: "tslint-loader"
          },
          /**
           * raw-loader: let us load scss files as strings
           * sass-loader: compiles Sass to CSS
           */
          {
              test: /\.scss$/,
              loader: ["raw-loader", "sass-loader?sourceMap"]
          },
          {
              test: /\.html$/,
              loader: "html-loader?minimise=true"
          }
      ]
    },
    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /@angular(\\|\/)core(\\|\/)/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),
        /**
         * Correctly inject complied budle JS files to HTML
         */
        new HtmlWebpackPlugin({
            template: "root.html",
            inject: "body",
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['./src/angular2App/style.css'],
            append: true
        })
    ],
    /**
     * Instructs webpack to generate source-maps
     */
    devtool:"source-map",
    /**
     * Required when using webpack-dev-server with angular routing
     */
    devServer: {
        historyApiFallback:true
    }
};