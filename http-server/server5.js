//使用setTimeout方法设置服务器的超时时间

var http = require('http');
var server = http.createServer(function(req,res){
	//暂不指定接收到的客户端请求时的处理
}).listen(1337,'127.0.0.1');

server.setTimeout(30*1000,function(socket){
	console.log('服务器超时');
	console.log(socket);
})