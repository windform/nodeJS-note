//使用domain对象的add方法实现显式绑定
var http = require('http');
var domain = require('domain');
http.createServer(function(req,res){
	var reqd = domain.create();
	reqd.add(req);
	reqd.add(res);
	reqd.on('error',function(err){
		res.writeHead(200);
		res.write('服务器端接收客户端请求时发生错误：');
		res.end(err.message);
	});

	res.writeHead(200);

	reqd.remove(req);		//使用remove()方法取消绑定
	req.on('data',function(){
		noneexists();
		res.write('你好');
		res.end();
	})
}).listen(1431);