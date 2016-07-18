//在查询条件中指定一个数组的完整内容
var mongo = require('mongodb');
var server = new mongo.Server('localhost',27017,{auto_reconnect:true},{safe:true});
var db = new mongo.Db('node-mongo-example',server);
var article1={name:'TV',tags:['device','electric equipment']};
var article2={name:'apple',tags:['fruit','food','citrus']};
var article3={name:'node.js',tags:['language','web','computer']};
var docs = [article1,article2,article3]
db.open(function(err,db){
	if(err) throw err;
	else{
		db.collection('articles',function(err,collection){
			if(err) throw err;
			else{
				collection.insert(docs,function(err,docs){
					if(err) throw err;
					else{
						collection.find({tags:['fruit','food','citrus']}).toArray(function(err,docs){
							if(err) throw err;
							else{
								console.log(docs);
								db.close();
							}
						})

					}
				})
			}
		})
	}
})