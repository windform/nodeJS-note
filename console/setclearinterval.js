
var num = 0;
var timer = setInterval(function(){
	num++;
	console.log(num);
	if (num>20) {
		clearInterval(timer);
	};
},800);

timer;