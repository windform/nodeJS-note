//定制并显示命令提示符
var readline=require('readline');
var rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
rl.question('what do you think of node.js',function(answer){
	console.log('谢谢您的回答，您的评价为：',answer);
	rl.close();

})
/*rl.on('close',function(){
	console.log('\r\n行数据读取操作终止');
})*/