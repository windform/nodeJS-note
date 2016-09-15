function foo(){
	console.log('foo');
}
console.log('bar');
console.log('hello');
process.nextTick(foo);