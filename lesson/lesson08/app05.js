var fs = require('fs');
var options ={
	flag : 'a',
	mode : 0711,
	encoding:'utf8'
};
fs.writeFile('./message01.txt','我是追加的数据',options,function(err){
	if(err) console.log('追加数据失败');
	else console.log('追加数据成功');
});
fs.appendFile('./message.txt','\r\n我是追加的数据','utf8',function(err){
	if(err) console.log('追加数据失败');
	else console.log('追加数据成功');
})