//使用parse方法解析url地址字符串
var http = require('http');
var url = require('url');

var server = http.createServer().listen(1337,'localhost');
server.on('request',function(req,res){
	if(req.url !== '/favicon.ico'){	
		res.setHeader('Content-Type','text-plain');
		res.setHeader('Access-Control-Allow-Origin','http://localhost');
		res.removeHeader('Content-Type');
		res.write('hello,how are you?');
		console.log(res.getHeader('Content-Type'))
	}
	res.end();
});
server.on('listening',function(){
	console.log('服务已经开启')
})