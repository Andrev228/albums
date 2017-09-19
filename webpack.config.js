let webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //переместит css в отдельный файл

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public/',
        filename: 'javascripts/custom/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /public/]
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader',
                exclude: [/node_modules/, /public/]
            }, {
                test: /\.gif$/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            }, {
                test: /\.jpg$/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            }, {
                test: /\.png$/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            }, {
                test: /\.svg/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            }, {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /public/],
                query : {
                    presets:['react']
                }
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }]
    },
    plugins: [
        new ExtractTextPlugin('stylesheets/style.css', {            //все css в проекте соединит в style.css
            allChunks: true
        })
    ]
};