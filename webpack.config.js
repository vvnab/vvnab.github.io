var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './assets/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '.')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'fils-loader',
            options: {
                outputPath: 'fonts/'
            }
        }, {
            test: /\.(jpg|png|svg)$/,
            loader: 'file-loader',
            options: {
                outputPath: 'images/'
            }
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'assets/index.html'
    })],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        // hot: true,
        host: "localhost",
        inline: true,
        // compress: true,
        port: 9000
    }
};