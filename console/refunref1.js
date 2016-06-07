var testFunction = function(){
	console.log('callback function executed');
}
var timer = setInterval(testFunction,1000);
timer.unref();
timer.ref();