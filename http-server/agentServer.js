//制作代理服务器
var http = require('http');
var url = require('url');
var server = http.createServer(function(sreq,sres){
	var url_parts = url.parse(sreq.url);
	var opts = {
		hostname:'www.amazon.com',
		port:80,
		path:url_parts.pathname,
		headers:sreq.headers
	};
	var creq = http.get(opts,function(cres){
		sres.writeHead(cres.statusCode,cres.headers);
		cres.pipe(sres);
	});
	sreq.pipe(creq);
});
server.listen(1337,'l27.0.0.1');