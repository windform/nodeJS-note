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

  socket.emit('news',{hello:'你好。'});
  socket.on('my other event',function(data){
    console.log('服务器端接收到数据:%j',data);
  })  

});