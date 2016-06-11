//node debug <需要被执行的脚本文件名>
console.log("hello,world");
function foo(){
	console.log("hello,foo");
	return 100;
}
var bar = "this is a pen";
var http = require("http");
var i = foo();
console.log(i);