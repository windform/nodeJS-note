//使用resolveMx方法解析域名
var dns = require('dns')
dns.resolveMx('google.com',function(err,addressses){
	if(err) console.log(err);
	else console.log(addressses);
})
