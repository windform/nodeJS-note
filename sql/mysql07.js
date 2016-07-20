//创建并使用连接池
var mysql = require('mysql');
//数据库的配置信息
var pool = mysql.createPool({
	host:'localhost',
	port:3306,
	user:'root',
	password:'',
	database:'mysql'
});

pool.getConnection(function(err,connection){
	if(err) throw err;
	else{
		console.log('与mysql数据库建立连接成立');
		connection.query("SELECT * FROM test",function(err,rows){
			if(err) console.log('查询数据失败');
			else{
				console.log(rows);
				pool.end();
			}
		})
	}
})