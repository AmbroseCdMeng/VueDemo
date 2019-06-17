var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

//清空基本配置的插件列表
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/dist/',
        //将入口文件重命名为唯一文件
        filename: '[name].[hash].js',
    },
    plugins: [
        new ExtractTextPlugin({
            //提取CSS，并重命名为唯一文件 为了避免静态资源的缓存
            filename: '[name].[hash].css',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        //压缩JS(webpack 4 之前卸载 plugins 中，webpack 4 之后不支持这种写法并且移除了该方法)
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        //提取模板 保存入口 html 文件
        new HtmlwebpackPlugin({
            filename: '../index_prod.html',
            template: './index.ejs',
            inject: false
        })
    ],
    optimization: {
        minimizer: [
            //压缩JSwebpack 4 之后需要安装 uglify-js & uglifyjs-webpack-plugin
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    },
})