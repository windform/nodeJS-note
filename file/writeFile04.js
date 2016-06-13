//复制图片文件
var fs = require('fs');
fs.readFile('./tu.jpg','base64',function(err,data){
	fs.writeFile('./img.jpg',data.toString(),'base64',function(err,date){
		if(err) console.log("复制图片失败");
		else console.log("复制图片成功");		
	})
})
