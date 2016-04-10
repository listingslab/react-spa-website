/*	
	listingslab webpack configuration file
	compiles the react application using /react/App.jsx as the entry point
*/

"use strict";

const clear    = require('clear');
const colors    = require('colors');
const path = require('path');

clear ();
console.log('Running Webpack'.cyanBG);

const PATHS = {
  app: path.join(__dirname, 'react/App.jsx'),
  build: path.join(__dirname, 'public')
};

module.exports = {
	
  entry: {
    app: PATHS.app
	},

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: PATHS.build,
    filename: 'react.js'
  },

  module: {

    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ],

    loaders: [
      
      { 
        test: /\.css$/, 
        loader: 'style!css' 
      },

      {
        test: /\.jsx?$/,
        loader: ['babel'],
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  },

  //externals: {
    // "node/npm module name": "name of exported library variable"
    //"react": "React",
    // "react-dom": "ReactDOM"
  //}

}
