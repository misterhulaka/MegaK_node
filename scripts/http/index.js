const { createServer } = require('http');
const { readFile } = require('fs').promises;

const server = createServer();

server.on('request', async (req, res) => {
	console.log(req.url);
	if (req.url === '/' && req.method === 'GET') {

		console.log(req.headers);

		const html = await readFile('./index.html', 'utf8');

		res.writeHead(200, {
			'Content-type': 'text/html',
			'X-My-Header': 'Hello',
		});
		res.end(html);
	} else {
		console.log(req.url);
		res.writeHead(404, {
			'Content-type': 'text/html',
		});
		res.end('<h1>Not found.</h1>');
	}
})

server.listen(3000, 'localhost');

// console.log(server);