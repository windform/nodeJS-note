//
var dgram = require('dgram');
var client = dgram.createSocket('udp4');
client.bind(41235,'localhost');
var message = new Buffer('你好！');
client.send(message,0,message.length,41234,'localhost');
client.on('message',function(msg,rinfo){
	console.log('已接收服务器端发送的数据： %s',msg);
})