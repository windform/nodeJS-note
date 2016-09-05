var path =  require('path');
//绝对路径
var demo1 = path.relative('c:\\orandea\\test\\aaa','c:\\orandea\\impl\\bbb');
console.log(demo1);
//相对路径
var demo2 = path.relative('/data/orandea/test','/data/foo/impl');
console.log(demo2);
//绝对路径：文件和文件夹
var demo3 = path.relative('c:\\orandea\\test\\aaa.txt','c:\\orandea\\impl\\bbb');
console.log(demo3);
//相对路径: 文件和文件夹
var demo3 = path.relative('/data/orandea/test','/data/foo/impl.txt');
console.log(demo3);