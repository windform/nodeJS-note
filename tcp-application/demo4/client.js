//指定TCP客户端与TCP服务器建立连接10秒后关闭客户端连接
var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');
client.connect(8431,'localhost',function(){
	console.log('已连接到服务器');
});
client.on('data',function(data){
	console.log('已接收服务器发来的数据');
})

