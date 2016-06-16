//watch.close()方法停止对文件的监视
var fs = require('fs');
var watcher = fs.watch('./',function(event,filename){
	console.log(filename+'文件发生'+event+'事件');
	watcher.close();
})