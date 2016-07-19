//防止SQL注入,可以使用pool.escape()和connect.escape();
var mysql = require('mysql');
var pool = mysql.createPool({    
	host     : 'localhost',      
	user     : 'pma',             
	password : '',      
	port: 3306,                  
	database: 'test' 
});

pool.getConnection(function(err, connection) {
 
	connection.query('SELECT * FROM node WHERE id = ' + '5 OR ID = 6', function(err, result) {   
		console.log(result);
		connection.release();
	});

	connection.query('SELECT * FROM node WHERE id = ' + pool.escape('5 OR ID = 6'), function(err, result) { 
		console.log(result);
		connection.release();
		connection.end();
	});
});