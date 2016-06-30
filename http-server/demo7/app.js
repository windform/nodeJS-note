//data事件与end事件回调函数使用示例
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	if(req.url!=='/favicon.ico'){
		req.on('data',function(data){
			console.log('服务器接收到的数据:'+decodeURIComponent(data))
		});
		req.on('end',function(){
			console.log('客户端请求数据已经全部接收完毕');
		})
	}
	res.end();
}).listen(1337,'127.0.0.1',function(){
	console.log('服务器端开始监听');
})