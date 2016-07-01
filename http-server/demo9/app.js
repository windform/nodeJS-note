//使用http.ServerResponse对象的writeHead方法设置响应头信息

var http = require('http');
var url = require('url');

var server = http.createServer().listen(1337, 'localhost');
server.on('request', function(req, res) {
	if (req.url !== '/favicon.ico') {
		var statusCode = 200;
		var reasonPhrase = {
			'Content-Type': 'text-plain',
			'Access-Control-Allow-Origin': 'http://localhost',
			'charset':'utf-8'
		}
		res.writeHead(statusCode, reasonPhrase);
		res.write('你好');
	}
	res.end();
});
server.on('listening', function() {
	console.log('服务已经开启')
})