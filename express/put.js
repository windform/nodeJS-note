//使用put方法接收客户端提交的post请求
var express = require('express');
var fs = require('fs');
var querystring = require('querystring');
var app = express();
var mysql = require('mysql');

var pool = mysql.createPool({
	host:'localhost',
	port:3306,
	database:'mysql',
	user:'root',
	password:''
});

app.get('/put.html',function(req,res){
	/*res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<head><meta charset="utf-8"/><title>使用post方法向服务器提交数据</title></head>');
	var file = fs.createReadStream('put.html');
	file.pipe(res);*/
	res.sendfile(__dirname+'/put.html');
});

app.put('/put.html',function(req,res){
	req.on('data',function(data){
		var obj = JSON.parse(data.toString());
		pool.getConnection(function(err,connection){
			if(err) res.send('与mysql数据库建立连接失败');
			else{
				var str;
				connection.query('INSERT INTO test SET ?',{
					username:obj.username,
					firstname:obj.firstname
				},function(err,result){
					if(err) str = '在服务器端mysql数据库插入数据失败';
					else str='在服务器端mysql数据库插入数据成功';
					connection.release();
					res.send(str);
				})
			}
		})
	})
});

app.listen(1337,'localhost');