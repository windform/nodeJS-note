//使用ReadStream对象读取文件
//fs.createReadStream(path,[options])

//暂停并恢复文件的读取
var fs = require('fs');
var file = fs.createReadStream('./message.txt');
file.pause();
file.on('data',function(data){
	console.log('读取到数据:'+data);
});
setTimeout(function(){
	file.resume();
},3000)