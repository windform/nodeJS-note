//sigint事件回调函数的使用示例
process.stdin.resume();
process.on('SIGINT',function(){
	console.log('接收到SIGINT信号');
})