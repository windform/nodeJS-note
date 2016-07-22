// MySQL数据库连接配置
var mysql = require('mysql');
exports.db = mysql.createConnection({
  host:            '127.0.0.1',   // 数据库地址
  port:            3306,          // 数据库端口
  database:        'blog',   // 数据库名称
  user:            'pma',        // 数据库用户
  password:        ''             // 数据库用户对应的密码
});

/*exports.db.connect(function(err){
	if(err){
		console.log("[query] - :"+err);
		return;
	}else{
		console.log("[connection connect] successed");
	}
});*/

// 博客配置
exports.sinaBlog = {
  url: 'http://blog.sina.com.cn/u/2762047017'  // 博客首页地址
};


