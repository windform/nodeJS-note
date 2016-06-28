//使用socket端口对象的write方法发送小尺寸文件

var net = require('net');
var fs = require('fs');
var server = net.createServer();
server.on('connection',function(socket){
	console.log('客户端与服务器端连接已经建立');
	socket.setEncoding('utf8');
	var readStream = fs.createReadStream('../01.doc');
	readStream.on('data',function(data){
		var flag = socket.write(data);
		console.log('write方法的返回值是：'+flag);
		console.log('缓存队列中当前缓存了%d字符：',socket.bufferSize);
	})
	socket.on('data',function(data){
		console.log('客户端正接收到发送的数据');
	});
	socket.on('drain',function(){
		console.log('TCP缓存区中的数据已经全部发送');
	});
});
server.listen(8431,'localhost');
