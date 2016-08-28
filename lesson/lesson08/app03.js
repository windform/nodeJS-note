var fs = require('fs');
fs.writeFile('./message.txt','这是第一行。\r\n这是第二行。',function(err){
	if(err) console.log('写入文件失败');
	else console.log('写入文件成功');
})