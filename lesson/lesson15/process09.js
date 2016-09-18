var fs = require('fs');
var time = process.hrtime();
var data = fs.readFileSync('./read.txt');
var diff = process.hrtime(time);
console.log('读取文件操作耗费%d秒%d纳秒',diff[0],diff[1]);