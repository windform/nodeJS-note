//事件驱动events
/*
events是nodejs最重要的模块，nodejs本身架构就是事件式，而他提供了唯一接口
events模块不仅用于用户代码与nodejs下层事件循环的交互，还几乎被所有的模块依赖
 */

/*
on:注册一个监听器
emit:发射事件
once:注册一个单次监听器
removeListener:移除监听器
removeAllListener:移除所有事件的所有监听器
 */


//事件发射器:events.EventEmitter
var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent',function(arg1,arg2){
	console.log('listener1',arg1,arg2);
})

emitter.on('someEvent',function(arg1,arg2){
	console.log('listener2',arg1,arg2);
})

emitter.emit('someEvent','hello nodejs', 1992)