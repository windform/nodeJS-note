//观察drain事件的触发时机
var fs = require('fs');
var readStream = fs.createReadStream('./music.mp3');
var out = fs.createWriteStream('./music.mp3');
readStream.on('data',function(data){
	var flag = out.write(data);
	console.log(flag);
})
out.on('drain',function(){
	console.log('操作系统缓存区中的数据已全部输出')
})