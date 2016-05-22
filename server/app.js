var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<h1>node.js is perfect</h1>');
	res.end('<p>tool debug: npm install -g supervisor</p>');
}).listen(3000);
console.log('HTTP server is listening at port 3000');