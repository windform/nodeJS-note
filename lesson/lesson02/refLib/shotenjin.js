//shotenjin.js 增加的代码 //模板缓存，缓存解析后的模板 
Shotenjin.templateCatch = {}; //读取模板内容 //在模板中引用模板使用： {# ../layout.html #} 
Shotenjin.getTemplateStr = function(filename){ //console.log('get template:' + filename); 
	var t = ''; //这里使用的是同步读取 
	if(path.existsSync(filename)){ 
		t = fs.readFileSync(filename, 'utf-8'); 
	}else{ 
		throw 'View: ' + filename + ' not exists'; 
	} 
	t = t.replace(/\{#[\s]*([\.\/\w\-]+)[\s]*#\}/ig, function(m, g1) { 
		var fp = path.join(filename, g1.trim()) 
		return Shotenjin.getTemplateStr(fp); 
	}); 
	return t; 
}; 
Shotenjin.renderView = function(viewPath, context) { 
	var template = Shotenjin.templateCatch[viewPath]; 
	if(!template){ 
		var template_str = Shotenjin.getTemplateStr(viewPath); 
		var template = new Shotenjin.Template(); 
		template.convert(template_str); //添加到缓存中 
		Shotenjin.templateCatch[viewPath] = template; 
	} 
	var output = template.render(context); 
	return output; 
}; 
global.Shotenjin = Shotenjin;



var staticFileServer = function(req, res, filePath){ 
	if(!filePath){ 
		filePath = path.join(__dirname, config.staticFileDir, url.parse(req.url).pathname); 
	} 
	path.exists(filePath, function(exists) { 
		if(!exists) { 
			handler404(req, res); return;
		} 
		fs.readFile(filePath, "binary", function(err, file) { 
			if(err) { 
				handler500(req, res, err); return; 
			} 
			var ext = path.extname(filePath); 
			ext = ext ? ext.slice(1) : 'html'; 
			res.writeHead(200, {'Content-Type': contentTypes[ext] || 'text/html'}); 
			res.write(file, "binary"); 
			res.end(); 
		}); 
	}); 
}; 
var contentTypes = { 
	"aiff": "audio/x-aiff", 
	"arj": "application/x-arj-compressed" //省略 
}



