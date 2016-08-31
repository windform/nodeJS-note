var fs = require('fs');
fs.rename('./message01.txt','./test/message01.txt',function(err){
	if(err) console.log('移动文件失败');
	else console.log('移动文件成功');
});
