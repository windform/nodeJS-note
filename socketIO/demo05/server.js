//在Express框架中使用socket.IO类库
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

app.get('/',function(req,res){
  res.sendfile(__dirname+'/index.html');
})
server.listen(1337);
io.on('connection', function (socket) {
	socket.on('set nickname',function(name){
		socket.emit('send nickname',name);
	});

	socket.on('get nickname',function(err,name){
		if(err) socket.emit('err',err.message);
		else socket.emit('send nickname',name);
	});

});