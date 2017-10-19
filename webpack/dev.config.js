const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./base.config.js');


module.exports = merge(baseConfig, {
    devtool: '#source-map',

    entry: [
        'webpack-hot-middleware/client?reload=true'
    ],

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'eslint-loader'
            }
        ],
    },
});