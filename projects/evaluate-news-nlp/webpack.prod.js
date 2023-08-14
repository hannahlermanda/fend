const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { GenerateSW } = require('workbox-webpack-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
    entry: './src/client/index.js', // Entry point for your application
    mode: 'production', 
    output: {
        filename: 'bundle.js', // Output file name for your bundled code
        path: path.resolve(__dirname, 'dist'), // Output directory
        libraryTarget: 'var', // Export the bundled code as a variable
        library: 'Client' // Name of the exported variable
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader' // Use Babel to transpile JavaScript files
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // Process CSS files
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'] // Process SCSS files
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html', 
            filename: './index.html'
        }),
        new GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            swDest: 'custom-service-worker.js' // Output file for the generated service worker
        }),
        new NodePolyfillPlugin() 
    ]
};