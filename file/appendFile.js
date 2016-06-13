var fs = require('fs');
fs.appendFile('./appendMessage.txt','appendFile方法追加的数据','utf8',function(err){
	if(err) console.log("追加文件失败");
	else console.log("追加文件成功");
})