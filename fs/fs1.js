//fs.readFile(filename,[encoding],[callback(err,data)])

//fs.readFileSync(): 同步读取文件
var fs = require('fs');
fs.readFile('content.txt','utf-8',function(err,data){
	if(err){
		console.error(err);
	}else{
		console.log(data)
	}
})