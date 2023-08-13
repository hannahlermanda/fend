const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { GenerateSW } = require('workbox-webpack-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");


module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),

        new GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            swDest: 'custom-service-worker.js',
          }),

        new NodePolyfillPlugin(),
    ]
}
