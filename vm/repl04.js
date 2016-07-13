//useGlobal属性值的使用示例
var repl = require('repl');
function testFunc(){
	msg="message";
}
repl.start({useGlobal:true});
testFunc();