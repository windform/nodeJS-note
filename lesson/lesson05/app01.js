//使用on方法绑定事件处理函数
var http = require('http');
var server = http.createServer();

//为server服务器接收到客户端请求时触发的request事件绑定事件处理函数
server.on('request',function(req,res){
	if(req.url != '/favicon.ico'){
		console.log(req.url);
	}
	res.writeHeader(200,{"Content-Type":"text/html"});
	res.write('<head><meta charset="utf8"/></head>');
	res.write("<body><h1>"+req.url+"</h1></body>")
	res.end();

}).listen(1337,'127.0.0.1');