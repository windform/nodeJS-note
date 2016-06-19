//使用pipe方法复制文件
var fs = require('fs');
var file = fs.createReadStream('./message.txt');
var out = fs.createWriteStream('./anotherMessage.txt');
file.pipe(out);    //复制message.txt文件的内容到anotherMessage.txt中