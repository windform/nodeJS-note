//服务器端和客户端之间互相发送事件
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
  socket.emit('news', { hello: '你好' });
  socket.on('my other event', function (data) {
    console.log('服务器端接收到数据: %j ',data);
});

  
});