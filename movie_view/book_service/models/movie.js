var mongoose = require('../common/db');

var movie = new mongoose.Schema({
  movieName: String,
  movieImg: String,
  movieVideo: String,
  movieDownload: String,
  movieTime: String,
  movieNumSuppose: Number,
  movieNumDownload: Number,
  movieMainPage: Boolean,
});

movie.statics.findById = function (movie_id, callBack) {
  this.find({_id: movie_id}, callBack);
};

movie.statics.findByName = function (movie_name, callBack) {
  this.find({movieName: movie_name}, callBack);
};

var movieModel = mongoose.model('movie', movie);
module.exports = movieModel;
