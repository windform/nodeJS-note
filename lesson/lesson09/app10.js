var fs = require('fs');
var file = fs.createReadStream('./tiga.mp3');
var out = fs.createWriteStream('./mebi.mp3');
file.pipe(out,{end:false});
setTimeout(function(){
	file.unpipe(out);
	out.end();
},10)