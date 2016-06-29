//用于发送组播数据的UDP服务器
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('listening',function(msg){
	server.setMulticastTTL(128);
	server.addMemberShip('230.185.192.108');
	
});

setInterval(broadcast,1000);

function broadcast(){
	var buf = new Buffer(new Date()).toLocaleString();
	server.send(buf,0,buf.length,8088,'230.185.192.108');
}