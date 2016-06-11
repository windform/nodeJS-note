//使用once让事件处理函数只被执行一次
var http = require('http');
var server = http.createServer();

server.once('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("接收到客户端请求");
		res.end();
	}
});

server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log(req.url);
	}
	res.end();
});

server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log(req.url);
	}
	res.end();
});


server.listen(1337,'127.0.0.1');
