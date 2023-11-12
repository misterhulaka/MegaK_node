const { createServer } = require('http');

const server = createServer((req, res) => {
	res.writeHead(200, {'Content-type' : 'text/html'});
	res.end('<h1>hello megaK</h1>');
}).listen(3000, '127.0.0.1');

// console.log(server);