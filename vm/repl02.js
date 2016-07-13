//input属性值和output属性值的使用示例node
var net = require('net');
var repl = require('repl');
net.createServer(function(socket){
	repl.start({
		prompt:"node visa TCP socket>",
		input:socket,
		output:socket
	}).on('exit',function(){
		console.log('REPL运行环境退出');
		socket.end();
	})
}).listen(5001)

