var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');


// export default config = {
//     entry: './main.js',
//     output: {
//         path: path.join(__dirname, './dist'),
//         publicPath: '/dist/',
//         filename: 'main.js',
//         chunkFilename: '[name].chunk.js'
//     },
// }

var config = {
    entry: './main.js',
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js',
        //chunkFilename: '[name].chunk.js'
    },
    /*模块处理配置*/
    module: {
        /*处理规则*/
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: 'css-loader',
                        fallback: 'vue-style-loader'
                    })
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader',
                fallback: 'style-loader'
            })
        }, ]
    },
    plugins: [
        /* 提取整合 css 文件 */
        //new ExtractTextPlugin("main.css"),
        new VueLoaderPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            //allChunks: true
        })
    ],
}

module.exports = config;