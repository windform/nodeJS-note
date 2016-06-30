//listen方法指定服务器端开始监听时调用的回调函数

var http = require('http');
http.createServer(function(req,res){
	//暂不指定接收到的客户端请求时的处理
})
.listen(1337,'127.0.0.1',function(){
	console.log('服务器端开始监听');
})