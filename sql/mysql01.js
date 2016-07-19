var mysql = require('mysql');

//连接信息
var connection = mysql.createConnection({
	host:'localhost',
	user:'pma',
	password:'',
	port:3306,
	database:'test'
});
//建立连接
connection.connect(function(err){
	if(err){
		console.log("[query] - :"+err);
		return;
	}else{
		console.log("[connection connect] successed");
	}
});


//增
/*var  userAddSql = 'INSERT INTO node(id,username,userpas) VALUES(0,?,?)';
var  userAddSql_Params = ['tom', '4fg6sa7fg'];
connection.query(userAddSql,userAddSql_Params,function (err, result) {
if(err){
console.log('[INSERT ERROR] - ',err.message);
return;
}       
console.log('INSERT ID:',result);       
});
*/

//改
/*var  userAddSql = 'UPDATE node SET username=?,userpas=? WHERE id=?';
var  userAddSql_Params = ['jerry', 'a pretty mouse',3];
connection.query(userAddSql,userAddSql_Params,function (err, result) {
if(err){
console.log('[UPDATE ERROR] - ',err.message);
return;
}       
console.log('UPDATE ID:',result);       
});*/

//查
/*var  userAddSql = 'SELECT * FROM node';
connection.query(userAddSql,function (err, result) {
if(err){
console.log('[SELECT ERROR] - ',err.message);
return;
}       
console.log('SELECT ID:',result);       
});*/

//删除
var  userAddSql = 'DELETE FROM node WHERE username=?';
var  userAddSql_Params = ['jerry'];
connection.query(userAddSql, userAddSql_Params,function (err, result) {
if(err){
console.log('[DELETE ERROR] - ',err.message);
return;
}       
console.log('DELETE ID:',result);       
});
//关闭连接
connection.end(function(err){
	if(err){
		console.log("[query] - :"+err);
		return;
	}else{
		console.log("[connection end] successed");
	}
})