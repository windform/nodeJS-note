var http = require('http');
var querystring = require("querystring"); 
var route = require('route');

var handlerRequest = function(req, res){ //通过route来获取controller和action信息 
	var actionInfo = route.getActionInfo(req.url, req.method); //如果route中有匹配的action，则分发给对应的action 
	if(actionInfo.action){ //假设controller都放到当前目录的controllers目录里面，还记得require是怎么搜索module的么？ 
		var controller = require('./controllers/'+actionInfo.controller); // ./controllers/blog 
		if(controller[actionInfo.action]){ 
			var ct = new controllerContext(req, res);  //通过apply将controller的上下文对象传递给action 
			controller[actionInfo.action].apply(ct, actionInfo.args); 
		}else{ 
			handler500(req, res, 'Error: controller "' + actionInfo.controller + '" without action "' + actionInfo.action + '"') 
		} 
	}else{ 
		//如果route没有匹配到，则当作静态文件处理 
		staticFileServer(req, res); 
	} 
};

var parseURL = require('url').parse; //根据http请求的method来分别保存route规则 
var routes = {get:[], post:[], head:[], put:[], delete:[]}; /** * 注册route规则 * 示例： * route.map({ * method:'post', * url: /\/blog\/post\/(\d+)\/?$/i, * controller: 'blog', * action: 'showBlogPost' * }) */ 

exports.map = function(dict){ 
	if(dict && dict.url && dict.controller){ 
		var method = dict.method ? dict.method.toLowerCase() : 'get'; routes[method].push({ u: dict.url, c: dict.controller, a: dict.action || 'index' }); 
	} 
}; 
exports.getActionInfo = function(url, method){ 
	var r = {controller:null, action:null, args:null}, method = method ? method.toLowerCase() : 'get', pathname = parseURL(url).pathname; 
	var m_routes = routes[method]; 
	for(var i in m_routes){ //正则匹配 
		r.args = m_routes[i].u.exec(pathname); 
		if(r.args){ 
			r.controller = m_routes[i].c; 
			r.action = m_routes[i].a; 
			r.args.shift(); //第一个值为匹配到的整个url，去掉 
			break; 
		} 
	} //如果匹配到route，r大概是 {controller:'blog', action:'index', args:['1']} 
	return r; 
};




exports.runServer = function(port){ 
	port = port || 8080; 
	var server = http.createServer(function(req, res){ 
		var _postData = ''; 
		//on用于添加一个监听函数到一个特定的事件 
		req.on('data', function(chunk) { 
			_postData += chunk; 
		})
		.on('end', function() { 
			req.post = querystring.parse(_postData); 
			handlerRequest(req, res); 
		}); 
	}).listen(port); 
	console.log('Server running at http://127.0.0.1:'+ port +'/'); 
};