//chdir方法与cwd方法使用示例
console.log('当前目录:'+process.cwd());
process.chdir('../');
console.log('上一级目录:'+process.cwd());