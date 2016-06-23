//指定TCP客户端与TCP服务器建立连接10秒后关闭客户端连接
var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');
client.connect(8431,'localhost',function(){
	console.log('已连接到服务器');
	client.write('你好');
	setTimeout(function(){
		client.end('再见');
	},10000)
});
client.on('data',function(data){
	console.log('已接收服务器发来的数据：'+data);
})
.on('error',function(err){
	console.log('与服务器连接或通信的过程中发生了一个错误，错误代码为%s。',err.code);
	client.destory();
})
