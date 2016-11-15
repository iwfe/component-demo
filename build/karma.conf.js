// Karma configuration
// Generated on Tue Nov 01 2016 14:16:27 GMT+0800 (CST)

var webpack = require('webpack')

var webpackConfig = {
  // resolve: {
  //   alias: Object.assign({}, alias, {
  //     entities: './entity-decoder'
  //   })
  // },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query:{
            presets:['es2015']
        },
        exclude: /node_modules/
      }
    ]
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: '"development"',
  //       TRANSITION_DURATION: process.env.SAUCE ? 200 : 50
  //     }
  //   })
  // ],
  devtool: '#inline-source-map'
}


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs','commonjs'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: '../src/js/test.js', included: true},
    //   {pattern: '../src/js/*.js', included: false},
    //   {pattern: '../test/*Spec.js', included: false},
      {pattern: '../test/*.spec.js', included: true}
    //   {pattern: '../test/*.js', included: false}
    ],
    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-commonjs',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-requirejs',
      'karma-babel-preprocessor',
      'karma-phantomjs-launcher'
    ],
    webpack: webpackConfig,  //webpack相关配置
    // 高雷webpack-dev-middleware 的相关参数
    webpackMiddleware: {
        noInfo: true
    },
    // list of files to exclude
    exclude: [
      '../dist',
      '../docs',
      '../node_modules'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        // '../test/testSpec.js': ['webpack', 'sourcemap']
        '../test/testSpec.js': ['webpack']
        // 'test/**/*_test.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha','progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    /**
       * 日志等级
       * 可能的值：
       * config.LOG_DISABLE //不输出信息
       * config.LOG_ERROR    //只输出错误信息
       * config.LOG_WARN //只输出警告信息
       * config.LOG_INFO //输出全部信息
       * config.LOG_DEBUG //输出调试信息
       */
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
//  'karma-chai', 'karma-sinon', 'karma-chai-sinon', 'karma-coverage', 'karma-jasmine',, 'karma-chrome-launcher', 'karma-babel-preprocessor'
    // plugins: ['karma-mocha','karma-phantomjs-launcher'],
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome'],
    browsers: ['PhantomJS'],
 
    // you can define custom flags 
    // customLaunchers: {
    //   'PhantomJS_custom': {
    //     base: 'PhantomJS',
    //     options: {
    //       windowName: 'my-window',
    //       settings: {
    //         webSecurityEnabled: false
    //       },
    //     },
    //     flags: ['--load-images=true'],
    //     debug: true
    //   }
    // },
    // 
    // phantomjsLauncher: {
    //   // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
    //   exitOnResourceError: true
    // },
    // 
    // phantomjsLauncher: {
    //   // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
    //     exitOnResourceError: true
    // },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
