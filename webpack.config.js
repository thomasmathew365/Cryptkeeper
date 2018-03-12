const path = require('path');
const webpack = require('webpack');
module.exports = {
		entry: ['./Development/Js/App.js'],
		output: {
    	path: path.resolve(__dirname, 'public'),
    	filename: 'bundle.js',
    	publicPath: '/public/'
  	},
    "module" : {
			rules: [
            {test: /\.js$/ , loader:'babel-loader', exclude: '/node_modules/'}
			]
    }
}
