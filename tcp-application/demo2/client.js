//创建TCP客户端
var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');
client.connect(8431,'localhost',function(){
	console.log('已连接到服务器');
	client.write('你好');
	client.end('再见');
});
client.on('data',function(data){
	console.log('已接收服务器发来的数据：'+data);
})
