//使用Gunzip对象解压缩文件
var zlib = require('zlib');
var gunzip = zlib.createGunzip();
var fs = require('fs');
var inp = fs.createReadStream('test.txt');
var out = fs.createWriteStream('test.txt.gz');
inp.pipe(gunzip).pipe(out);
