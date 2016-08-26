//创建socket.io服务器
/*var http = require('http');
var sio = require('socket.io');
var fs = require('fs');
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end(fs.readFileSync('./index.html'));
});
server.listen(1337);
var socket = sio.listen(server);
socket.on('connection',function(socket){
	console.log('客户端建立连接');
	socket.send('你好');
	socket.on('message',function(msg){
		console.log('接收到一个消息：',msg);
	});
	socket.on('disconnect',function(){
		console.log('客户端断开连接');
	});
})*/

var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(1337);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data);
  });
}

io.on('connection', function (socket) {
  /*socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });*/

  console.log('客户端建立连接');
  socket.send('你好');
  socket.on('message',function(msg){
  	console.log('接收到一个消息：',msg);
  });
  socket.on('disconnect',function(){
  	console.log('客户端断开连接');
  });
  
});