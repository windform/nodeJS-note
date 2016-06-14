//检查文件或者目录是否存在
//语法：fs.exists(path,function(exists){})
//同步语法：fs.existsSync(path)



var fs = require('fs');
fs.exists('./message.txt',function(exists){
    if(exists) console.log("该文件存在");
    else console.log("该文件不存在");
})
