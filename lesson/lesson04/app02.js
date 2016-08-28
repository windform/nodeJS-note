//多次引用相同模块

var a1 = require('./testModule02.js');
var a2 = require('./testModule02.js');

a1.outputTestVar('a1');
a2.outputTestVar('a2');