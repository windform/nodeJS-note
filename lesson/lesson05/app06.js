//自定义事件并将其触发

var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
	if(req.url != '/favicon.ico'){
		console.log(req.url);
	}
	res.end();
});
server.on('customEvent',function(arr){
	console.log('自定义事件被触发');
	for(var i=0; i<arr.length;i++){
		console.log(arr[i]);
	}

});
server.emit('customEvent',['我是设计师','我是前端工程师','我是摄影师']);

server.listen(1337,'127.0.0.1');
//console.log("server start");
