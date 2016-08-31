var fs = require('fs');

fs.rmdir('./hello',function(err){
	if(err) console.log('删除空目录失败');
	else console.log('删除空目录成功');
});