//util.inspect: 将任意对象转换成字符串

var util = require('util');

function Person(){
	this.name = 'hello';
	this.toString = function(){
		return this.name;
	}
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true,null,true));

