//resolve方法：以应用程序根目录为起点，根据所有的参数值字符串解析出一个绝对路径
//语法：path.join([path1],[path2],[...])

var fs = require('fs');
var path = require('path');
var mypath = path.resolve('a','b','c');
console.log(mypath);
var file = fs.createReadStream(mypath+'/message.txt');
file.on('data',function(data){
	console.log(data.toString());
})
