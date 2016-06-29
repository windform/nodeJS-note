//使用setBroadcast方法广播消息
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('message',function(msg){
	var buf = new Buffer('已接收客户端发送的数据:'+msg);
	server.setBroadcast(true);  //允许广播数据
	server.send(buf,0,buf.length,41235,'l92.168.1.255');
});

server.bind(41234,'l92.168.1.100');