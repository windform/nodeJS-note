var net = require('net');
var fs = require('fs');
var file = fs.createWriteStream('./message01.txt');
var server = net.createServer();
server.on('connection',function(socket){
	socket.setEncoding('utf8');
	socket.pause();
	setTimeout(function(){
		socket.resume();
		socket.pipe(file,{end:false});
	},30000)
});
server.listen(8431,'localhost',function(){
	console.log('TCP服务开启');
})
