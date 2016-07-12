//在独立上下文环境中创建并使用对象
var vm = require('vm');
vm.runInThisContext("var obj={name:'whiteblue'}");
vm.runInThisContext("obj.func=function(){console.log(this.name);};");
vm.runInThisContext("console.log(obj.name)");
vm.runInThisContext("obj.func()");