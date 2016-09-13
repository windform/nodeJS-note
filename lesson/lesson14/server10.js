var http = require('http');
var server = http.createServer(function(req,res){
	if(req.url != '/favicon.ico'){
		res.setHeader("Content-Type","text/plain");
		res.setHeader("Content-Encoding","utf-8");
		res.setHeader("Access-Control-Allow-Origin","http://localhost");
		//res.removeHeader("Access-Control-Allow-Origin");
		res.write("你好");
		console.log(res.getHeader("Content-Type"));
	}
	res.end();
}).listen(1337,'localhost');