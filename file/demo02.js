var fs = require('fs');

try{
	var data = fs.readFileSync('./test.txt');
	console.log(data);
}
catch(ex){
	console.log("文件读取错误")
}

try{
	var data = fs.readFileSync('./index.html');
	console.log(data.toString());
}
catch(ex){
	console.log("文件读取错误")
}
