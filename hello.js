var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(“Hello Sameer Tanksale. You are Rockstar...!”);
}).listen(8080);

console.log('Server started');
