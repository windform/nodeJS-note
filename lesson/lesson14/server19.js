var http = require('http');
var server = http.createServer(function(req,res){
	if(req.url !== 'favicon.ico'){
		req.on('data',function(data){
			console.log('服务器端接收到数据：'+data);
			res.write('确认数据：'+data);
		})
	}
}).listen(1337,'127.0.0.1');