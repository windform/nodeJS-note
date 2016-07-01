//sendData属性与statusCode属性的使用示例
var http = require('http');
var url = require('url');

var server = http.createServer().listen(1337,'localhost');
server.on('request',function(req,res){
	if(req.url !== '/favicon.ico'){	

		res.statusCode = 404;
		res.sendData = false;
		res.setHeader('Content-Type','text/html');
		res.setHeader('Trailer','Content-MD5');     //追加头信息
		res.addTrailers({'Content-MD5':'9a98dfa98a5df76af4a9879a6a8'});		//追加头信息
		res.write('<html><head><meta charset="utf-8"/></head>');
		res.write('<body><h1>你好，我是一名优秀的前端工程师</h1></body></html>');

	}
	res.end();
});
server.on('listening',function(){
	console.log('服务已经开启')
})