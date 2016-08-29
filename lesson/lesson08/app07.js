var fs = require('fs');
fs.open('./message.txt','r',function(err,fd){
	var buf = new Buffer(255);
	fs.read(fd,buf,0,15,0,function(err,bytesRead,buffer){
		console.log(buffer.slice(0,bytesRead).toString());
	})
})