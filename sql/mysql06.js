//Connection对象的query方法返回对象的使用示例
var mysql = require('mysql');
var fs = require('fs');
//数据库的配置信息
var connection = mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'root',
	password:'',
	database:'mysql'
});

var out = fs.createWriteStream('./message.txt');
out.on('error',function(err){
	console.log('写入文件操作失败，错误信息为：'+err.message);
	process.exit();
})

//连接数据库
connection.connect(function(err){
	if(err) throw err;
	else{
		console.log('连接数据库成功');
		var query = connection.query('SELECT * FROM test');
		query
		.on('error',function(err){
			console.log('读取数据失败，错误信息为：'+err.message);
			process.exit();
		})
		.on('fields',function(fields){
			var str = "";
			fields.forEach(function(field){
				if(str!="")
					str+=String.fromCharCode(9);
				str+=field.name;
			});
			out.write(str+'\r\n');
		})
		.on('result',function(row){
			connection.pause();
			out.write(row.id+String.fromCharCode(9)+row.username+String.fromCharCode(9)+row.firstname+'\r\n');
			connection.resume();
		})
		.on('end',function(){
			console.log('数据全部写入完毕');
			connection.end();
		})
	}
});
