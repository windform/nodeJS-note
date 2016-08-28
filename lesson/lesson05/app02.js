//对同一事件绑定多个事件处理函数

var http = require('http');
var server = http.createServer();

//修改一个事件可以绑定的函数的最大数量
server.setMaxListeners(3);

//为server服务器接收到客户端请求时触发的request事件绑定事件处理函数
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
console.log("server start");

//取得一个指定事件的所有事件处理函数
console.log("request 事件绑定的事件处理函数有："+server.listeners('request'));