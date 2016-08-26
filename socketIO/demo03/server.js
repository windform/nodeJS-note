//在发送事件时指定回调函数
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
  socket.emit('setName','张三', function(data1,data2){
    console.log(data1);
    console.log(data2);
  });  
});