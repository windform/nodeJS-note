var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
	if(req.url != '/favicon.ico'){
		fs.readFile('read.txt',function(err,data){
			if(err) console.log('读取文件发生错误');
			else {
				var flag = res.write(data);
				console.log(flag);
				res.end();
			}
		})
	}
}).listen(1337,'localhost');