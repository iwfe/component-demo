var path = require('path'),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackNotifierPlugin = require('webpack-notifier');

var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
module.exports = {
    devtool: 'source-map',
    watch: true,
    debug: true,
    entry: {
        main: ['./docs/index.js', hotMiddlewareScript]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.json','.scss'],
        alias: {
            'js': path.resolve(__dirname, '../src/js'),
            'vue': 'vue/dist/vue.common.js'
        }
    },
    module: {
        loaders: [{
                test: /\.(js|vue)$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // sourcemap也是独立的文件？
            { 
                test: /\.scss$/i, 
                loader: ExtractTextPlugin.extract(['css','sass'])
            }, 
            {
               test: /\.css$/,
               loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
            }, 
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url?limit=25000"
            }, 
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                loader: "file-loader?name=[name]_[sha512:hash:base64:7].[ext]"
            }, 
            {
                test: /\.html/,
                loader: "html-loader?" + JSON.stringify({
                    minimize: false,
                    attrs: false
                })
            }, 
            {
                test: /\.json$/,
                loader: "json"
            },
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new WebpackNotifierPlugin({
            title: '编译成功',
            alwaysNotify: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime', 'transform-object-rest-spread'],
        comments: false
    }
};
