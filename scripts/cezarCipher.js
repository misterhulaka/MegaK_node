

const alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ ';
const cipher = 'CĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻAĄB ';

const message = 'To jest wiadomość tekstowa';
const message2 = ['T', 'e', 's', 't'];



if (process.argv[2] === 'encryptMessage') {
	console.log({
		2: process.argv[2],
		3: process.argv[3],
		4: process.argv[4],
		5: process.argv[5]
	});
	encryptMessage(process.argv[3], process.argv[4], process.argv[5])
}
if (process.argv[2] === 'dencryptMessage') {
	console.log({
		2: process.argv[2],
		3: process.argv[3],
		4: process.argv[4],
		5: process.argv[5]
	});
	dencryptMessage(process.argv[3], process.argv[4], process.argv[5])
}
if (process.argv[2] === 'hashCipher') {
	console.log({
		function: process.argv[2],
		alphabet: process.argv[3],
		hashNumber: process.argv[4]
	});
	hashCipher(process.argv[3], process.argv[4]);
}


function checkCipherLenght(alphabet, cipher) {
	if (alphabet.length === cipher.length) {
		return true;
	} else {
		return false;
	}
}

function hashCipher(alphabet, hashNumber) {
	let indexHash = Number(hashNumber);
	const charArr = alphabet.toUpperCase().trim().split('');
	let first = charArr.slice(0, indexHash);
	let second = charArr.slice(indexHash);
	let hashedArr = second.concat(first, ' ').join('');
	return hashedArr;
}

function encryptMessage(message, alphabet, cipherNum) {
	let cipherArr = '';
	let cipher = hashCipher(alphabet, cipherNum);
	const charArr = message.toUpperCase().split('');
	if (checkCipherLenght(alphabet, cipher) === true) {
		charArr.forEach(element => {
			let index = alphabet.indexOf(element);
			cipherArr += cipher[index];
		});
	} else {
		console.log('Cipher is not equal to alphabet');
		return;
	}
	console.log(cipherArr);
	return cipherArr;
};

function dencryptMessage(encryptedMessage, alphabet, cipherNum) {
	let cipherArr = '';
	let cipher = hashCipher(alphabet, cipherNum);
	const charArr = encryptedMessage.toUpperCase().split('');
	if (checkCipherLenght(alphabet, cipher) === true) {
		charArr.forEach(element => {
			let index = cipher.indexOf(element);
			cipherArr += alphabet[index];
		});
	} else {
		console.log('Cipher is not equal to alphabet');
		return;
	}
	console.log(cipherArr);
	return cipherArr;
};
