//join方法将多个参数值字符串连接成一个路径字符串
//语法：path.join([path1],[path2],[...])

var fs = require('fs');
var path = require('path');
var mypath = path.join(__dirname,'a','b','c');
console.log(mypath);
var file = fs.createReadStream(mypath+'/message.txt');
file.on('data',function(data){
	console.log(data.toString());
})
