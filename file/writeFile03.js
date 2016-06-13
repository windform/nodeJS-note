//追加数据
var fs = require('fs');
var options = {
	flag : 'a'
}
var str = "我是追加的数据";
fs.writeFile('./message.txt',str,options,function(err){
	if(err) console.log("追加文件失败");
	else console.log("追加文件成功")
})