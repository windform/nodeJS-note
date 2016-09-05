var fs = require('fs');
var path = require('path');
var mypath = path.resolve('a','b','c');
console.log(mypath);
var file = fs.createReadStream(mypath+'/message.txt');
file.on('data',function(data){
	console.log(data.toString());
})