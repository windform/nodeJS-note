//创建TCP客户端
var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');
client.connect(8431,'localhost',function(){
	console.log('已连接到服务器');
	client.write('你好');
});
client.on('data',function(data){
	console.log('已接收服务器发来的数据：'+data);
})
.on('error',function(err){
	console.log('与服务器连接或通信过程中发生一个错误，错误编码为%s。',err.code);
	client.destory();
})