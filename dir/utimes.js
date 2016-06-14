//修改文件访问时间及修改时间
//fs.utimes(path,atime,mtime,callback)
//同步：fs.utimesSync(path,atime,mtime)

//fs.futimes(path,atime,mtime,callback)
//同步:fs.futimesSync(path,atime,mtime)

var fs = require('fs');
fs.utimes('./note1.log',new Date(),new Date(),function(err){
	if(err) console.log('修改文件事件操作失败');
	else console.log('修改文件事件操作成功');
})