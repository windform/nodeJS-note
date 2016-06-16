//使用watch方法监视文件
var fs = require('fs');
fs.watch('./',function(event,filename){
	console.log(filename+'文件发生'+event+'事件');
})