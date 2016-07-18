//指定某个子数据文档的某个元素的查询条件
var mongo = require('mongodb');
var util = require('util');
var server = new mongo.Server('localhost',27017,{auto_reconnect:true},{safe:true});
var db = new mongo.Db('node-mongo-example',server);

var condition ={'goods.price':{$lt:10}}

db.open(function(err,db){
	if(err) throw err;
	else{
		db.collection('stores',function(err,collection){
			if(err) throw err;
			else{
				collection.find(condition).toArray(function(err,docs){
					if(err) throw err;
					else{
						console.log(util.inspect(docs,{depth:3}));
						db.close();
					}
				})
			}
		})
	}
})