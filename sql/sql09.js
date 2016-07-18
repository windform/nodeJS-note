//指定某个子数据文档的某个元素的查询条件
var mongo = require('mongodb');
var util = require('util');
var server = new mongo.Server('localhost',27017,{auto_reconnect:true},{safe:true});
var db = new mongo.Db('node-mongo-example',server);

var food1 = {type:'food',price:11};
var food2 = {type:'food',price:10};
var food3 = {type:'food',price:9};
var food4 = {type:'food',price:8};
var foods = [food1,food2,food3,food4];
var store1 = {name:'store1',goods:foods};

var book1 = {type:'book',price:11};
var book2 = {type:'book',price:10};
var book3 = {type:'book',price:9};
var book4 = {type:'book',price:8};
var books = [book1,book2,book3,book4];
var store2 = {name:'store2',goods:books};

var storeArray = [store1,store2];

db.open(function(err,db){
	if(err) throw err;
	else{
		db.collection('stores',function(err,collection){
			if(err) throw err;
			else{
				collection.insert(storeArray,function(err,docs){
					if(err) throw err;
					else{
						collection.find({'goods.0.type':'book'}).toArray(function(err,docs){
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
	}
})