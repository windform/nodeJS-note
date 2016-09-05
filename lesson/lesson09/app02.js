var fs = require('fs');
var file = fs.createReadStream('./message.txt');
file.pause();
file.on('data',function(data){
	console.log('读取到文件：'+data);
});
setTimeout(function(){
	file.resume();
},2000)
file.on('error',function(err){
	console.log('读取文件发生错误：'+err);
})