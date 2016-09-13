var http = require('http');
var server = http.createServer(function(req,res){
	if(req.url != '/favicon.ico'){
		res.on('close',function(){
			console.log('连接中断');
		})
		setTimeout(function(){		
			res.writeHead(200,{'Content-Type':'text/html','Trailer':'Content-MD5'});
			res.addTrailers({'Content-MD5':'87asduy79soueiiuif8'});
			res.write("<html><head><meta charset='utf-8'/></head>");
			res.write("<body>你好</body></html>")
			res.end();
		},10000)
	}
}).listen(1337,'localhost');