//创建并使用模块对象

var foo = require('./testModule03.js');
var myFoo = new foo('Tom',40);

console.log('获取修改前的私有变量');
console.log(myFoo.GetName());
console.log(myFoo.GetAge());

console.log('修改私有变量');
myFoo.SetName('Lucy');
myFoo.SetAge(34);

console.log('获取修改后的私有变量');
console.log(myFoo.GetName());
console.log(myFoo.GetAge());

console.log('获取修改前的公有变量');
console.log(myFoo.name);
console.log(myFoo.age);

console.log('修改公有变量');
myFoo.name = 'Lucy';
myFoo.age = 34;

console.log('获取修改后的公有变量');
console.log(myFoo.name);
console.log(myFoo.age);
