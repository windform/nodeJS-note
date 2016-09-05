var net = require('net');
var server = net.createServer(function(socket){
	console.log('客户端与服务器连接已建立');
});
server.listen(8431,'localhost');
server.on('error',function(e){
	if(e.code == 'EADDRINUSE'){
		console.log('服务器地址及端口被占用');
	}
});
