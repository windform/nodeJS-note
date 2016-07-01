//使用headerSent属性查看使用writeHead方法时响应头的发送时机

var http = require('http');
var url = require('url');

var server = http.createServer().listen(1337,'localhost');
server.on('request',function(req,res){
	if(req.url !== '/favicon.ico'){	
		if(res.headersSent) console.log('响应头已发送');
		else console.log('响应头未发送');

		res.writeHead('Content-Type','text-plain');
		//res.writeHead('Access-Control-Allow-Origin','http://localhost');

		if(res.headersSent) console.log('响应头已发送');
		else console.log('响应头未发送');		

		res.write('hello,how are you?');
		console. log(res.getHeader('Content-Type'))
	}
	res.end();
});
server.on('listening',function(){
	console.log('服务已经开启')
})