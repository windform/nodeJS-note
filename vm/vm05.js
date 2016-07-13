//createContext方法与runInContext方法的使用示例
var vm=require('vm');
var obj={x:2};
var context1=vm.createContext(obj);
vm.runInContext("x=x+2",context1);
console.log(context1.x);

var context2=vm.createContext(obj);
vm.runInContext("x=x+2",context2);
console.log(context2.x);