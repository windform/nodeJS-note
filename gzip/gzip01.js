//使用gzip对象压缩文件
var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');
var inp = fs.createReadStream('test.txt');
var out = fs.createWriteStream('test.txt.gz');
inp.pipe(gzip).pipe(out);
