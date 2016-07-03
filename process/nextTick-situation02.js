var fs = require('fs');
function  foo(){
	function beginAnotherTask(){
		var file = fs.createReadStream('./file.docx');
		file.on('data',function(data){
			console.log('read %d bite.',data.length);
		})
	}
	process.nextTick(beginAnotherTask);
}

var file = fs.createReadStream('./file.docx');
file.on('data',function(data){
	console.log('from this file read %d bite.',data.length);
});
foo();