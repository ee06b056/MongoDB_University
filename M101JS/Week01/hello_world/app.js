const http = require('http');

let server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.end("Hello, world");
});

server.listen(8000);

console.log("Server running at http://localhost:8000");
