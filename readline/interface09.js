//interface对象的sigint事件回调函数使用示例
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
rl.on('SIGINT',function(){
	rl.question('are you sure you want to exit',function(answer){
		if(answer.match(/^y(es)$/i)) rl.pause()
	})
});
rl.on('close',function(){
	console.log('\r\n行数据读取操作终止');
	process.exit();
})