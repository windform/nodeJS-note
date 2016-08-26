//使用数据库验证用故名和密码
var express = require('express');
var mysql = require('mysql');
var pool = mysql.createPool({
	host : 'localhost',
	port : 3306,
	database : 'mysql',
	user : 'root',
	password : ''
});

var basicAuth = require('basic-auth');

var auth = function(req, resp, next) {
	function unauthorized(resp) {
		resp.set('WWW-Authenticate', 'Basic realm=Input User&Password');
		return resp.sendStatus(401);
	}

	function check(user,pass){
		pool.getConnection(function(err,connection){
			if(err) {connection.release();}
			else{
				connection.query('SELECT count(1) count FROM test1 WHERE username=? AND password=?',{user,pass},function(err,result){
					if(err) {connection.release();}
					else{
						//console.log(result);
						connection.release();
						if(result[0].count>0){return true;}
						else{
							return false;
						}
					}
				})
			}
		})
	}

	var user = basicAuth(req);
	if (!user || !user.name || !user.pass) {
		return unauthorized(resp);
	} 

	var bool = check(user.name,user.pass);

   if(bool) {
		return next();
	} else {
		return unauthorized(resp);
	}
};


/*var auth = function(user, pass) {
	pool.getConnection(function(err,connection){
		if(err) {connection.release();}
		else{
			connection.query('SELECT * FROM users WHERE User=? AND Password=?',{user,pass},function(err,result){
				if(err) {connection.release();}
				else{
					console.log(result);
					connection.release();
					if(result[0].count>0){callback(null,true);}
					else{
						callback(null,false);
					}
				}
			})
		}
	})
};*/
/*var auth = function(req, resp, next) {
	function unauthorized(resp) {
		resp.set('WWW-Authenticate', 'Basic realm=Input User&Password');
		return resp.sendStatus(401);
	};
	var user = basicAuth(req);
	if (!user || !user.name || !user.pass) {
		return unauthorized(resp);
	};
	pool.getConnection(function(err,connection){
		if(err) {connection.end();}
		else{
			connection.query('SELECT * FROM users WHERE User=? AND Password=?',{name,pass},function(err,result){
				if(err) {connection.release();}
				else{
					connection.release();
					if(result[0].count>0){callback(null,true);}
					else{
						callback(null,false);
					}
					console.log(result);
				}
			})
		}
	})
	if (user.name === 'windform' && user.pass === 'thinkpade420') {
		return next();
	} else {
		return unauthorized(resp);
	}
};*/
var app = express();
//app.use(auth);
app.get('/',auth,function(req,res){
	res.send('hello,user');
});
app.listen(1337,'localhost',function(){
	console.log('正在监听端口');
});

