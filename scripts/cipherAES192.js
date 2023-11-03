const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
// const createHmac = require('crypto');
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv, createDecipheriv, createHmac } = require('crypto');
const { SALT } = require('../data/constants');
const { error } = require('console');



async function encryptText(text, password, salt) {
	const algorithm = 'aes-192-cbc';
	const key = await scrypt(password, salt, 24);
	const iv = await randomBytes(16);
	const textHash = createHmac('sha256', SALT)
		.update(text)
		.digest('hex');
		console.log(textHash);

	const cipher = createCipheriv(algorithm, key, iv);
	let encrypted = cipher.update(text, 'utf8', 'hex');
	encrypted += cipher.final('hex');
	return {
		encrypted,
		iv: iv.toString('hex'),
		hash: textHash,
	};
}

async function decryptText(encryptedText, password, salt, ivHex) {
	const algorithm = 'aes-192-cbc';
	const key = await scrypt(password, salt, 24);
	const iv = Buffer.from(ivHex, 'hex'); //Initialization vector
	
	const decipher = createDecipheriv(algorithm, key, iv);
	let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
	decrypted += decipher.final('utf8');
	const decryptedTextHash = createHmac('sha512', SALT)
	.update(decrypted)
	.digest('hex');
	console.log(decryptedTextHash);
	if (encryptText.textHash === decryptedTextHash) {
		console.log('Plik zgodny!');
	} else {
		console.error(error);
	}
	return decrypted;
};

module.exports = {
	encryptText,
	decryptText
};
