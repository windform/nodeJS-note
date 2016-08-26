
var express = require('express');
var http = require('http');
var app = express();

//一个简单的express示例应用程序
app.get('/index.html',function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<head><meta charset="utf-8"/></head>')
	res.end('hello express\n');
});

//设置路由，在路由中使用参数
app.get('/route.html/:id/:name',function(req,res){
	var str = '';
	for(key in req.params){
		if(str!='') str+='<br/>';
		str+="<br/>参数名:"+key;
		str+=String.fromCharCode(9)+"参数值："+req.params[key];
	}
	res.send(str);
});

//在路由中使用正则表达式
app.get('/route1.html/:id?/:name?',function(req,res){
	var str = '';
	if(req.params.id) str+='ID参数值：'+req.params.id;
	if(str!='') str+='<br/>';
	if(req.params.name) str+='NAME参数值：'+req.params.name;
	res.send(str);
});

//next()方法的使用示例
app.get('/route2.html/:id(\\d+)',function(req,res,next){
	if(req.params.id>10)
		next();
	else
		res.send('id参数值必须大于10.')
});
app.get('/route2.html/:id(\\d+)',function(req,res,next){
	res.send('你好\n');
});
app.listen(5020,'localhost')