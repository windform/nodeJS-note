//定制并显示命令提示符
var readline=require('readline');
var rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
rl.setPrompt('请输入：',7);
rl.prompt();
rl.on('line',function(line){
	var cl = (line=='exit' | line=='quit' | line=='q');
	if (cl) {
		rl.close();
	}else{
		console.log('你输入了：'+line);
		rl.prompt();
	}
});
rl.on('close',function(){
	console.log('\r\n行数据读取操作终止');
})