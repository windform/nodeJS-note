//使用lookup方法获取地址
var dns = require('dns')
dns.lookup('google.com',4,function(e,r){
	if(e) console.log(e);
	else console.log(r);
})
