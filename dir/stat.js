//查看文件或目录信息
//fs.stat(path,callback)   fs.lstat(path,callback)
var fs = require('fs');
fs.stat('./note1.log',function(err,stats){
	console.log(stats);
})
