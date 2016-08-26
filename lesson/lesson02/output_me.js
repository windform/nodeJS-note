var fs = require('fs'), fileContent = 'nothing'; 
fs.readFile(__filename, "utf-8", function(err, file) { 
	if(err) { 
		console.log(err); return;
	 } 
	fileContent = file; 
	console.log('doSomethingWithFile: '+ fileContent +'\n');
}); 
//__filename:当前文件的绝对路径
console.log(__filename); 