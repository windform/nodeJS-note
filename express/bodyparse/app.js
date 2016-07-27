//使用bodyParser中间件上传文件
var express = require('express');
var util = require('util');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get('/index.html',function(req,res){
	res.sendfile(__dirname+'/index.html');
});
app.post('/index.html',function(req,res){

	console.log(util.inspect(req.files,{depth:1}));

	var file = req.files.myfile;
	fs.readFile(file.path,function(err,data){
		if(err) res.send('文件上传失败');
		else{
			fs.writeFile(file.name,data,function(err){
				if(err) res.send('写入文件操作失败');
				else res.send('文件上传成功');
			})
		}
	})
});
app.listen(1337,'localhost',function(){
	console.log('开始监听端口');
})