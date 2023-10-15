const { readFile, writeFile, access, mkdir, appendFile } = require('fs');
// (async () => {

// 	const data = await readFile('./index.js',{
// 		encoding: 'utf-8',
// 	});
// 	console.log(data);

// })();
const FILE_NAME = './data/hello.txt';

// readMultiplyReadout();
// appendMultiplyReadout();
appendMultiplyReadoutCallback();

function appendMultiplyReadoutCallback() {
	readFile(FILE_NAME, 'utf8', (error, data) => {
		if (error) {
			console.log(error);
		} else {
			const numberFromFile = Number(data);
			appendFile(FILE_NAME, `\n${numberFromFile * 2}`, 'utf-8', error => {
				if (error) {
					console.log(error);
				} else {
					console.log("File saved.");
				}
			})
		}
	});

}

function appendMultiplyReadout() {
	(async () => {
		try {
			const numberFromFile = Number(await readFile(FILE_NAME, 'utf8'));
			console.log(numberFromFile);
			await writeFile(FILE_NAME, String(numberFromFile * 2), 'utf-8');
			console.log('File saved.');
		} catch (error) {
			console.log(error);
		}

	})();
}

function readMultiplyReadout() {
	(async () => {
		try {
			const numberFromFile = Number(await readFile(FILE_NAME, 'utf8'));
			console.log(numberFromFile);
			await writeFile(FILE_NAME, String(numberFromFile * 2), 'utf-8');
			console.log('File saved.');
		} catch (error) {
			console.log(error);
		}

	})();
}

function rf1() {

	mkdir('./data/', err => {
		if (err) {
			console.log(err);
		}
	});

	access('./data/hello.txt', err => {
		console.log(err);
	});

	writeFile('./data/hello.txt', 'Hello, World!', {
		encoding: 'utf-8',
		flag: 'a'
	}, err => {
		if (err) {
			console.log('Oh no!', err)
		} else {
			console.log('File is saved.')
		}
	});
}