//与数据库建立连接及关闭数据库的代码示例
var mongo = require('mongodb');

var server = new mongo.Server('localhost', 27017, {auto_reconnect: true});
var db = new mongo.Db('node-mongo-example', server);

db.open(function(err, db) {
	if(err) throw err;
	else{
		console.log('成功建立数据库连接');
		db.close();
	}
});
db.on('close',function(err,db){
	if(err) throw err;
	else{
		console.log("成功关闭数据库");
	}
})