const { rename, readFile, writeFile, access, mkdir, appendFile, readdir, stat } = require('fs').promises;
const { W_OK } = require('fs').constants;



const FILE_NAME = './data/hello.txt';

// readMultiplyReadout();
// appendMultiplyReadout();
// appendMultiplyReadoutCallback();
// readFilesAndDirectories();
// readFilesInDirectories();
// readFilesStatsInDirectories();
// checkFileExist();

// sumNumbersInFile();

// makeDirectory();

changeFileName();

async function changeFileName() {
	try {
		await rename('./filesystem/test/asdasd.txt', './filesystem/test/renamed.txt');
	} catch (error) {
		if (error.code === 'ENOENT') {
			console.log('Given filename does not exist')
		} else{
			console.log('Oh no!');
		}
	}
}

async function makeDirectory() {
	await mkdir('./filesystem/test', {
		recursive: true,
	});
}

async function sumNumbersInFile() {
	let sum = 0;
	const fileContent = await JSON.parse(await readFile('./data/input1.txt', 'utf-8'));
	for (const number of fileContent) {
		sum += number;
	}
	try {
		await writeFile('./data/sum.txt', String(sum));
		console.log('File saved successfully!');
	} catch (error) {
		console.log(error);
	}
}

async function checkFileExist() {
	try {
		const file = await access('./data/hello.txt', W_OK);
		console.log(file);
	} catch (error) {
		console.log('File is not valid!', error);
	}
}



async function readFilesStatsInDirectories() {

	const files = await readdir('./data');
	console.log(files);

	for (const file of files) {
		console.log(file);

		const fileContent = await stat(`./data/${file}`, 'utf-8');
		console.log(fileContent);
	}
}

async function readFilesInDirectories() {

	const files = await readdir('./data');
	console.log(files);

	for (const file of files) {
		console.log(file);

		const fileContent = await readFile(`./data/${file}`, 'utf-8');
		console.log(fileContent);
	}
}

async function readFilesAndDirectories() {

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