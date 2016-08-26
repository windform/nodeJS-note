//使用命名空间
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

app.get('/',function(req,res){
  res.sendfile(__dirname+'/index.html');
})
server.listen(1337);

var chat = io.of('/chat').on('connection',function(socket){
	socket.send('欢迎访问chat的空间');
	socket.on('message',function(msg){
		console.log('chat命名空间接收到消息:'+msg);
	})
});

var news = io.of('/news').on('connection',function(socket){
	socket.emit('send message','欢迎访问news的空间');
	socket.on('send message',function(data){
		console.log('news命名空间接收到send message消息:'+data);
	})
})