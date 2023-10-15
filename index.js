const { log } = require('console');
const { readFile } = require('fs');
const { promisify } = require('util');
const {lookup} = require('dns');

console.log('Hello');
// getFile();

// const readFilePromised = promisify(readFile);
function getFile(file) {
	(async () => {
		try {
			const data = await promisify(readFile)('./index.js', 'utf-8');
			console.log(data);
		} catch (err) {
			console.log('Oh no!', err);
		}
	})();
}

lookup('google.com', (err, address) => {
	console.log(address);
});


//Promised fs
// readFilePromised('./index.js','utf-8')
// 	.then(data => {
// 		console.log(data);
// 	})
// 	.catch(err => {
// 		console.log('Oh no!', err);
// 	});

//Regular fs
// readFile('./index.js','utf-8',(err,data) => {
// 	if (err === null) {
// 		console.log(data);
// 	} else {
// 		console.log('Oh no!', err);
// 	}
// });

console.log('Program has finished!');