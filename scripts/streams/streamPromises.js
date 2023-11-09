const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;

//stream.promises.pipline()

const [, , methodName, file, path] = process.argv;

console.log({ methodName, file, path });

if (methodName === undefined) {
	console.log('Choose method name:\n',
		'> streamCopyFile file path\n',
		'> streamPipeCopyFile file path\n',
		'> streamManualCopyFile file path\n');
	return;
}
if (methodName === 'streamCopyFile') {
	streamCopyFile(file, path);
}
if (methodName === 'streamPipeCopyFile') {
	streamPipeCopyFile(file, path);
}
if (methodName === 'streamManualCopyFile') {
	streamManualCopyFile(file, path);
}

async function streamCopyFile(targetFile, targetPath) {
	console.time('streamFile');
	await pipeline(
		createReadStream(targetFile),
		createWriteStream(targetPath)
	);
	console.log('Done.');
	console.timeEnd('streamFile');
}

function streamPipeCopyFile(targetFile, targetPath) {
	console.time('streamFile');
	const readStream = createReadStream(targetFile);
	const writeStream = createWriteStream(targetPath);

	readStream.pipe(writeStream);
	readStream.on('end', () => {
		console.log('Ready');
		console.timeEnd('streamFile');
	});
}

function streamManualCopyFile(targetFile, targetPath) {
	console.time('streamFile');
	const readStream = createReadStream(targetFile);
	const writeStream = createWriteStream(targetPath);

	readStream.on('data', (data) => writeStream.write(data));
	readStream.on('end', () => {
		writeStream.close();
		console.log('Done.');
		console.timeEnd('streamFile');
	});

}