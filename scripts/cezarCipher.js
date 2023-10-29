

const alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ ';
const cipher = 'CĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻAĄB ';

const message = 'To jest wiadomość tekstowa';
const message2 = ['T', 'e', 's', 't'];



if (process.argv[2] === 'encryptMessage') {
	console.log({
		function: process.argv[2], 
		message: process.argv[3], 
		alphabet: process.argv[4],
		cipher: process.argv[5]
	});
	encryptMessage(process.argv[3], process.argv[4], process.argv[5])
}
if (process.argv[2] === 'dencryptMessage') {
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

function hashCipher(alphabet,hashNumber){
	let indexHash = Number(hashNumber);
	const charArr = alphabet.toUpperCase().trim().split('');
	let first = charArr.slice(0,indexHash);
	let second = charArr.slice(indexHash);
	let hashedArr = second.concat(first,' ');

	console.log(first);
	console.log(second);
	console.log(hashedArr);
	return hashedArr;
}

function encryptMessage(message, alphabet, cipher) {
	let cipherArr = '';
	const charArr = message.toUpperCase().split('');
	if (checkCipherLenght(alphabet, cipher) === true) {
		charArr.forEach(element => {
			// console.log(element);
			let index = alphabet.indexOf(element);
			// console.log(index, '->', element, '->', cipher[index]);
			cipherArr += cipher[index];
		});
	} else {
		console.log('Cipher is not equal to alphabet');
		return;
	}
	console.log(cipherArr);
	return cipherArr;
};

function dencryptMessage(encryptedMessage, alphabet, cipher) {
	let cipherArr = '';
	const charArr = encryptedMessage.toUpperCase().split('');
	if (checkCipherLenght(alphabet, cipher) === true) {
		charArr.forEach(element => {
			// console.log(element);
			let index = cipher.indexOf(element);
			// console.log(index, '->', element, '->', alphabet[index]);
			cipherArr += alphabet[index];
		});
	} else {
		console.log('Cipher is not equal to alphabet');
		return;
	}
	console.log(cipherArr);
	return cipherArr;
};

// const enMsg = encryptMessage();
// console.log('encrypted msg:', enMsg);

// const deMeg = dencryptMessage(enMsg);
// console.log('decrypted msg:', deMeg);

// console.log(checkCipherLenght(alphabet, cipher));
