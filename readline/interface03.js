//使用interface对象逐行读取文件
var readline = require('readline');
var fs = require('fs');
var file = fs.createReadStream('./message.txt');
var out = fs.createWriteStream('./anotherMessage.txt');
var index=1;
out.write('line'+index.toString()+':');
index++;
var rl=readline.createInterface({
	input:file,
	output:out,
	terminal:true
});
rl.on('line',function(line){
	out.write('line'+index.toString()+':');
	index++;
})