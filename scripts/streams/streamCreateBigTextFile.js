// 4 types of stream

const fs = require('fs');

const [, , methodName, path, lines] = process.argv;

console.log({ methodName, path, lines });

if (methodName === 'createTextFile') {
	createTextFile(path, lines);
}

function createTextFile(path, lines) {
	const file = fs.createWriteStream(path);

	for (let i = 0; i < lines; i++) {
		file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
	}
	file.end();
}

