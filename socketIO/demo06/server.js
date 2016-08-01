//向所有客户端广播消息
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

app.get('/',function(req,res){
  res.sendfile(__dirname+'/index.html');
})
server.listen(1337);

var names = [];

io.on('connection', function (socket) {
	socket.emit('login',names);
	socket.on('login',function(name){
		names.push(name);
		io.sockets.emit('login',names);
	});
});