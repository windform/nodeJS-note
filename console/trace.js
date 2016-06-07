var user = new Object();
user.name="Liliya";
user.getName=function(){
	return this.name;
};
user.setName=function(){
	this.name=name;
};
console.trace('trace');