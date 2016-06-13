//同步和异步
//异步方法的调用
var fs = require("fs");
var data = fs.readFile('./index.html','utf8',function(err,data){
	console.log(data);
});