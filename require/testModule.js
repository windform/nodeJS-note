//用require函数加载模块
var testVar = "this is variable from testModule.js";
var outputTestVar = function outputTestVar(){
	console.log(testVar);
}
exports.testVar = testVar;
exports.outputTestVar = outputTestVar; 

//使用require.resolve()函数查询完整模块名
