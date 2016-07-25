//basicAuth中间件使用示例
var express = require('express');
var app = express();
var basicAuth = require('basic-auth');
var auth = function(req, resp, next) {
	function unauthorized(resp) {
		resp.set('WWW-Authenticate', 'Basic realm=Input User&Password');
		return resp.sendStatus(401);
	}
	var user = basicAuth(req);
	if (!user || !user.name || !user.pass) {
		return unauthorized(resp);
	} 
	if (user.name === 'windform' && user.pass === 'thinkpade420') {
		return next();
	} else {
		return unauthorized(resp);
	}
};

app.get('/',auth,function(req,res){
	res.send('hello,user');
});
app.listen(1337,'localhost',function(){
	console.log('正在监听端口');
});

