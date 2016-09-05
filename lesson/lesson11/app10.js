var net = require('net');
var fs = require('fs');
var file = fs.createWriteStream('./message02.txt');
var server = net.createServer();
server.on('connection',function(socket){
	socket.setEncoding('utf8');
	socket.setTimeout(10*1000);
	socket.pause();
	socket.on('timeout',function(){
		socket.resume();
		socket.pipe(file);
	})

});
server.listen(8431,'localhost',function(){
	console.log('TCP服务开启');
})
