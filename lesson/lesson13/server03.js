//使用setBroadcast方法广播消息
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('message',function(msg,rinfo){
	console.log('已接收客户端发送的数据：'+msg);
	server.setBroadcast(true);

})
server.bind(41234,'localhost');