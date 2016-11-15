// Karma configuration
// Generated on Mon Nov 14 2016 12:23:13 GMT+0800 (CST)

var path = require('path');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
webpackConfig = {
    resolve: {
        extensions: ['', '.js', '.vue', '.json','.scss'],
    },
    module:{
        loaders:[{
            test:/\.js$/,
            loader:'babel',
            query:{
                compact: false,
                presets: ["es2015"],
                // plugins: ["es6-promise"]
            },
            exclude:[
               path.resolve( __dirname, '../test' ), path.resolve( __dirname, '../node_modules' )
            ]
        }]
    }
};


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    // basePath: './',

    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','sinon-chai','vue-component','commonjs'],
    plugins: [
        require("karma-vue-component"),
        require("karma-webpack"),
        require("karma-mocha"),
        require("karma-phantomjs-launcher"),
        require("karma-chrome-launcher"),
        // require("karma-requirejs"),
        require("karma-commonjs"),
        require("karma-babel-preprocessor"),
        require("karma-sinon-chai"),
    ],


    // list of files / patterns to load in the browser
    files: [
    //   {pattern: 'src/js/*.js', included: true},
    //   {pattern: 'src/js/**/*.js', included: true},
    //   {pattern: 'src/js/**/*.vue', included: true},
        'src/js/test-index.js',
        'test/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
      'node_modules'
    ],
    
    client: {
        chai: {
            includeStack: true
        }
    },
    
    
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/js/index.js':['webpack','babel','commonjs'],
        'test/testSpec.js':['webpack','babel','commonjs'],
    },

    "babelPreprocessor": {
        options:{
            sourceMap: "inline"
        },
        filename: function(file) {
            return file.originalPath.replace(/\.js$/, ".es5.js");
        },
        sourceFileName: function(file) {
            return file.originalPath;
        }
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['PhantomJS','Chrome'],
    browsers: ['PhantomJS'],
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    webpack: webpackConfig,
    webpackMiddleware:{
      noInfo:false,
      stats: 'errors-only'
    }
  })
}
