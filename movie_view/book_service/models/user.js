/**
 * 用户数据集
 */

//引入自定义连接 mongodb 的公用模块
var mongoose = require("../common/db");


//定义用户数据集
var user = new mongoose.Schema({
  username:String,
  password:String,
  userMail:String,
  userPhone:String,
  userAdmin:String,
  userPower:Number,
  userStop:Boolean
});

//用户查找方法
user.statics.findAll = function(callBack){
  this.find({}, callBack);
};

//使用用户名查找
user.statics.findByUsername = function(name, callBack){
  this.find({username:name}, callBack);
};

//登录验证（用户名密码是否匹配，状态是否封停）
user.statics.findUserLogin = function(name, password, callBack){
  this.find({username:name, password:password, userStop: false}, callBack);
};

//验证邮箱、电话、用户名找回用户密码
user.statics.findUserPassword = function(name, mail, phone, callBack){
  this.find({username:name, userMail:mail, userPhone:phone}, callBack);
};

//实例化用户数据集
var userModel = mongoose.model('user', user);

//引入userModel模块
module.exports = userModel;
