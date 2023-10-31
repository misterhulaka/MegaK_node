
// const { promisify } = require('util');
const { readFile, writeFile } = require('fs').promises;
const { encryptText, decryptText } = require('../cipherAES192');
const {SALT} = require('../../data/constants');

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
	const encrypted = await encryptText(content, pwd, SALT);
	await writeFile(fileName, JSON.stringify(encrypted), 'utf8');
	console.log('Done.');
}

async function decryptFile(fileName, pwd) {

	const json = await readFile(fileName, 'utf8');
	const encrypted = JSON.parse(json);
	const decrypted = await decryptText(encrypted.encrypted, pwd, SALT, encrypted.iv);
	console.log(decrypted);
	await writeFile(fileName, decrypted, 'utf8');
}
