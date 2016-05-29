//fs.open(path,flags,[mode],[callback(err,fd)])

/*
flags的值：
r:读取
r+:读写
w:写入，不存在则创建
w+:读写，不存在则创建
a：追加，不存在则创建
a+:读取追加，不存在则创建

mode:给文件制定权限，默认是0666.回调函数会传递一个文件描述符fd
*/

//fs.read(fd,buffer,offset,length,position,[callback(err,bytesRead,buffer)])
/*
fd:读取文件
buffer:缓存区对象
offset:buffer的写入偏移量
length：要从文件读取的字节数
position:文件的读取位置
回调函数传递bytesRead和buffer，分别表示读取的字节数和缓冲区的对象
*/

var fs = require('fs');
//以只读模式打开文件
fs.open('content.txt','r',function(err,fd){
	if(err){
		console.error(err);
		return;
	}

	var buf = new Buffer(8);
	fs.read(fd,buf,0,8,null,function(err,bytesRead,buffer){
		if(err){
			console.error(err);
			return;
		}
		console.log('bytesRead:'+bytesRead);
		console.log(buffer);
	})
})