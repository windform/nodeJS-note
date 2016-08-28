//删除缓存区的某个模块后重新加载该模块；

var a1 = require('./testModule01.js');
var a2 = require('./testModule01.js');
delete require.cache[require.resolve('./testModule01.js')];
var a3 = require('./testModule01.js');
