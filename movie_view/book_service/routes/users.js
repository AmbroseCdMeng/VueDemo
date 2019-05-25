var express = require('express');
var router = express.Router();

//引入相关文件和代码包
var user = require('../models/user');
var crypto = require('crypto');
var movie = require('../models/movie');
var mail = require('../models/mail');
var common = require('../models/comment');
const init_token = 'TKL02o';


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//用户登录接口
router.post('/login', function (req, res, next) {

});

//用户注册接口
router.post('/register', function (req, res, next) {
  //验证
  debugger;
  if (!req.body.username || !req.body.password || !req.body.userMail || !req.body.userPhone) {
    //console.log(req.body);
    res.json({status: 1, message: '用户名/密码/邮箱/电话不能为空'});
  }

  user.findByUsername(req.body.username, function (err, userSave) {
    //res.json(userSave.length);
    if (userSave.length !== 0){
      res.json({status: 1, message: '用户已存在'});
    }else{
      //构造用户实例
      var register = new user({
        username: req.body.username,
        password: req.body.password,
        userMail: req.body.userMail,
        userPhone: req.body.userPhone,
        userAdmin: 0,
        userPower: 0,
        userStop: 0,
      });
      //res.json({status:0, data:register})
      //保存。并返回注册成功的信息
      register.save(function (err) {
        if(err)
          res.json({status:1, message:err});
        else res.json({status: 0, message: '注册成功'});
      })
    }
  })
});

//用户提交评论
router.post('/postComment', function (req, res, next) {
});

//用户点赞
router.post('/support', function (req, res, next) {
});

//用户找回密码
router.post('/findPassword', function (req, res, next) {
});

//用户发送邮件
router.post('/sendEmail', function (req, res, next) {
});

//用户显示邮件。其中 receive 参数值为 1 时是发送的内容，值为 2 时是收到的内容
router.post('/showEmail', function (req, res, next) {
});

//获取 MD5 的值
function getMD5Password(id) {

}

module.exports = router;




//set DEBUG = book_service & npm start
//http://localhost:3000/

// F:\303.Vue\movie_view\book_service>supervisor bin/www
