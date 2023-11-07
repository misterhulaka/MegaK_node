const http = require('http');
const { exec, ChildProcess } = require('child_process');
const { cp } = require('fs');
const { error } = require('console');
const { stdout, stdin, stderr } = require('process');
const { encryptText, decryptText } = require('./scripts/cipherAES192');

const SALT = 'pndsjfnsdojnfosjnofjnsdokfspk=-=32p3m4pm';

(async () => {
	const msg = await encryptText('Zażółć gęślą jaźń', 'to jest jakieś tajne hasło', SALT);

	console.log(msg);

	const decryptMsg = await decryptText(msg.encrypted, 'to jest jakieś tajne hasło', SALT, msg.iv);

	console.log(decryptMsg);
})();



function startServer() {
	const hostname = '127.0.0.1';
	const port = 3000;

	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello World');
	});

	server.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/`);
	});
}

