var net = require('net');
var fs = require('fs');
var file = fs.createWriteStream('./message.txt');
var server = net.createServer();
server.on('connection',function(socket){
	socket.setEncoding('utf8');
	socket.pipe(file,{end:false});
	/*socket.on('end',function(){
		file.end('再见')
		console.log('客户端关闭');
	})*/
	setTimeout(function(){
		file.end('goodbye');
		socket.unpipe(file);
	},5000)
});
server.listen(8431,'localhost',function(){
	console.log('TCP服务开启');
})
