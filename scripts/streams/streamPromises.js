const { promisify } = require('util');
const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const { createGzip, createGunzip } = require('zlib');
const { createCipher, createDecipher } = require('crypto');
const scrypt = promisify(require('crypto').scrypt);


const { HASH_SALT, ENCRYPTION_SALT } = require('../../data/constants');

//stream.promises.pipline()

const [, , methodName, file, path, password] = process.argv;

console.log({ methodName, file, path, password });

switch (methodName) {
	case undefined:
		console.log('Choose method name:\n',
			'> streamCopyCompressFile file path\n',
			'> streamCopyDecompressFile file path\n',
			'> streamCopyFile file path\n',
			'> streamPipeCopyFile file path\n',
			'> streamManualCopyFile file path\n',
			'> streamEncryptFile file path password\n',
			'> streamDecryptFile file path password');
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
	case 'streamEncryptFile':
		streamEncryptFile(file, path, password);
		break;
	case 'streamDecryptFile':
		streamDecryptFile(file, path, password);
		break;
	default:
		break;
}

async function streamEncryptFile(targetFile, targetPath, pwd) {
	console.time('encrypt file time');

	const algorithm = 'aes-192-cbc';
	const key = await scrypt(pwd, ENCRYPTION_SALT, 24);

	await pipeline(
		createReadStream(targetFile),
		createCipher(algorithm, key),
		createWriteStream(targetPath)
	);
	console.log('Encryption done.');
	console.timeEnd('encrypt file time');
}

async function streamDecryptFile(targetFile, targetPath, pwd) {
	console.time('decrypt file time');

	const algorithm = 'aes-192-cbc';
	const key = await scrypt(pwd, ENCRYPTION_SALT, 24);

	await pipeline(
		createReadStream(targetFile),
		createDecipher(algorithm, key),
		createWriteStream(targetPath)
	);
	console.log('Decryption done.');
	console.timeEnd('decrypt file time');
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