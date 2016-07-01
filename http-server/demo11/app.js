//http.ServerResponse对象的write方法的返回值

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	if(req.url !== '/favicon.ico'){	
		fs.readFile('app.js',function(err,data){
			if(err){
				console.log('读取文件失败');
			}else{
				var flag = res.write(data,'gbk');
				console.log(flag);
				res.end();
			}
		})
	}
}).listen(1337,'localhost');

server.on('listening',function(){
	console.log('服务已经开启')
})