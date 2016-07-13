//writer属性值的使用示例
var repl = require('repl');
var util = require('util');
function writer(obj){
	return util.inspect(obj,{depth:1,colors:false})
}
repl.start({
	writer:writer
})