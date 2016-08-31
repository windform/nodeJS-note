var fs = require('fs');
fs.chmod('./message01.txt',0444,function(err){
	if(err) console.log('修改文件权限失败');
	else console.log('修改文件权限成功');
});
fs.chmod('./a.png',0766,function(err){
	if(err) console.log('修改文件权限失败');
	else console.log('修改文件权限成功');
});