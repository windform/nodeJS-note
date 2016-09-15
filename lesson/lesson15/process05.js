var fs = require('fs');
var finish = function(){
	console.log('文件读取完毕');
}
process.nextTick(finish);
console.log(fs.readFileSync('./process.log').toString());