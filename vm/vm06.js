//创建script对象并使用该对象的runInThisContext方法
var vm=require('vm');
globalVar = 0;
var script = vm.createScript('globalVar+=1');
for(var i=0;i<100;i++){
	script.runInThisContext();
}
console.log(globalVar);