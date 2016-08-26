var route = require('./route'); 
route.map({ 
	method:'get', 
	url: /\/blog\/?$/i, 
	controller: 'blog', 
	action: 'index' 
});
var ct = new controllerContext(req, res);  //通过apply将controller的上下文对象传递给action 

controller[actionInfo.action].apply(ct, actionInfo.args);

//controller的上下文对象 
var controllerContext = function(req, res){ 
	this.req = req; 
	this.res = res; 
	this.handler404 = handler404; 
	this.handler500 = handler500; 
}; 
controllerContext.prototype.render = function(viewName, context){ 
	viewEngine.render(this.req, this.res, viewName, context); 
}; 
controllerContext.prototype.renderJson = function(json){ 
	viewEngine.renderJson(this.req, this.res, json); 
};

var viewEngine = { 
	render: function(req, res, viewName, context){ 
		var filename = path.join(__dirname, 'views', viewName); 
		try{ 
			var output = Shotenjin.renderView(filename, context); 
		}catch(err){ 
			handler500(req, res, err); return; 
		} 
		res.writeHead(200, {'Content-Type': 'text/html'}); 
		res.end(output); 
	}, 
	renderJson: function(res, json){  } 
};



