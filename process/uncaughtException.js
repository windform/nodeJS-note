//uncaughtException()事件回调函数的使用示例
process.on('uncaughtException',function(err){
	console.log('捕捉到一个未被处理的错误:'+err)
});
nonexistentFunc();