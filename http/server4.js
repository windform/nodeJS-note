//http.ServerResponse
/*
http.ServerResponse是返回给客户端的信息，决定了用户最终能看到的结果。它也是由http.Server的request事件发送的，作为第二个参数传递，一般简称为response或res。
http.serverResponse有三个重要的成员函数，用于返回响应头、响应内容以及结束请求。
-----------------------------------------
response.WriteHead(statusCode,[headers])
向请求的客户端发送响应头。statusCode是HTTP状态码。headers是一个类似关联数组的对象，表示响应头的每个属性。该函数在一个请求内容最多只能调用一次，如果不能调用，则会自动生成一个响应头。
-----------------------------------------------------------------------------------------------------------------------
response.write(data,[encoding]):向请求的客户端发送响应内容。data是一个Buffer或字符串，表示要发送的内容。如果data是字符串，那么需要指定encoding来说明它的编码方式，默认是utf-8.在response.end调用之前，response.write可以多次调用。
--------------------------------------------------------------------------
response.end([data],[encoding]):结束响应，告知客户端所有发送已经完成。当所有要返回的内容发送完毕的时候，该函数必须被调用一次。它接受两个可选参数，意义和response.write相同。如果不调用该函数，客户端用于处于等待状态。

*/


//http客户端
/*
http模块提供了两个函数http.request和http.get,功能时作为客户端向HTTP服务器发起请求
---------------------------------------------------------
http.request(options,callback)发起http请求。接受两个参数，options是一个类似关联数组的对象，表示请求的参数，callback是请求的回调函数。options常用的参数有：
----------------------------------------------------------------------
host:请求网站的域名或IP地址
port:请求网站的端口，默认为80
method：请求方法，默认是GET。
path:请求的相对于根的路径，默认是“/”。QueryString应该包含在其中。例如：/search?query=byvoid.
headers:一个关联数组对象，为请求头的内容
----------------------------------------------------
callback传递一个参数，为http.ClientResponse的实例。
http.request返回一个http.ClientRequest的实例

*/



//http.request发送POST请求实例

var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
	name:'byvoid',
	email:'867185661@qq.com',
	address:'tianjin nankai,bishuijiayuan linux'
});

var options={
	host:'www.ldyna.com',
	path:'/application/node/post.php',
	method:'POST',
	headers:{
		'Content-Type':'application/x-www-form-urlencoded',
		'Content-Length':contents.length
	}
};

var req=http.request(options,function(res){
	res.setEncoding('utf-8');
	res.on('data',function(data){
		console.log(data);
	});
});

req.write(contents);
req.end();