const { promisify } = require('util');
const { readFile, writeFile } = require('fs');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv } = require('crypto');

const SALT = 'djfnisjdnfojdsnofnsdognosnfoieonfosdofnsdpgspgmpsmgpsdpgmpsdmgpmpdgmpslmgpmspgmpsm';

function encryptfile(path, password) {

	readFile(path, 'utf8', async (error, data) => {
		await encryptData(data,password, SALT)
		.then(data => {
			writeFile(path, data.encrypted, {
				encoding: 'utf8',
				flag: 'a',
			}, (error) => console.error(error));
		})
		.catch((error) => console.error(error));
	});
}

async function encryptData(data, password, salt) {
	const algorithm = 'aes-192-cbc';
	// const key = randomBytes(24);
	const key = await scrypt(password, salt, 24);
	const iv = await randomBytes(16);

	const cipher = createCipheriv(algorithm, key, iv);
	let encrypted = cipher.update(data, 'utf8', 'hex');
	encrypted += cipher.final('hex');
	return {
		encrypted,
		iv: iv.toString('hex'),
	};
}

// const testEncrypt = encryptData('adasfaf', 'megamega', SALT);

// console.log(testEncrypt);

encryptfile('C:\\jsFiles\\MegaK_node\\data\\encrypted\\encryptedfile.txt', 'megakurs');

// encryptfile(process.argv[2], process.argv[3]);