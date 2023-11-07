const { hash, compare } = require('bcrypt');

if (process.argv[2] === 'passwordHash') {
	passwordHash(process.argv[3], process.argv[4]);
}
if (process.argv[2] === 'passwordCompare') {
	passwordCompare(process.argv[3], process.argv[4]);
}

async function passwordHash(password, saltNumber) {
	hash(password, Number(saltNumber), (error, encrypted) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Hash created - >', encrypted);
		}
	})
}

async function passwordCompare(password, hash) {
	compare(password, hash, (error, same) => {
		if (error) {
			console.log(error);
		}
		if (same === true) {
			console.log('Logged in.');
		} else {
			console.log("Compared input is ->", same);
		}
	})
}