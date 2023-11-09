const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const { createGzip, createGunzip } = require('zlib');

//stream.promises.pipline()

const [, , methodName, file, path] = process.argv;

console.log({ methodName, file, path });

switch (methodName) {
	case undefined:
		console.log('Choose method name:\n',
		'> streamCopyCompressFile file path\n',
		'> streamCopyDecompressFile file path\n',
		'> streamCopyFile file path\n',
		'> streamPipeCopyFile file path\n',
		'> streamManualCopyFile file path\n');
		break;
	case 'streamCopyFile':
		streamCopyFile(file, path);
		break;
	case 'streamCopyCompressFile':
		streamCopyCompressFile(file, path);
		break;
	case 'streamCopyDecompressFile':
		streamCopyDecompressFile(file, path);
		break;
	case 'streamPipeCopyFile':
		streamPipeCopyFile(file, path);
		break;
	case 'streamManualCopyFile':
		streamManualCopyFile(file, path);
		break;
	default:
		break;
}

// if (methodName === undefined) {
// 	console.log('Choose method name:\n',
// 		'> streamCopyFile file path\n',
// 		'> streamPipeCopyFile file path\n',
// 		'> streamManualCopyFile file path\n');
// 	return;
// }
// if (methodName === 'streamCopyFile') {
// 	streamCopyFile(file, path);
// }
// if (methodName === 'streamCopyCompressFile') {
// 	streamCopyCompressFile(file, path);
// }
// if (methodName === 'streamCopyDecompressFile') {
// 	streamCopyDecompressFile(file, path);
// }
// if (methodName === 'streamPipeCopyFile') {
// 	streamPipeCopyFile(file, path);
// }
// if (methodName === 'streamManualCopyFile') {
// 	streamManualCopyFile(file, path);
// }

async function streamCopyFile(targetFile, targetPath) {
	console.time('streamFile');
	await pipeline(
		createReadStream(targetFile),
		createWriteStream(targetPath)
	);
	console.log('Done.');
	console.timeEnd('streamFile');
}

async function streamCopyCompressFile(targetFile, targetPath) {
	console.time('stream compression file')

	await pipeline(
		createReadStream(targetFile),
		createGzip(),
		createWriteStream(targetPath)
	);
	console.log('Done.');
	console.timeEnd('stream compression file');
}

async function streamCopyDecompressFile(targetFile, targetPath) {
	console.time('stream compression file')

	await pipeline(
		createReadStream(targetFile),
		createGunzip(),
		createWriteStream(targetPath)
	);
	console.log('Done.');
	console.timeEnd('stream compression file');
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