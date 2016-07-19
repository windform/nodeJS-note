//调用connection.release()方法，会把连接放回连接池，等待其它使用者使用!
var mysql  = require('mysql'); 

//创建连接池
var pool = mysql.createPool({    
	host     : 'localhost',      
	user     : 'pma',             
	password : '',      
	port: 3306,                  
	database: 'test' 
});

pool.getConnection(function(err, connection) {
 
	connection.query( 'SELECT * FROM node;', function(err, result) {   
		console.log(result);
		connection.release();
	});
	 
	connection.query( 'SELECT * FROM node;', function(err, result) {
	 
		console.log(result);
		connection.release();

	});

});