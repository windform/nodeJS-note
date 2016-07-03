//本地服务器请求数据：用于发送数据的HTTP客户端
var http = require('http');
var options = {
	hostname:'localhost',
	port:1337,
	path:'/',
	method:'POST'
};
var req = http.request(options,function(res){
	res.on('data',function(chunk){
		console.log('客户端接收到数据:'+chunk);
	})

});
req.write('你好');
req.end('再见');

