//利用socket对象unpipe方法取消目标对象的写入操作
//语法： socket.unpipe([destination])

var net = require('net');
var fs = require('fs');
var file = fs.createWriteStream('./message1.txt');
var server = net.createServer();
server.on('connection',function(socket){
	socket.pipe(file,{end:false});
	setTimeout(function(){
		file.end('再见');
		socket.unpipe(file);
	},10000)
});
server.listen(8431,'localhost');