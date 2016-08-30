var fs = require('fs');
fs.open('./message02.txt','w',function(err,fd){
	if(err){console.log(err)}
	else{
		var buf = new Buffer('我要成为全栈工程师');
		fs.write(fd,buf,3,9,0,function(err,written,buffer){
			fs.write(fd,buf,12,15,null,function(err,written,buffer){
				if(err) console.log('写入文件失败');
				else console.log('写入文件成功'); fs.fsync(fd);fs.close(fd);
			})
		})
	}
})