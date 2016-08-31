var fs = require('fs');
/*fs.link('./message.txt','./test/message-link.txt',function(err){
	if(err) console.log('创建硬链接失败');
	else console.log('创建硬链接成功');
});*/
fs.unlink('./test/message-link.txt',function(err){
	if(err) console.log('删除硬链接失败');
	else console.log('删除硬链接成功');
});