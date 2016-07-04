//hrtime()方法使用示例
var fs = require('fs');
var time = process.hrtime();
var file = fs.readFileSync('./file.docx');
var diff = process.hrtime(time);
console.log('读取文件花费了%d纳秒',diff[0] * 1e9 + diff[1];