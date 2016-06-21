//指定服务器地址及端口被占用时需要处执行的处理

var net = require('net');
var server = net.createServer(function(socket){
	console.log('客户端与服务器端连接建立')
});
server.listen(8431,'localhost',function(){
	console.log('服务器端开始监听')
});
server.on('error',function(e){
	if(e.code == 'EADDRINUSE'){
		console.log('服务器地址及端口被占用')
	}
})