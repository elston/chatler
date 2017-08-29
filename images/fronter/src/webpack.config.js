var webpack = require('webpack');

/*
 * Default
 */
var config = {

    // ****************************************
    // ..main
    // ****************************************    
    devtool: 'inline-source-map',
    entry: [
        __dirname + "/app/App.jsx"
    ],
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
                presets: ['es2015', 'react']
            }
        }]
    },

    // ****************************************
    // ..devServer
    // ****************************************    
    devServer: {
        inline: true,
        colors: true,
        historyApiFallback: true,
        contentBase: __dirname + '/public/',
        // ...
        host: process.env.DEVSERVER_HOST,
        port: process.env.DEVSERVER_PORT,
        // ..
        '/api/**': {
            target: 'http://backer:8000',
            secure: false
        },        
    },
}


/*
 * production
 */
if (process.env.NODE_ENV === 'production') {

    // ****************************************
    // ..main
    // ****************************************        
    config.devtool = false;


    // ****************************************
    // ..plugins
    // ****************************************            
    config.plugins = [

        // ..1. OccurenceOrderPlugin
        new webpack.optimize.OccurenceOrderPlugin(),

        // ..2. UglifyJsPlugin
        new webpack.optimize.UglifyJsPlugin({
            comments: false
        }),

        // ..3. DefinePlugin
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ];
};


/*
**
*/
module.exports = config;
