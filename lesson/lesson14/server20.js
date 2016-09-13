var http = require('http');
var url = require('url');

var server = http.createServer(function(sreq,sres){
	var url_parts = url.parse(sreq.url);
	var options = {
		host:'www.amazon.cn',
		port:80,
		path:url_parts.pathname,
		headers:sreq.headers
	};
	var creq = http.request(options,function(cres){
		sres.writeHead(cres.statusCode,cres.headers);
		cres.pipe(sres);
	});
	sreq.pipe(creq);
});
server.listen(1440,'localhost');
