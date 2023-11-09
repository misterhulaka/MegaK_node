const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;

const openFileStream = createReadStream('./data/streams/bigText.txt');
// console.log(openFileStream);

const writeFileStream = createWriteStream('./data/streams/bigTextCopied.txt');

//stream.promises.pipline()

(async () => {

	await pipeline(
		openFileStream,
		writeFileStream
	);
	console.log('Done.');
})();