
var mongoose = require('../common/db');

//文章
var article = new mongoose.Schema({
  articleTitles:String,
  articleContext:String,
  articleTime:String
});

article.statics.findByArticleId = function(id, callBack){
  this.find({_id:id}, callBack);
};

var articleModel = mongoose.model('article', article);

module.exports = articleModel;
