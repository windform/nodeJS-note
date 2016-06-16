//使用WriteStream对象写入文件
//fs.createWriteStream(path,[options])
/*-------------------------------------------------------------*/
//WtiteStream对象具有一个write方法，用于将数据流写入到目标对象
//writable.write(chunk,[encoding],[callback])
//chunk:可以是一个Buffer对象或者一个字符串，用于指定写入的数据
/*-------------------------------------------------------------*/
//WriteStream对象具有一个end方法，当没有数据再被写入流中时，可调用该方法关闭文件
//writable.end([chunk],[encoding],[callcack])
/*-------------------------------------------------------------*/
//WriteStream对象具有一个bytesWritten属性，属性值为当前已在文件中写入数据的字节数

var fs = require('fs');
var file = fs.createReadStream('./message.txt');
var out = fs.createWriteStream('./anotherMessage.txt');
file.on('data',function(data){
	out.write(data)
});
out.on('open',function(fd){
	console.log('需要被写入的文件已经被打开');
});
file.on('end',function(){
	out.end('再见。',function(){
		console.log('文件全部写入完毕。');
		console.log('共写入%d字节数据：'+out.bytesWritten)
	})
})
