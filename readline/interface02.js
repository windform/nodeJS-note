//使用completer属性实现tab补全功能
var readline=require('readline');
function completer(line){
	var completions = 'help,error,quit,aaa,bbb,ccc'.split(',');
	var hits=completions.filter(function(c){
		return c.indexOf(line) == 0;
	});
	return [hits,line];
}
var rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout,
	completer:completer
});
rl.on('line',function(line){
	if(line=='exit'||line=='quit'||line=='q') {
		rl.close();
	}else{
		console.log('你输入了：'+line);
	}
});
rl.on('close',function(){
	console.log('行数据读取操作终止');
})