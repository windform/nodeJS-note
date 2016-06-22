//socket端口对象的pause方法和resume方法的使用示例

var net = require('net');
var fs = require('fs');
var file = fs.createWriteStream('./message3.txt');
var server = net.createServer();
server.on('connection',function(socket){
	socket.pause();
	setTimeout(function(){
		socket.resume();
		socket.pipe(file);
	},30000);
	server.on('data',function(data){
		socket.pause();
		setTimeout(function(){
			socket.resume();
		},30000)
	})
});
server.listen(8431,'localhost');