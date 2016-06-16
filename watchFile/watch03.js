//使用change事件触发时的回调函数执行 文件改变时的处理
var fs = require('fs');
var watcher = fs.watch('./message.txt');

watcher.on('change',function(event,filename){
	console.log(filename+'文件发生'+event+'事件');
})