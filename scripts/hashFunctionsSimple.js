const { createHmac, pbkdf2 } = require('crypto');
const { hash, compare} = require('bcrypt');


hash('Hello, World!', 10, (err, hash) => {
	if (err) {
		console.log(err);
	} else {
		console.log(hash);

		compare('Hello, World!', hash, (err, res) => {
			if (res) {
				console.log('Logged in!');
			} else {
				console.log('Nooo!');
			}
		})

	}
})



function betterHahs() {
	const originalText = 'Hello, World!';
	const salt = 'fdlknflksdnmfklsmdlf';

	pbkdf2(originalText, salt, 100000, 64, 'sha512', (err, derivedKey) => {
		if (err) throw err;
		console.log(derivedKey.toString('hex'));
	})
}

function simpleHash(text) {
	const salt = 'fdlknflksdnmfklsmdlf';
	const hash = createHmac('sha512', salt)
		.update(text)
		.digest('hex');

	console.log(hash);
}
