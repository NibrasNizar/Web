var my_http = require("http");
my_http.createServer(function(request,response){
	response.writeHeader(200,{ "Content-Type": "text.html"});
	response.write("<h1>Hello RIT</h1>");
	response.end()
}).listen(5000)
console.log("Server runing on port 5000");
