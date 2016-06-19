var fs = require('fs');
var out = fs.createWriteStream('./text01.txt');
for(var i=0;i<=10000;i++){
	var flag = out.write(i.toString());
	console.log(flag);
}
out.on('drain',function(){
	console.log('操作系统缓存区中的数据已经全部输出');
})
var out = fs.createWriteStream('./text02.txt');
for(var i=0;i<=10;i++){
	var flag = out.write(i.toString());
	console.log(flag);
}
out.on('drain',function(){
	console.log('操作系统缓存区中的数据已经全部输出');
})