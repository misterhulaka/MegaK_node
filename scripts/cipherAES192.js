const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv, createDecipheriv, createHmac } = require('crypto');




async function encryptText(text, password, salt) {
	const algorithm = 'aes-192-cbc';
	const key = await scrypt(password, salt, 24);
	const iv = await randomBytes(16);

	const cipher = createCipheriv(algorithm, key, iv);
	let encrypted = cipher.update(text, 'utf8', 'hex');
	encrypted += cipher.final('hex');
	return {
		encrypted,
		iv: iv.toString('hex'),
	};
}

async function encryptBinary(binary, password, salt) {
	const algorithm = 'aes-192-cbc';
	const key = await scrypt(password, salt, 24);
	const iv = await randomBytes(16);

	const cipher = createCipheriv(algorithm, key, iv);
	let encrypted = cipher.update(binary, 'binary', 'hex');
	encrypted += cipher.final('hex');
	return {
		encrypted,
		iv: iv.toString('hex'),
	};
}

async function decryptText(encryptedText, password, salt, ivHex) {
	const algorithm = 'aes-192-cbc';
	const key = await scrypt(password, salt, 24);
	const iv = Buffer.from(ivHex, 'hex'); //Initialization vector

	const decipher = createDecipheriv(algorithm, key, iv);
	let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
	decrypted += decipher.final('utf8');
	return decrypted;
};

async function decryptBinary(encryptedText, password, salt, ivHex) {
	const algorithm = 'aes-192-cbc';
	const key = await scrypt(password, salt, 24);
	const iv = Buffer.from(ivHex, 'hex'); //Initialization vector

	const decipher = createDecipheriv(algorithm, key, iv);
	let decrypted = decipher.update(encryptedText, 'hex', 'binary');
	decrypted += decipher.final('binary');
	return decrypted;
};

function hash(text, salt) {
	return createHmac('sha512', salt)
		.update(text)
		.digest('hex');

}

module.exports = {
	encryptText,
	decryptText,
	encryptBinary,
	decryptBinary,
	hash
};
