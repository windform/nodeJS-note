//本地服务器请求数据：用于接收数据的服务器
var http = require('http');
var server = http.createServer(function(req,res){
	if(req.url !== 'favicon.ico'){
		req.on('data',function(data){
			console.log('服务器接收到数据:'+data);
			res.write('确认数据：'+data);
		});
		req.on('end',function(){
			res.addTrailers({'Content-MD5':'3ut32uyt1376314j132i1u43y'});
			res.end();
		});
		res.on('end',function(){
			console.log('Trailer头信息：%j',res.trailers);
		});
	}
}).listen(1337,"localhost");