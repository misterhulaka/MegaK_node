const { log } = require('console');
const { readFile } = require('fs');
const { promisify } = require('util');

console.log('Hello');

// const readFilePromised = promisify(readFile);

(async () => {
	try {
		const data = await promisify(readFile)('./index.js', 'utf-8');
		console.log(data);
	} catch (err) {
		console.log('Oh no!', err);
	}
})();

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