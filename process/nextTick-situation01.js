var fs = require('fs');
var finish = function(){
	console.log('file read finish');
}

process.nextTick(finish);
console.log(fs.readFileSync('./process1.js').toString());