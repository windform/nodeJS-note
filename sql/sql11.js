var mongo = require('mongodb');
var server = new mongo.Server('localhost',27017,{auto_reconnect:true},{safe:true});
var db = new mongo.Db('node-mongo-example',server);

//var condition =({username:'回忆微微笑'},{fields:{username:1}})
var condition =({username:'回忆微微笑'},{fields:{_id:0}})

db.open(function(err,db){
	if(err) throw err;
	else{
		db.collection('users',function(err,collection){
			if(err) throw err;
			else{
				collection.find(condition).toArray(function(err,docs){
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