//使用domain对象捕捉错误
var domain = require('domain');
var fs = require('fs');
var d = domain.create();
d.name = 'd1';
d.on('error',function(err){
	console.error('%s捕捉到错误！',d.name,err);
});
d.run(function(){
	process.nextTick(function(){
		setTimeout(function(){
			fs.open('none-existent file','r',function(err,fd){
				if(err){throw err}
			})
		},1000);
	})
})