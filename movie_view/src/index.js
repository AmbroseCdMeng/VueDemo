
//定义 Express 示例
var express = require('express');
var app = express();

//定义路由
app.get('/', function(req, res){
  res.send('Hello World');
});

//设置启动的地址端口信息
var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  //打印相关内容
  console.log(`Example app listening at http://${host}:${port}`);
});


// node index.js
//http://localhost:3000/
