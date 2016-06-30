//获取客户端的请求信息
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	if(req.url!=='/favicon.ico'){
		var out = fs.createWriteStream('./request.log');
		out.write('客户端请求所用方法为：'+req.method+'\r\n');
		out.write('客户端请求所用的url字符串为：'+req.url+'\r\n');
		out.write('客户端请求头对象为：'+JSON.stringify(req.headers)+'\r\n');
		out.end('客户端请求所用http版本为：'+req.httpVersion+'\r\n');
	}
	res.end();
}).listen(1337,'127.0.0.1',function(){
	console.log('服务器端开始监听');
})