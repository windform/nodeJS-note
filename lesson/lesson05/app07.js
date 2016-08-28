//使用listenerCount方法获取指定事件的事件处理函数的数量；

var http = require('http');
var events = require('events');
var server = http.createServer();

server.on('request',function(req,res){
	if(req.url != '/favicon.ico'){
		console.log("接收到客户端请求");
	}
});
server.on('request',function(req,res){
	if(req.url != '/favicon.ico'){
		console.log(req.url);
	}
});
server.on('request',function(req,res){
	if(req.url != '/favicon.ico'){
		console.log("发送响应完毕");
	}
});
server.listen(1337,'127.0.0.1');

//使用EventEmitter类的listenerCount方法获取HTTP服务器对象的request事件的事件处理函数的数量并在控制台中将其输出
console.log('request事件绑定的处理函数数量：'+events.EventEmitter.listenerCount(server,'request'));
console.log('request事件绑定的处理函数数量的详细信息：'+server.listeners('request'));
