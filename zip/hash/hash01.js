var crypto = require('crypto');
var fs = require('fs');
var shasum=crypto.createHash('sha1');
var s = fs.ReadStream('./hash01.js');
s.on('data',function(d){
	shasum.update(d);
});
s.on('end',function(){
	var d = shasum.digest('hex');
	console.log(d);
})