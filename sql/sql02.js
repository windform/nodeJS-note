//close方法中forceclose参数值的使用示例
var mongo = require('mongodb');
var server = new mongo.Server('localhost', 27017, {auto_reconnect: true},{safe:true});
var db = new mongo.Db('node-mongo-example', server);

db.open(function(err, db) {
	if(err) throw err;
	else{
		db.collection('users',function(err,collection){
			var obj={
				username:'回忆微微笑',
				sex:'男',
				age:23,
				job:'web designer'
			}
			collection.insert(obj,function(err,docs){
				if(err) throw err;
				else{				
					console.log(docs);
					db.close(false);
				}
			})
		})
	}
});
db.once('close',function(err,db){
	if(err) throw err;
	else{
		db.open(function(err,db){
			db.collection('users',function(err,collection){
				var obj={
					username:'微笑的天使',
					sex:'女',
					age:12,
					job:'student'
				};
				collection.insert(obj,function(err,docs){
					if(err) throw err;
					else{
						console.log(docs);
						db.close(true);
					}
				})
			})
		})
	}
})


