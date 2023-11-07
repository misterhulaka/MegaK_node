
// const { promisify } = require('util');
const { readFile, writeFile } = require('fs').promises;
const { encryptText, decryptText, hash } = require('../cipherAES192');
const { createHmac } = require('crypto')
const { ENCRYPTION_SALT, HASH_SALT } = require('../../data/constants');

// const SALT = 'djfnisjdnfojdsnofnsdognosnfoieonfosdofnsdpgspgmpsmgpsdpgmpsdmgpmpdgmpslmgpmspgmpsm';

const [, , methodName, fileName, pwd] = process.argv;

console.log({ methodName, fileName, pwd });

if (methodName === 'encryptFile') {
	encryptFile(fileName, pwd);
}
if (methodName === 'decryptFile') {
	decryptFile(fileName, pwd);
}

async function encryptFile(fileName, pwd) {
	const content = await readFile(fileName, 'utf8');
	const contentHash = hash(content, HASH_SALT);
	console.log("Hash:", contentHash);
	const encrypted = await encryptText(content, pwd, ENCRYPTION_SALT);
	encrypted.hash = contentHash;
	await writeFile(fileName, JSON.stringify(encrypted), 'utf8');
	console.log("> ENCRYPTING FILE DONE <");
}

async function decryptFile(fileName, pwd) {

	const json = await readFile(fileName, 'utf8');
	const encrypted = JSON.parse(json);
	const decrypted = await decryptText(encrypted.encrypted, pwd, ENCRYPTION_SALT, encrypted.iv);
	const decryptedContentHash = hash(decrypted, HASH_SALT);
	console.log("Hash:", decryptedContentHash);
	if (encrypted.hash === decryptedContentHash) {
		await writeFile(fileName, decrypted, 'utf8');
		console.log("> FILE IS ORIGINAL <");
		console.log("> FILE CONTENT <\n" + decrypted);
		console.log("> DECRYPTING FILE DONE <");
	} else {
		console.error("> FILE IS NOT ORIGINAL <");
	}
}
