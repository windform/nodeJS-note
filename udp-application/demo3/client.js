//用于接收广播数据的UDP客户端
var dgram = require('dgram');
var client = dgram.createSocket('udp4');
client.bind(41235,'localhost');
var buf = new Buffer('你好');
client.send(buf,0,buf.length,41234,'l92.168.1.100');
client.on('message',function(msg,rinfo){
	console.log('已接收服务器端发送的数据:%s',msg);
})