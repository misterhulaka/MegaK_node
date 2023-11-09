/*  Simple server listening to localhost:8000
	serving big file as
	1. readFile
	2. createReadStream
 */

const fs = require('fs');
const server = require('http').createServer();

const [, , methodName] = process.argv;
console.log({ methodName });

if (methodName === undefined) {
	console.log('Choose one of method name as process arg\n > serverStart \n > serverStartStream');
	return;
}
if (methodName === 'serverStart') {
	serverStart();
}
if (methodName === 'serverStartStream') {
	serverStartStream();
}

function serverStartStream() {
	server.on('request', (req, res) => {
		const src = fs.createReadStream('./data/video/bigText.txt');
		src.pipe(res);
	});
}

function serverStart() {
	server.on('request', (req, res) => {
		fs.readFile('./data/video/bigText.txt', (err, data) => {
			if (err) throw err;


			res.end(data);
		});
	});
}

server.listen(8000);