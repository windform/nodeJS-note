//使用Interface对象读取用户输入行的数据
var readline=require('readline');
var rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
rl.on('line',function(line){
	var cl = (line=='exit' | line=='quit' | line=='q');
	if (cl) {
		rl.close();
	}else{
		console.log('你输入了：'+line);
	}
});
rl.on('close',function(){
	console.log('行数据读取操作终止');
})