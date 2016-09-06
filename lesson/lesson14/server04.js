var http = require('http');
var server = http.createServer(function(req,res){
	res.write('<head><meta charset="utf-8"/></head>');
	res.write('<body><h1>hello world</h1></body>');
});
server.listen(1337,'localhost');
server.on('connection',function(req,res){
	if(req.url !=='/favicon.ico'){
		console.log('客户端连接已建立');
	}
})
