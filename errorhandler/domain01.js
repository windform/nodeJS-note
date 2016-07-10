//使用domain模块处理错误
//try...catch机制捕捉错误

/*var http = require('http');
try{
	http.createServer(function(req,res){
		if(req.url !== "/favicon.ico"){
			noneexist();
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write('<head><meta charset="utf-8"/></head>');
			res.end('你好\n');
		}
	}).listen(1411,'127.0.0.1');
}
catch(err){
	console.log('接收客户端请求时发生以下错误：'+err.code);
}*/

//使用uncaughtException事件来捕获未被处理的错误

var http = require('http');
http.createServer(function(req,res){
	if(req.url !== "/favicon.ico"){
		noneexist();
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write('<head><meta charset="utf-8"/></head>');
		res.end('你好\n');
	}
}).listen(1411,'127.0.0.1');
process.on('uncaughtException',function(err){

	console.log('接收客户端请求时发生以下错误：'+err);
})

