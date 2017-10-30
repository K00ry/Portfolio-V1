
const webpack = require('webpack');
const path = require('path');
module.exports = {

    //define an entry point

    entry: {
        app: './js/main.js',
        // bootstrap: bootstrapConfig
    },

    //define output

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',

        // path: './dist',
        // filename: 'bundle.js'
    },
  
        module: {
        rules: [
            { test: /\.js/, use: 'imports-loader?define=>false' }, 
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // }
            
        // loaders: [
        //     { test: /\.js/, loader: 'imports?define=>false' }
        ]
    },
    plugins: [
        
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })

    ]
}

