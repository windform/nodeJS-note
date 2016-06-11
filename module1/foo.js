//将模块定义为类
var _name,_age;		//私有变量
var name='',age=0;	//公有变量

//模块对象的构造函数
var foo=function(name,age){
	_name=name;
	_age=age;
}

//获取私有变量_name的值
foo.prototype.GetName=function(){
	return _name;
}

//获取私有变量_age的值
foo.prototype.GetAge=function(){
	return _age;
}

//设置私有变量_name的值
foo.prototype.SetName=function(){
	_name = name;
}

//设置私有变量_age的值
foo.prototype.SetAge=function(){
	_age = age;
}

foo.prototype.name = name;
foo.prototype.age = age;

module.exports = foo;

