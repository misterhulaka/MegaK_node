const { count } = require('console');
const { createServer } = require('http');
const { readFile } = require('fs').promises;
const { calc } = require('./calc');

const server = createServer();
// const counter = 0;
let counter = 0;

server.on('request', async (req, res) => {
	// console.log(req.url);

	const [, operation, numA, numB] = req.url.split('/');

	console.log({ operation, numA, numB });

	const result = calc(operation, Number(numA), Number(numB));

	// if (req.url === '/' && req.method === 'GET') {

		// console.log(req.headers);


		const html = await readFile('./index.html', 'utf8');

		res.writeHead(200, {
			'Content-type': 'text/html',
			'X-My-Header': 'Hello',
		});
		res.write(html);
		res.write(`Wynik: ${result}`);
		res.end();
})

server.listen(3000, 'localhost');

// console.log(server);