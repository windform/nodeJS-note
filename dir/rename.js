//移动文件或目录
//fs.rename(oldpath,newpath,callback)
//同步：fs.renameSync(oldpath,newpath)

var fs = require('fs');
fs.rename('./note1.log','./note.txt',function(err){
	if(err) console.log('文件重命名失败');
	else console.log('文件重命名成功'); 
})