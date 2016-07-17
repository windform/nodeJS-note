//一个简单的express示例应用程序
var express = require('express');
var http = require('http');
var app = express();
app.get('/index.html',function(req,res){
	res.send('hello express');
});
app.listen(5020,'localhost')