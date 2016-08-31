var fs = require('fs');
fs.symlink(__dirname+'./message.txt','./message-symlink.txt','file',function(err){
	if(err) {
		console.log('创建符号链接失败');
	}else {
		fs.readlink('./message-symlink.txt',function(err,linkString){
			if(err) console.log('读取符号链接失败');
			else console.log(linkString);
		})
	}
});
