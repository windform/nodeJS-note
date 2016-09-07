var http=require('http');
var server=http.createServer(function(req,res){
	res.end();
}).listen(1337,'localhost');
server.setTimeout(60*1000,function(socket){
	console.log('服务超时');
	console.log(socket);
})