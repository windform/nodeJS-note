//http.ServerRequest
/*
http.ServerRequest是HTTP请求的信息，是后台开发者最关注的内容。它一般由http.Server的request事件发送，作为第一个参数传递，通常简称request或req。
http请求一般可以分为两部分：请求头（Request Header）和请求体（Request Body）。http.ServerRequest提供以下3个事件用于控制请求体的传输。

data:当请求体数据到来时，该事件被处罚。该事件提供一个参数chunk，表示接收到数据。如果该事件没有被监听，那么请求体将会被抛弃。该事件可能会被调用多次
end:当请求体数据传输完成时，该事件被触发，此后将不会再有数据到来。
close:用户当前请求结束时，该事件被触发。不同于end，如果用户强制终止了传输，也还是调用end

*/


//获取get请求内容

var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end(util.inspect(url.parse(req.url,true)));
}).listen(3000);

console.log('http server is listening at port 3000');
