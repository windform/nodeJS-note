//用于接收组播数据的UDP客户端
var PORT = 8088;
var HOST = '192.168.1.102';

var dgram = require('dgram');
var client = dgram.createSocket('udp4');
client.on('listening',function(){
	client.addMemberShip('230.185.192.108')
});

client.on('message',function(message,remote){
	console.log(message.toString());
});

client.bind(PORT,HOST);

