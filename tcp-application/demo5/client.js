//获取当前发送的字节数：bytesWritten
var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');
client.connect(8431,'localhost',function(){
	console.log('已连接到服务器');
	client.write('你好！');
	console.log('当前已接收%d个字节',client.bytesWritten);
	client.write('接收完毕，再见！');
	console.log('当前已接收%d个字节',client.bytesWritten);
});
client.on('data',function(data){
	console.log('已接收服务器发来的数据：'+data);
}).
on('error',function(err){
	console.log('通信发生错误%s',err.code);
	client.destory();
})

