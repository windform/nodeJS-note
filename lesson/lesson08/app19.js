var fs = require('fs');
fs.truncate('./message.txt',10,function(err){
	if(err) console.log('文件截断失败');
	else {
		fs.stat('./message.txt',function(err,stats){
			console.log('文件尺寸为：'+stats.size+' 字节！');
		})
	}
})