var http = require('http');
var server = http.createServer(function(req,res){
	res.write('<head><meta charset="utf-8"/></head>');
	res.write('<body><h1>hello world</h1></body>');
});
server.listen(1337,'localhost',function(){
	console.log('服务器开始监听！');
});
server.on('error',function(e){
	if(e.code == 'EADDRINUSE'){
		console.log('服务器地址及端口被占用');
	}
})
