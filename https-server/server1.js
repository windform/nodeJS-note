//https服务器对象的创建示例
var https = require('https');
var fs = require('fs');
var pk = fs.readFileSync('./privatekey.pem');
var pc = fs.readFileSync('./certificate.pem');
var opts = {
	key: pk,
	cert: pc
};
var server = https.createServer(opts, function(req, res) {
	console.log(req.url);
	if (req.url !== '/favicon.ico') {
		res.writeHeader({
			'Content-Type': 'text/html'
		});
		res.write('<html><head><meta charset="utf-8"/></head>');
		res.write('hello how are you ?');
		res.end();
	}
});
server.listen(443, 'localhost', function() {
	console.log('服务器开始监听');
})