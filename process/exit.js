//exit事件回调函数的使用示例
process.on('exit',function(){
	console.log('Node.js进程被退出');
});
process.exit();