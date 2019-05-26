
var mongoose = require('../common/db');

var mail = new mongoose.Schema({
  mailToUser :String,
  mailFromUser:String,
  mailTitle:String,
  mailContext:String,
  mailSendTime:String
});

mail.statics.findByToUserId = function(user_id, callBack){
  this.find({mailToUser:user_id}, callBack);
};

mail.statics.findByFromUserId = function(user_id, callBack){
  this.find({mailFromUser:user_id}, callBack);
};

var mailModel = mongoose.model('mail', mail);

module.exports = mailModel;
