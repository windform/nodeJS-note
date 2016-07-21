//使用all方法接收客户端提交的各种请求
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
app.all('/all.html/:id(\\d+)',function(req,res,next){
	pool.getConnection(function(err,connection){
		if(err) res.send('与mysql数据库建立连接失败');
		else{
			connection.query('SELECT count(1) count FROM test WHERE id = ?',[req.params.id],function(err,result){
				if(err){
					res.send('查询数据失败');
					connection.release();
				}else{
					connection.release();
					if(result[0].count>0) next();
					else res.send('你没有操作数据库的权限');
				}
			})
		}
	})
})

app.get('/all.html/:id(\\d+)',function(req,res){
	/*res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<head><meta charset="utf-8"/><title>使用post方法向服务器提交数据</title></head>');
	var file = fs.createReadStream('all.html');
	file.pipe(res);*/
	res.sendfile(__dirname+'/all.html');
});

app.post('/all.html/:id(\\d+)',function(req,res){
	req.on('data',function(data){
		var obj = JSON.parse(data.toString());
		pool.getConnection(function(err,connection){
			if(err) res.send('与mysql数据库建立连接失败');
			else{
				var str;
				connection.query('UPDATE test SET username=?,firstname=? WHERE id=?',[obj.username,obj.firstname.req.params.id]
				,function(err,result){
					if(err) str = '在服务器端mysql数据库更新数据失败';
					else str='在服务器端mysql数据库更新数据成功';
					connection.release();
					res.send(str);
				})
			}
		})
	})
});

app.listen(1337,'localhost');