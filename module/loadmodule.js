//单次加载
var myModule1 = require('./module');
myModule1.setName('David');

var myModule2 = require('./module');
myModule1.setName('Lucy');

myModule1.sayHello();
