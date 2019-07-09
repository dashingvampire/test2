const http = require("http");
const server = http.createServer((req,res)=>{
	console.log("on page refresh i print new line");
	res.writeHead(200, {"Content-Type":"text/html"});
	res.end("<h1>hello anyone</h1>");
}).listen(3000,console.log("server is running at port 3000"))
;
