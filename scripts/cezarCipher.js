

const alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ ';
const cipher = 'CĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻAĄB ';

const message = 'To jest wiadomość tekstowa';
const message2 = ['T', 'e', 's', 't'];

function encryptMessage() {
	let cipherArr = '';
	const textArr = message.toUpperCase().split('');
	textArr.forEach(element => {
		// console.log(element);
		let index = alphabet.indexOf(element);
		// console.log(index, '->', element, '->', cipher[index]);
		cipherArr += cipher[index];
	});
	return cipherArr;
};

function dencryptMessage(encryptedMessage) {
	let cipherArr = '';
	const textArr = encryptedMessage.toUpperCase().split('');
	textArr.forEach(element => {
		// console.log(element);
		let index = cipher.indexOf(element);
		// console.log(index, '->', element, '->', alphabet[index]);
		cipherArr += alphabet[index];
	});
	return cipherArr;
};

const enMsg = encryptMessage();
console.log('encrypted msg:', enMsg);

const deMeg = dencryptMessage(enMsg);
console.log('decrypted msg:', deMeg);
