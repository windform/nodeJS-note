//EventEmitter类
var http = require('http');
var server = http.createServer();

//使用on方法绑定事件处理函数
/*server.on('request',function(req,res){
	console.log(req.url);
	res.end();
}).listen(3000,'127.0.0.1');
*/


//对同一个事件绑定多个事件处理器
server.on('request',function(req,res){
	if(req.url !== "/favicon.ico"){
		console.log('接收到客户端请求');
	}
});
server.on('request',function(req,res){
	if(req.url !== "/favicon.ico"){
		console.log(req.url);
	}
	res.end();
});
server.on('request',function(req,res){
	if(req.url !== "/favicon.ico"){
		console.log('发送响应完毕');
	}
});
server.listen(3000,'127.0.0.1');
console.log('http server is listening at http://localhost:3000');
