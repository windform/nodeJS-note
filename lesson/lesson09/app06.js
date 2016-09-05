var fs = require('fs');
var readStream = fs.createReadStream('./tiga.mp3');
var out = fs.createWriteStream('./dyna.mp3');
readStream.on('data',function(data){
	var flag = out.write(data);
	console.log(flag);
})
out.on('drain',function(){
	console.log('操作系统缓存区中的数据已全部输出。')
})