const { hash, compare } = require('bcrypt');

if (process.argv[2] === 'passwordHash') {
	passwordHash(process.argv[3], process.argv[4]);
}
if (process.argv[2] === 'passwordCompare') {
	passwordCompare(process.argv[3], process.argv[4]);
}
if (process.argv[2] === 'passwordShadowLog') {
	passwordShadowLog(process.argv[3]);
}

async function passwordShadowLog(password) {
	hash(password, 10)
		.then(hash => {
			console.log('hash ->', hash);
			passwordCompare(password, '$2b$10$XTHuRTdhk5iZaMNXmjbd/eC01FRl8CdSqVGgROkVTKRmnPeYtvjUS');
		})
		.catch(err => console.error(err.message));
	// passwordHash(password, 10).then(hash => passwordCompare(password, hash));
	// await passwordHash(password, 10).then(hash => {passwordCompare(password, hash)});
	// passwordCompare(password, hash);


	// await passwordCompare(password, await passwordHash(password, 10));
}

function passwordHash(password, saltNumber) {
	hash(password, Number(saltNumber), (error, encrypted) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Hash created ->', encrypted);
			return encrypted;
		}
	})
}

function passwordCompare(password, hash) {
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