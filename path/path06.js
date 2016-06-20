//basename():获取一个路径中的文件名

var path = require('path');
var basename = path.basename('./a/b/c/d/index.html');
console.log(basename);
