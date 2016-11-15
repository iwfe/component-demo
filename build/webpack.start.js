var express = require('express'),
    path = require('path');

var isDev = process.env.NODE_ENV !== 'production';
var app = express();
var port = 3000;


app.use(express.static(path.resolve(__dirname,'../docs/')));
app.use(express.static(path.resolve(__dirname,'../dist/')));
var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('./webpack.conf.js');
var compiler = webpack(webpackDevConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));
app.use(webpackHotMiddleware(compiler));
// app.get('/*',function(req,res){
//     res.sendFile(path.resolve(__dirname,'../docs/index.html'));
// });

var bs = require('browser-sync').create();
app.listen(port, function(err){
    bs.init({
        open: false,
        ui: false,
        notify: false,
        proxy: 'localhost:3000',
        files: ['../docs/**','../src/**'],
        port: 8080
    });
    console.log(err);
});


    // app.use(express.static(path.join(__dirname, 'public')));
    // require('./server/routes')(app);
    // app.listen(port, function () {
    //     console.log('App (production) is now running on port 3000!');
    // });