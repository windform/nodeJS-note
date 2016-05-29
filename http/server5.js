//http.get
/*
http.get(options,callback):http模块还提供了一个更加简单的方法用于处理GET请求，它是http.request()的简化版，唯一的区别在于http.get自动将请求方法设为了GET请求，同时不需要手动调用req.end()
**/

var http = require('http');
http.get({host:'www.ldyna.com'},function(res){
	res.setEncoding('utf-8');
	res.on('data',function(data){
		console.log(data) 
	})
})