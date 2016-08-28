var testVar = "This is a variable from testModule";
/*var outputTestVar = function(){
	console.log(testVar)
}*/
var outputTestVar = function(name){
	console.log("This is a call "+name+" .");
}
exports.testVar = testVar;
exports.outputTestVar = outputTestVar;