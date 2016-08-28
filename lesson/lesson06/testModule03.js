var _name,_age;
var name = '',age=0;

var foo = function(name,age){
	_name = name;
	_age = age;
}
//获取私有变量
foo.prototype.GetName = function() {
	return _name;
};
foo.prototype.SetName = function(name) {
	_name = name;
};
foo.prototype.GetAge = function() {
	return _age;
};
foo.prototype.SetAge = function(age) {
	_age = age;
};
foo.prototype.name = name;
foo.prototype.age = age;
module.exports = foo;