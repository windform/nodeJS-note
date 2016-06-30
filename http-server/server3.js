//指定服务器地址及端口已被占用时需要执行的处理

var http = require('http');
var server = http.createServer(function(req,res){
	//暂不指定接收到的客户端请求时的处理
}).listen(1337,'127.0.0.1',function(){
	console.log('服务器端开始监听');
});

server.on('error',function(err){
	if(err.code == 'EADDRINUSE'){
		console.log('服务器地址及端口已被占用');
	}
})