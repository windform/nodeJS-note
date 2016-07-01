//http.ServerResponse对象的close事件的使用示例

var http = require('http');
var url = require('url');

var server = http.createServer().listen(1337, 'localhost');
server.on('request', function(req, res) {
	if (req.url !== '/favicon.ico') {

		res.on('close', function() {
			console.log('连接中断');
		});
		setTimeout(function() {

			res.setHeader('Content-Type', 'text/html');
			res.write('<html><head><meta charset="utf-8"/></head>');
			res.write('<body><h1>你好，我是一名优秀的前端工程师</h1></body></html>');
			res.end();
			
		}, 5000)

	}
});
server.on('listening', function() {
	console.log('服务已经开启')
})