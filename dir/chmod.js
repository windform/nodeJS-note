//修改文件或目录的读写权限
//fs.chmod(path,mode,callback)
//同步:fs.chmodSync(path,mode)

//fs.fchmod(path,mode,callback)
//同步:fs.fchmodSync(path,mode)


var fs = require('fs');
fs.chmod('./note1.log',0600,function(err){
	if(err) console.log('修改文件权限操作失败');
	else console.log('修改文件权限操作成功');
})
fs.chmod('./stat.js',0133,function(err){
	if(err) console.log('修改文件权限操作失败');
	else console.log('修改文件权限操作成功');
})