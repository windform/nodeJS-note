//runInNewContext方法的使用示例
var vm=require('vm');
var obj={name:''};
vm.runInNewContext("name='whiteblue'",obj);
vm.runInNewContext("age=24",obj);
console.log(obj.name);
console.log(obj.age);