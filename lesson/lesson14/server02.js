var http = require('http');
var server = http.createServer(function(req,res){
	res.write('<head><meta charset="utf-8"/></head>');
	res.write('<body><h1>hello world</h1></body>');
});
server.listen(1337,'localhost',function(){
	console.log('服务器开始监听！');
	server.close();
});
server.on('close',function(){
	console.log('服务器已被关闭');
})
