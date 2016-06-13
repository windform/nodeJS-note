//同步和异步
//同步方法的调用
var fs = require("fs");
var data = fs.readFileSync('./index.html','utf8');
console.log(data);