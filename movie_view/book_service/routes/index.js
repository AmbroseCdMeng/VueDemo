// express 示例
var express = require('express');
// 路由引入
var router = express.Router();

// MongoDB 中间件 mongoose 引入
var mongoose = require('mongoose');

//定义路由
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});
//定义测试路由
router.get('/mongooseTest', function (req, res, next) {
  /* 连接 mongodb。 参数：1、数据库完整地址（含数据库名称）；2、连接配置（对象）*/
  mongoose.connect('mongodb://localhost/pets', {useNewUrlParser: true});
  mongoose.Promise = global.Promise;

  /* 实例化 Cat 数据集。调用 mongoose 的 model() 方法创建数据集。参数：1、名称；2、结构 */
  var Cat = mongoose.model('Cat', {name: String});
  /* 对于 Cat 数据集创建对象。传入 name 属性 */
  var tom = new Cat({name: 'Tom'});
  /* 通过 mongoose 中创建的 model 自带的 save 方法保存内容。包含一个回调方法 */
  tom.save(function (err) {
    if (err) console.log(err);
    else console.log('success insert');
  });

  /* 在浏览器中返回一个提示信息 */
  res.send('数据库连接测试');
});

module.exports = router;


//set DEBUG = book_service & npm start
//http://localhost:3000/
