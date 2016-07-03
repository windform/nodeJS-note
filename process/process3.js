//process,nextTick()
function foo(){
	console.log('foo');
}
setTimeout(foo,0);   //=process.nextTick(foo);
console.log('bar');