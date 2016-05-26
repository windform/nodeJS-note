//util.inherits:实现对象间原型继承的函数

var util = require('util');

function Base(){
	this.name = 'base';
	this.base = 1991;
	this.sayhello = function(){
	}
}

Base.prototype.showName = function(){
	console.log(this.name);
}

function Sub(){
	this.name = 'sub';
}

util.inherits(Sub,Base);

var objBase = new Base();
objBase.showName();
objBase.sayhello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
//objSub.sayhello();
console.log(objSub);

