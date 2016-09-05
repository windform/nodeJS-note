var fs = require('fs');
var path = require('path');
var mypath = path.resolve('a','b','c/message.txt');
console.log(mypath);
var file = fs.createReadStream(mypath);
file.on('data',function(data){
	console.log(data.toString());
})