const { readFile, writeFile, access, mkdir, appendFile, readdir } = require('fs').promises;



const FILE_NAME = './data/hello.txt';

// readMultiplyReadout();
// appendMultiplyReadout();
// appendMultiplyReadoutCallback();
// readFilesAndDirectories();
readFilesInDirectories();




async function readFilesInDirectories(){

	const files = await readdir('./data');
	console.log(files);

	for (const file of files) {
		console.log(file);

		const fileContent = await readFile(`./data/${file}`,'utf-8');
		console.log(fileContent); 
	}
}

async function readFilesAndDirectories(){

	const list = await readdir('.');
	console.log(list);
}

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

function readFileHelloWorld() {

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