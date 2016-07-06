//用于向http服务器请求提交并发送数据的模块文件代码
var http = require('http');
var options = {
	hostname:'localhost',
	port:1431,
	path:'/',
	method:'POST',
};
var req = http.request(options,function(res){
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		console.log('响应内容:'+chunk);
	});
});

req.write('你好。');
req.write('再见。');