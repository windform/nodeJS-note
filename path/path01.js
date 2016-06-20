//normalize方法将非标准路径字符串转换为标准路径字符串
//语法：path.normalize(p):p表示需要被转换的路径字符串，该方法返回被转换后的路径字符串

var fs = require('fs');
var path = require('path');
var mypath = path.normalize('.//a/b/c/');
console.log(mypath);
var file = fs.createReadStream(mypath+'message.txt');
file.on('data',function(data){
	console.log(data.toString());
})
