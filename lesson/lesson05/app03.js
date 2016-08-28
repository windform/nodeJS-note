//使用once方法让事件处理函数只执行一次

var http = require('http');
var server = http.createServer();

//为server服务器接收到客户端请求时触发的request事件绑定事件处理函数
server.once('request',function(req,res){
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
console.log("server start");
