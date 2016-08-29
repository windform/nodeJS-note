var fs = require('fs');
fs.readFile('./a.png','base64',function(err,data){
	//console.log(data);
	fs.writeFile('./b.png',data.toString(),'base64',function(err){
		if(err) console.log(err);
		else console.log('复制图片成功');
	})
})