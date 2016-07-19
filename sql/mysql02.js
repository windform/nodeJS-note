//连接池Pooling connections
var mysql  = require('mysql'); 

//创建连接池
var pool = mysql.createPool({    
	host     : 'localhost',      
	user     : 'pma',             
	password : '',      
	port: 3306,                  
	database: 'test' 
});

//监听connection事件
pool.on('connection', function(connection) { 
	connection.query('SET SESSION auto_increment_increment=1');
});

//直接使用
pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
	if (err) throw err;
	console.log('The solution is: ', rows[0].solution);
});
 
//共享
pool.getConnection(function(err, connection) {
	// connected! (unless `err` is set)
	console.log('connected');
});