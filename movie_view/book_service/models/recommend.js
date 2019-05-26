
var mongoose = require('../common/db');

//主页
var recommend = new mongoose.Schema({
  recommendImg :String,
  recommendSrc:String,
  recommendTitle:String
});

recommend.statics.findByIndexId = function(movie_id, callBack){
  this.find({index:movie_id}, callBack);
};

recommend.statics.findAll = function(callBack){
  this.find({}, callBack);
};


var recommendModel = mongoose.model('recommend', recommend);

module.exports = recommendModel;
