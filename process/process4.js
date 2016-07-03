//process,nextTick()
function foo(){
	console.log('foo');
}
process.nextTick(foo);
console.log('bar');