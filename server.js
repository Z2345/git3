//http模块
var http = require("http");
//fs模块
var fs = require('fs')

//创建服务createServer(function(请求，响应){})
http.createServer(function(request, response) {
	//响应数据
	//设置响应头
	response.writeHead(200, {
			'Content-Type': 'text/html;charset=utf-8'
		})
		//响应的数据
		//	response.end("hello world")
		                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
		fs.readFile("./shiyan.html","utf-8",function(err,data){
			if(err){
				console.error(err)
			}else{
				console.log(data)
				response.end(data)
			}
		})
}).listen(8124)
console.log("启动http服务，端口8124")