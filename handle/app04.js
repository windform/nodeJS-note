//listenerCount():用来获取某个对象的指定事件处理函数的数量
var http = require('http');
var events = require('events');
var server = http.createServer();

server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("接收到客户端请求");
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
		console.log("接收到客户端请求");
	}
});

server.listen(1337,'127.0.0.1');

console.log(events.EventEmitter.listenerCount(server,'request'));
