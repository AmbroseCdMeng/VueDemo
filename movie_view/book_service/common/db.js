/*
* 新建一个用户连接数据库的公用模块
* */

//引入 mongoose 中间件
var mongoose = require('mongoose');
var url = 'mongodb://localhost/movieServer';

//连接数据库
mongoose.connect(url, {useNewUrlParser:true});

module.exports = mongoose;
