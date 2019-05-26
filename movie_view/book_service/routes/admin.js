var express = require('express');
var router = express.Router();

//添加电影功能
router.post('./movieAdd', function (req, res, next) {
  if (!req.body.username || !req.body.token || !req.body.id || !req.body.movieName || !req.body.movieIma || !req.body.movieDownload) {
    res.json({status: 1, message: '都不能为空'});
    return;
  }
  if (!req.body.movieMainPage)
    var movieMainPage = false;
  //var check = checkAdminPower(req.body.username, req.body.token, req.body.id);
  var check = {error: 0, message: ''};
  if (check.error === 0) {
    user.findByUsername(req.body.username, function (err, findUser) {
      if (findUser[0].userAdmin && !findUser[0].userStop) {
        var saveMovie = new movie({
          movieName: req.body.movieName,
          movieImg: req.body.movieImg,
          movieVideo: req.body.movieVideo,
          movieDownload: req.body.movieDownload,
          movieTime: Date.now(),
          movieNumSuppose: 0,
          movieNumDownload: 0,
          movieMainPage: req.body.movieMainPage,
        });
        saveMovie.save(function (err) {
          if (err) res.json({status: 1, message: err});
          else res.json({status: 1, message: '添加成功'});
        })
      } else {
        res.json({status: 1, message: '用户无权操作'});
      }
    })
  } else {
    res.json({status: 1, message: check.message});
  }

});


//删除电影
router.post('./movieDel', function (req, res, next) {
  if (!req.body.movie_id || !req.body.username || !req.body.token || !req.body.id) {
    res.json({status: 1, message: '验证失败'});
    return;
  }
  //权限验证
  //var check = checkAdminPower(req.body.username, req.body.token, req.body.id);
  var check = {error: 0, message: ''};
  if (check.error === 0) {
    user.findByUsername(req.body.username, function (err, findUser) {
      if (findUser[0].userAdmin && findUser[0].userStop) {
        movie.remove({_id: req.body.movie_id}, function (err, delMovie) {
          res.json({status: 0, message: '删除成功', data: delMovie});
        })
      } else {
        res.json({status: 1, message: '没有权限'});
      }
    })
  } else {
    res.json({status: 1, message: '权限验证失败'});
  }
});

//更新电影
router.post('/movieUpdate', function (req, res, next) {
  if (!req.body.username || !req.body.token || !req.body.id || !req.body.movieName || !req.body.movieIma || !req.body.movieDownload) {
    res.json({status: 1, message: '都不能为空'});
    return;
  }
  var check = {error: 0, message: ''};
  if (check.error === 0) {
    var newMovie = req.body;
    user.findByUsername(req.body.username, function (err, findUser) {
      if (findUser[0].userAdmin && !findUser[0].userStop) {
        movie.update({_id: req.body.movie_id}, newMovie, function (err, updateMovie) {
          if (err) res.json({status: 1, message: err});
          else res.json({status: 0, message: '修改成功'});
        })
      }else {
        res.json({status:1, message:'权限不足'});
      }
    })
  }
  else
    res.json({status: 1, message: '验证失败'});
});

//获取所有
router.get('./movie', function(req, res, next){
  movie.findAll(function(err, allMovie){
    res.json({status:0, message:'获取成功', data:allMovie});
  })
});

// module 代表当前模块，exports 属性是对外的接口，加载某个模块其实就是加载这个模块的 exports 属性
// 所以不谢 exports 的话意味着不对外开放接口，其他文件加载该模块就会失败
module.exports = router;
