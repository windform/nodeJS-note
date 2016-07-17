//将user对象插入到mongodb数据库中
var mongo = require('mongodb');

var server = new mongo.Server('localhost', 27017, {auto_reconnect: true});
var db = new mongo.Db('node-mongo-example', server);

db.open(function(err, db) {
	if(err) throw err;
	else{
		db.collection('users',function(err,collection){
			var obj={
				username:'蓝白',
				sex:'男',
				age:24,
				job:'web developer'
			}
			collection.insert(obj,function(err,docs){
				console.log(docs);
				db.close();
			})
		})
	}
});
