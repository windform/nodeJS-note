var fs = require('fs');
fs.mkdir('./test',0761,function(err){
	if(err) console.log('创建目录失败');
	else console.log('创建目录成功');
})