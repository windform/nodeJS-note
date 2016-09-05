var fs = require('fs');
var file = fs.createReadStream('./message.txt',{start:3,end:12});
file.on('open',function(fd){
	console.log('开始读取文件');
});
file.on('data',function(data){
	console.log('读取到文件：'+data);
});
file.on('end',function(){
	console.log('读取文件结束');
});
file.on('close',function(){
	console.log('关闭文件');
});
file.on('error',function(err){
	console.log('读取文件发生错误：'+err);
})