// express 实例
var express = require('express');
// 路由引入
var router = express.Router();

// MongoDB 中间件 mongoose 引入
var mongoose = require('mongoose');

/*引入 movie 相关*/
var recommend = require('../models/recommend');
var movie = require('../models/movie');
var article = require('../models/article');
var user = require('../models/user');


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


/*定义显示相关路由*/
/*主页推荐大图等*/
router.get('/showIndex', function (req, res, next) {
  recommend.findAll(function (err, getRecommend) {
    res.json({status: 0, message: '获取成功', data: getRecommend});
  })
});

/*主页排行榜*/
router.get('/showRanking', function (req, res, next) {
  movie.find({movieMainPage: true}, function (err, mainMovie) {
    res.json({status: 0, message: '获取主页成功', data: mainMovie});
  })
});

/*文章列表*/
router.get('/showArticle', function (req, res, next) {
  article.findAll(function (err, articles) {
    res.json({status: 0, message: '获取文章列表', data: articles});
  })
});

/*文章内容*/
router.post('/articleDetail', function (req, res, next) {
  if (!req.body.article_id)
    res.json({status: 1, message: '文章 id 不能为空'});
  else
    article.findByArticleId(req.body.article_id, function (err, getArticle) {
      res.json({status: 0, message: '获取成功', data: getArticle});
    })
});

/*用户个人信息*/
router.post('/showUser', function (req, res, next) {
  if (!req.body.user_id)
    res.json({status: 1, message: '用户 id 不能为空'});
  else
    user.findById(req.body.user_id, function (err, getUser) {
      res.json({
        status: 0, message: '获取成功', data: {
          user_id: getUser._id,
          username: getUser.username,
          userMail: getUser.userMail,
          userPhone: getUser.userPhone,
          userStop: getUser.userStop,
        }
      })
    })
});


module.exports = router;


//set DEBUG = book_service & npm start
//http://localhost:3000/
