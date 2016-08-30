fs = require('fs');
fs.realpath('./test.txt',function(err,resolvepath){
	if(err) console.log(err);
	else console.log(resolvepath);
})
