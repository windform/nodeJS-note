var net = require('net');
var server = net.createServer(function(socket){
	server.close(function(){
		console.log('服务被关闭');
	})
})
server.listen(8431,'localhost',function(){
	console.log('TCP服务被创建');
})