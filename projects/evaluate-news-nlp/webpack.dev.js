const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");


module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
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
            },

            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'images/[name].[ext]',
                    },
                  },
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),

        new NodePolyfillPlugin(),
        
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', 
    }
}
