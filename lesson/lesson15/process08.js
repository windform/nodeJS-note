var oldmask,newmask = 0644;
oldmask = process.umask(newmask);
console.log('修改前的掩码：'+oldmask.toString());
console.log('修改后的掩码：'+newmask.toString(8));
console.log('当前运行时间：'+process.uptime());