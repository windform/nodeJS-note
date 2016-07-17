//在查询条件中指定子文档
var mongo = require('mongodb');
//设置数据库服务
var server = new mongo.Server('localhost', 27017, {auto_reconnect: true});
//连接数据表
var db = new mongo.Db('node-mongo-example', server);

var store1={name:'store1',goods:{type:'food',price:11}}; 
var store2={name:'store2',goods:{type:'food',price:10}}; 
var store3={name:'store3',goods:{type:'food',price:9}}; 
var store4={name:'store4',goods:{type:'food',price:8}}; 
var store5={name:'store5',goods:{type:'book',price:9}};
var docs=[store1,store2,store3,store4,store5]; 

db.open(function(err, db) {
	if(err) throw err;
	else{
		db.collection('stores',function(err,collection){
			collection.insert(docs,function(err,docs){
				if (err) throw err;
				else{
					var condition={goods:{type:'food',price:8}}
					collection.find(condition).toArray(function(err,docs){
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
