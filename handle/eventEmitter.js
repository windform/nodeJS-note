//EventEmitter类
//使用on方法绑定事件处理函数
var http = require('http');
var server = http.creatServer();	//创建server服务

//为server服务器在接收到客户端请求时触发的request事件绑定事件处理函数
server.on('request',function(req,res){
	console.log(req.url);
	res.send();
});
server.listen(1337,'127.0.0.1');