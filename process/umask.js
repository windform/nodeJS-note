//使用umask()方法修改进程的文件权限掩码
//0-可读；2-可写；4-可执行
var oldmask,newmask = 0644;
oldmask = process.umask(newmask);
console.log('修改前的掩码：'+oldmask.toString(8));  
console.log('修改后的掩码：'+newmask.toString(8)); 
 