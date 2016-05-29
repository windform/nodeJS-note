//http.ClientRequest
/*
http.ClientRequest是由http.request或http.get返回产生的对象，表示一个已经产生而且正在进行中的HTTP请求。它提供一个response事件，即http.request或http.get第二个参数指定的回调函数的绑定对象，也可以显式地绑定这个事件的监听函数
-----------------------------------------------------
http.ClientRequest像http.ServerResponse一样提供了write和end函数，用于向服务器发送请求体，通常用于POST、PUT等操作，所以结束以后必须调用endh函数来通知服务器，否则请求无效。http.ClientRequest还提供了以下函数。

resquest.abort():终止正在发送的请求
resquest.setTimeout(timeout,[callback]):设置请求超时时间，timeout为毫秒数，当请求超时以后callback将会被调用
-------------------------------------------------------

*/


//http.ClientResponse
/*
http.ClientResponse提供了三个事件data、end和close，分别在数据到达、传输结束和连接结束时触发，其中data事件传递一个参数chunk，表示接收到的数据
----------------------------------------------------------
http.ClientResponse还提供了以下几个特殊的函数：

response.setEncoding([encoding]):设置默认的编码，当data事件被触发时，数据将会以encoding编码，默认值是null，即不编码，以buffer的形式存储，常用编码为utf-8

response.pause():暂停接收数据和发送事件，方便实现下载功能。

response.resume():从暂停的状态中恢复
*/

var http=require('http');
var req=http.get({host:'www.ldyna.com'});

req.on('response',function(res){
	res.setEncoding('utf-8');
	res.on('data',function(data){
		console.log(data)
	})
})