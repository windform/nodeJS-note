//断线重连
var mysql = require('mysql');

var db_config = {
	host     : 'localhost',      
	user     : 'pma',             
	password : '',      
	port: 3306,                  
	database: 'test' 
};

var connection;

function handleDisconnect() {
		connection = mysql.createConnection(db_config);                                              
		connection.connect(function(err) {             
		if(err) {                                    
		console.log('进行断线重连：' + new Date());
		setTimeout(handleDisconnect, 2000);   //2秒重连一次
		return;
		}        
		console.log('连接成功'); 
	});                                                                          
	connection.on('error', function(err) {
		console.log('db error', err);
		if(err.code === 'PROTOCOL_CONNECTION_LOST') {
		handleDisconnect();                        
		} else {                                     
		throw err;                                
		}
	});
}

handleDisconnect();