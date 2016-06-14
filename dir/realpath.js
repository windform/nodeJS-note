//获取文件或目录的绝对路径
//fs.realpath(path,[cache],callback)
//同步：fs.realpathSync(path,[cache])

var fs = require('fs');
fs.realpath('./note1.log',function(err,resolvePath){
	if(err) throw err;
	else console.log(resolvePath);
})