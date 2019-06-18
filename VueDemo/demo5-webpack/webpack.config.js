var path = require("path");

/* 配置文件中导入插件 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var VueLoaderPlugin = require('vue-loader/lib/plugin');



var config = {
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js',
        chunkFilename: '[name].chunk.js'
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
            },
            //生产环境添加配置 用来支持链接、图片、文件、字体等
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                //如果文件小于 1KB 则以 base64 形式加载，不生成文件
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    plugins: [
        /* 提取整合 css 文件 */
        //new ExtractTextPlugin("main.css"),
        new VueLoaderPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ],
};

module.exports = config;





// export default config = {

// }