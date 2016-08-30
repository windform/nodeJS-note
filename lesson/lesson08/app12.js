fs = require('fs')
fs.exists('./message.txt',function(exists){
	if(exists){console.log('存在');}
	else console.log('不存在');
})
