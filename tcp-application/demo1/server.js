//创建TCP服务器
var net = require('net');
var server = net.createServer();
server.on('connection',function(socket){
	console.log('客户端与服务器连接已经建立');
	socket.setEncoding('utf8');
	socket.on('data',function(data){
		console.log('已接收客户端发送的数据：'+data);
		socket.write('确认数据：'+data);
	}).
	on('error',function(err){
		console.log('与客户端通信过程中发生一个错误，错误编码为%s。',err.code);
		socket.destory();
	})
});
server.listen(8431,'localhost');