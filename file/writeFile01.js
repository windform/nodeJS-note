var fs = require('fs');
var str = "hello writeFile";
fs.writeFile('./message.txt',str,function(err,data){
	if(err) console.log("写入文件失败");
	else console.log("写入文件成功")
})