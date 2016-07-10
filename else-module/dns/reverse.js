//使用reverse方法反解析IP地址
var dns = require('dns')
dns.reverse('173.194.127.199',function(e,domain){
	if(e) console.log(e);
	else console.log(domain);
})
