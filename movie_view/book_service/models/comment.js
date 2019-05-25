//引入数据库连接模块
var mongoose = require('../common/db');

//定义数据集
var comment = new mongoose.Schema({
  movie_id: String,
  username: String,
  context: String,
  check: Boolean,
});

//数据操作方法
comment.statics.findByMovieId = function(m_id, callBack){
  this.find({movie_id : m_id, check: true}, callBack);
};

comment.statics.findAll = function(callBack){
  this.find({check:true}, callBack);
};

//实例化
var commentModel = mongoose.model('comment', comment);

//引入
module.exports = commentModel;

