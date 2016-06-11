//自定义事件触发
var http = require("http");
var server = http.createServer();
server.on("request",function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log(req.url);
	}
	res.end();
});

server.on("customEvent",function(arg1,arg2,arg3){
	console.log("自定义事件触发");
	console.log(arg1);
	console.log(arg2);
	console.log(arg3);
});

server.emit("customEvent","自定义参数1","自定义参数2","自定义参数3");
server.listen(1337,"127.0.0.1");