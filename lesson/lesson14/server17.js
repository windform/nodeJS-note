var http = require('http');
var options = {
	hostname : 'www.amicrosoft.com',
	port:80,
	path:'/',
	method:'GET'
};
var req = http.request(options,function(res){
	console.log('状态码：'+res.statusCode);
	console.log('响应头：'+JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		console.log('响应内容：'+chunk);
	});
});
//req.abort();		//终止请求

//socket事件处理
req.on('socket',function(socket){
	socket.setTimeout(1000);
	socket.on('timeout',function(){
		req.abort();
	})
})

//请求发生错误时的处理
req.on('error',function(err){
	if(err.code === "ECONNRESET")
		console.log("socket端口超时");
	else
		console.log('请求数据的过程中发生错误，错误代码为：'+err.code);
})

req.end();