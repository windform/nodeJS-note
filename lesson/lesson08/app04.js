var fs = require('fs');
var data = new Buffer('我喜爱编程');
fs.writeFile('./message01.txt',data,function(err){
	if(err) console.log('写入文件失败');
	else console.log('写入文件成功');
})