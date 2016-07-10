//Interface对象的pause方法的使用示例
var readline=require('readline');
var rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
rl.on('line',function(line){
	var cl = (line=='exit' | line=='quit' | line=='q');
	if (cl) {
		rl.close();
	}else if(line=='pause'){
		rl.pause();
	}else{
		console.log('你输入了：'+line);
	}
});
rl.on('pause',function(){
	console.log('暂停读取数据');
});
rl.on('close',function(){
	console.log('行数据读取操作终止');
})