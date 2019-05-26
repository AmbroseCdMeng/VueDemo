var express = require('express');
var router = express.Router();

//引入相关文件和代码包
var user = require('../models/user');
var movie = require('../models/movie');
var mail = require('../models/mail');
var comment = require('../models/comment');
var crypto = require('crypto');
const init_token = 'TKL02o';


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//用户登录接口
router.post('/login', function (req, res, next) {
//验证完整性
  if (!req.body.username || !req.body.password)
    res.json({status: 1, message: '用户名/密码不能为空'});
  else {
    user.findUserLogin(req.body.username, req.body.password, function (err, userSave) {
      //res.json(userSave.length);
      if (userSave.length === 0)
        res.json({status: 1, message: '用户名密码错误'});
      //通过 MD5 查看密码
      var token_after = getMD5Password(userSave[0]._id);
      res.json({status: 0, data: {token: token_after, user: userSave}, message: '登录成功'});
    })
  }
});

//用户注册接口
router.post('/register', function (req, res, next) {
  //验证
  if (!req.body.username || !req.body.password || !req.body.userMail || !req.body.userPhone) {
    //console.log(req.body);
    res.json({status: 1, message: '用户名/密码/邮箱/电话不能为空'});
  } else {
    user.findByUsername(req.body.username, function (err, userSave) {
      //res.json(userSave);
      if (userSave.length !== 0)
        res.json({status: 1, message: '用户已存在'});
      else {
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
        //res.json({status:0, data:register});
        //保存。并返回注册成功的信息
        register.save(function (err) {
          if (err)
            res.json({status: 1, message: err});
          else
            res.json({status: 0, message: '注册成功'});
        });
      }
    })
  }
});

//用户找回密码
router.post('/findPassword', function (req, res, next) {
  //验证邮箱和电话
  user.findUserPassword(req.body.username, req.body.userMail, req.body.userPhone, function (err, userFound) {
    if (userFound.length === 0)
      res.json({status: 1, message: '用户信息错误'});
    else {
      if (!req.body.repassword)
        res.json({status: 0, message: '新密码不能为空'});
      else
        user.update({_id: userFound[0]._id}, {password: req.body.repassword}, function (err, userUpdate) {
          if (err)
            res.json({status: 1, message: '修改失败', data: err});
          res.json({status: 0, message: '修改成功', data: userUpdate});
        });
    }
  })
});

//用户提交评论
router.post('/postComment', function (req, res, next) {
  const username = req.body.username ? req.body.username : '匿名';
  if (!req.body.movie_id || !req.body.context)
    res.json({status: 1, message: 'id / 内容不能为空'});
  else {
    let saveComment = new comment({
      username: username,
      movie_id: req.body.movie_id,
      context: req.body.context,
      check: 1
    });

    //保存
    saveComment.save(function (err) {
      if (err)
        res.json({status: 1, message: err});
      else
        res.json({status: 0, message: '评论成功'});
    })
  }
});

//用户点赞
router.post('/support', function (req, res, next) {
  if (!req.body.movie_id)
    res.json({status: 1, message: 'id 不能为空'});
  else
    movie.findById(req.body.movie_id, function (err, supportMovie) {
      if (supportMovie == null || supportMovie.length === 0)
        res.json({status: 1, message: 'id 有误'});
      else
        //res.json(supportMovie[0].movieNumSuppose);
        movie.updateOne({_id: req.body.movie_id}, {movieNumSuppose: supportMovie[0].movieNumSuppose + 1}, function (err) {
          if (err)
            res.json({status: 1, message: '点赞失败', data: err});
          else
            res.json({status: 0, message: '点赞成功'});
        })
    })
});

//用户下载
router.post('/download', function(req, res, next){
  if (!req.body.movie_id)
    res.json({status:1, message:'id 传递失败'});
  else{
    movie.findById(req.body.movie_id, function(err, downloadMovie){
      if (downloadMovie == null || downloadMovie.length === 0)
        res.json({status:1, message:'无效 id'});
      else
        movie.updateOne({_id:req.body.movie_id}, {movieNumDownload:downloadMovie[0].movieNumDownload + 1}, function (err) {
          if (err)
            res.json({status:1, message:'下载记录更新失败'});
          else
            res.json({status:1, message:'下载成功', data:downloadMovie});
        })
    });
  }
});

//用户发送邮件
router.post('/sendEmail', function (req, res, next) {
});

//用户显示邮件。其中 receive 参数值为 1 时是发送的内容，值为 2 时是收到的内容
router.post('/showEmail', function (req, res, next) {
});

//获取 MD5 的值。需要引入 crypto 加密组件
function getMD5Password(id) {
  var md5 = crypto.createHash('md5');
  var token_beform = id + init_token;
//res.json(userSave[0].id);
  return md5.update(token_beform).digest('hex');
}

module.exports = router;


//set DEBUG = book_service & npm start
//http://localhost:3000/

// F:\303.Vue\movie_view\book_service>supervisor bin/www
