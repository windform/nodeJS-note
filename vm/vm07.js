//创建script对象并使用该对象的runInNewContext方法
var vm=require('vm');
var obj={
	globalVar:0
}
var script = vm.createScript('globalVar+=1');
for(var i=0;i<100;i++){
	script.runInNewContext(obj);
}
console.log(obj.globalVar);