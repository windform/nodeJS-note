//读取目录
var fs = require('fs');
fs.readdir('./',function(err,files){
	if(err) console.log("读取目录失败");
	else console.log(files);
})