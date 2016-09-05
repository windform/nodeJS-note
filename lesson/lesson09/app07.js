var fs = require('fs');
var out = fs.createWriteStream('./test3.txt');
out.on('error',function(err){
	console.log('文件写入发生错误');
});
out.write('一些测试数据');
out.end();
out.write('一些新的测试数据');   //写入文件结束后无法再写入文件，此时会发生错误