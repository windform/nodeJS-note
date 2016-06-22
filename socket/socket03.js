//利用socket对象pipe方法将客户端发送的流数据书写到文件等其他目标对象中
//语法： socket.pipe(destination,[options])

var net = require('net');
var fs = require('fs');
var file = fs.createWriteStream('./message.txt');
var server = net.createServer();
server.on('connection',function(socket){
	socket.pipe(file,{end:false});
	socket.on('end',function(){
		file.end('再见');
	})
});
server.listen(8431,'localhost');