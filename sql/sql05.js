//同时指定多个字段值得查询条件

var mongo = require('mongodb');
//设置数据库服务
var server = new mongo.Server('localhost', 27017, {auto_reconnect: true});
//连接数据表
var db = new mongo.Db('node-mongo-example', server);

db.open(function(err, db) {
	if(err) throw err;
	else{
		db.collection('users',function(err,collection){
			var docs=[{type:'food',price:11},
					{type:'food',price:10},
					{type:'food',price:9},
					{type:'food',price:8},
					{type:'book',price:9}]

			collection.insert(docs,function(err,docs){
				if (err) throw err;
				else{
					collection.find({type:'food',price:{$lt:10}}).toArray(function(err,docs){
						if(err) throw err;
						else{
							console.log(docs);
							db.close();
						}
					})
				}
			})
		})
	}
});
