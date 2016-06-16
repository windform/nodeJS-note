//使用ReadStream对象读取文件
//fs.createReadStream(path,[options])

//使用createReadStream方法读取文件
var fs = require('fs');
var file = fs.createReadStream('./message.txt',{start:3,end:12});
file.on('open',function(fd){
	console.log('开始读取文件');
});
file.on('data',function(data){
	console.log('读取到数据:'+data);
});
file.on('end',function(data){
	console.log('文件读取完毕');
});
file.on('close',function(data){
	console.log('文件被关闭');
});
file.on('error',function(data){
	console.log('读取文件失败');
})