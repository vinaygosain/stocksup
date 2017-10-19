var path = require('path');

module.exports = {
    entry: [
        "babel-polyfill",
        path.resolve(__dirname, '../src/index')
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                include: path.join(__dirname, '../src'),
                loaders: ['babel-loader']
            },
            {
                test: /(\.css)$/,
                loaders: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader'
            }
        ]
    }
};
