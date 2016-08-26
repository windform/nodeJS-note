var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<head><meta charset="utf-8"/></head>');
	res.end("<body><h1>hello JavaScript!</h1></body>")
}).listen(1337,'localhost');
console.log('server start');