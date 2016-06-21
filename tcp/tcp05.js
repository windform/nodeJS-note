//使用close方法拒绝新的客户端连接请求

var net = require('net');
var server = net.createServer(function(socket){
	server.close(function(){
		console.log('TCP服务器被关闭')
	})
});
server.listen(8431,'localhost',function(){
	console.log('TCP服务被创建')
})