//将user对象插入到mongodb数据库中
var mongo = require('mongodb');

//设置数据库服务
var server = new mongo.Server('localhost', 27017, {auto_reconnect: true});
//连接数据表
var db = new mongo.Db('node-mongo-example', server);

db.open(function(err, db) {
	if(err) throw err;
	else{
		db.collection('users',function(err,collection){
			collection.find({}).toArray(function(err,docs){
				if(err) throw err;
				else{
					console.log(docs);
					db.close();
				}
			})
		})
	}
});
