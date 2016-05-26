//process

//argv:命令行参数数组
//console.log(process.argv)

//stdout:标准输出流
process.stdout.write();

//stdin:标准输入流
process.stdin.resume();
process.stdin.on('data',function(data){
	process.stdout.write('read from console:'+data.toString())

})

//nextTick(callback):为时间循环设置一项任务