// Node.js program to demonstrate the     
// crypto.createCipheriv() method

// Includes crypto module
const crypto = require('crypto');

// Defining algorithm

// Defining key

// Defining iv

// An encrypt function
function encrypt(text) {

	const algorithm = 'aes-256-cbc';
	const key = crypto.randomBytes(32);
	const iv = crypto.randomBytes(16);

	// Creating Cipheriv with its parameter
	let cipher = crypto.createCipheriv(
		'aes-256-cbc', Buffer.from(key), iv);

	// Updating text
	let encrypted = cipher.update(text);

	// Using concatenation
	encrypted += cipher.final('hex');

	// Returning iv and encrypted data
	return {
		iv: iv.toString('hex'),
		encryptedData: encrypted.toString('hex')
	};
}

// Displays output
var output = encrypt("GeeksforGeeks");
console.log(output);