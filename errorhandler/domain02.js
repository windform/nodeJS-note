//使用domain模块来处理未被处理的错误
var http = require('http');
var domain = require('domain');
http.createServer(function(req,res){
	var d = domain.create();

	d.once('error',function(err){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write('<head><meta charset="utf-8"/></head>');
		res.write('服务器接收客户端请求时发生以下错误：');
		res.end(err.message);
	});

	d.run(function(){
		if(req.url !== "/favicon.ico"){
			noneexist();
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write('<head><meta charset="utf-8"/></head>');
			res.end('你好\n');
		}
	})
}).listen(1411,'127.0.0.1');