//在code参数值代码值尝试访问本地变量值
var vm = require('vm');
var e=0;
vm.runInThisContext("e=e+1");