var fs = require('fs');
function foo(){
	function beginAnotherTask(){
		var file = fs.createReadStream('./process.log');
		file.on('data',function(data){
			console.log("读取到%d字节。",data.length);
		})
	}
	process.nextTick(beginAnotherTask);
}

var file = fs.createReadStream('./process.log');
file.on('data',function(data){
	console.log("从process.log文件中读取到%d字节。",data.length);
});

foo();