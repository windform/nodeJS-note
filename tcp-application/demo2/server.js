//创建TCP服务器
var net = require('net');
var server = net.createServer();
server.on('connection',function(socket){
	console.log('客户端与服务器连接已经建立');
	socket.setEncoding('utf8');
	socket.on('data',function(data){
		console.log('已接收客户端发送的数据：'+data);
		socket.write('确认数据：'+data);
	})
	.on('end',function(){
		console.log('客户端连接被关闭');
		//server.unref();  //放客户端连接被全部关闭时退出应用程序
		//server.ref();
	})
	.on('close',function(had_error){
		if(had_error){
			console.log('由于一个错误导致socket端口被关闭');
			socket.unref();

		}else{
			console.log('socket端口正常关闭')
		}

	})
});
server.listen(8431,'localhost');