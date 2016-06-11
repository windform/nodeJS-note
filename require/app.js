//用require函数加载模块
var testModule1 = require('./testModule.js');
var testModule2 = require('./testModule.js');
delete require.cache[require.resolve('./testModule.js')];
var testModule3 = require('./testModule.js');
//console.log(testModule.testVar);
/*testModule1.outputTestVar();
testModule2.outputTestVar();*/

//在node.js中，定义了一个require.main的变量，用于检测一个模块是否为应用程序的主模块
/*if(module == require.main){
	console.log('this is the main module of application');
}*/