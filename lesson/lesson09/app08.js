var fs = require('fs');
var file = fs.createReadStream('./message.txt');
var out = fs.createWriteStream('./otherMessage.txt');
file.pipe(out);  //把file对象里的数据复制到out对象中去