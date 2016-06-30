//指定客户端与服务器建立连接时的处理

var http = require('http');
var server = http.createServer(function(req,res){
	//暂不指定接收到的客户端请求时的处理
}).listen(1337,'127.0.0.1');

server.on('connection',function(){
	console.log('客户端连接已经建立')
})