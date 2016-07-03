//process.stdin 对象与process.stdout对象的使用示例
process.stdin.resume();
process.stdin.on('data',function(chunk){
	process.stdout.write('进程接收到数据:'+chunk);
})