var fs = require('fs');
fs.readFile('./test.txt',function(err,data){
	if(err) console.log("文件读取错误");
	else console.log(data);
});
fs.readFile('./index.html',function(err,data){
	if(err) console.log("文件读取错误");
	else console.log(data.toString());
});