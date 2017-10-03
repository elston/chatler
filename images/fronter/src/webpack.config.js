var webpack = require('webpack');

/*
 * Default
 */
var config = {

    // ****************************************
    // ..main
    // ****************************************    
    // ..
    devtool: 'inline-source-map',
    // ..
    entry: [
        'babel-polyfill',
        __dirname + "/app",
    ],
    // ...
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    // ****************************************
    // ..loaders
    // ****************************************    
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: ['transform-decorators-legacy' ]
            }
        // },{
              // test: /\less$/,
              // loader: "style!css!less"
        },{
            test: /\.scss$/,
            loaders: [ 'style', 'css', 'sass' ]
        }]
    },

    // ****************************************
    // ..devServer
    // ****************************************    
    devServer: {
        // ...
        inline: true,
        colors: true,
        historyApiFallback: true,
        contentBase: __dirname + '/',

        // ...
        host: process.env.DEVSERVER_HOST,
        port: process.env.DEVSERVER_PORT,

        // ..
        proxy: {
          '/api*': {
            target: process.env.API_URL_WEBPACK,
            secure: false
          }
        }        
    },


    // ****************************************
    // ..plugins
    // ****************************************    
    plugins: [
        new webpack.DefinePlugin({
            PROCESS_ENV_API_URL: JSON.stringify(process.env.API_URL),
            PROCESS_ENV_CHAT_URL: JSON.stringify(process.env.CHAT_URL),            
        })    
    ],

}


// /*
//  * production
//  */
// if (process.env.NODE_ENV === 'production') {

//     // ****************************************
//     // ..main
//     // ****************************************        
//     config.devtool = false;


//     // ****************************************
//     // ..plugins
//     // ****************************************            
//     config.plugins = [

//         // ..1. OccurenceOrderPlugin
//         new webpack.optimize.OccurenceOrderPlugin(),

//         // ..2. UglifyJsPlugin
//         new webpack.optimize.UglifyJsPlugin({
//             comments: false
//         }),

//         // ..3. DefinePlugin
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: JSON.stringify('production')
//             }
//         })
//     ];
// };


/*
**
*/
module.exports = config;
