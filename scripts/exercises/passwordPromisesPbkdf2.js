const { promisify } = require('util');
const pbkdf2 = promisify(require('crypto').pbkdf2);

const SALT = 'kdngijfdnigjndifjgniwjngijnfijgidjngsijfnpigjnsfpigpisfpigjnsfpijgipnjfgnsjfpng';
const PASSWORDHASH ='1bd429e8ec5ae5a85ff918f1e21efbb6273699ff51132171e93cf1b57d65b75da577395d1a460197684cb3c89a72a112623695ee2a01af5c7f42e6320827128f';
// password hash created from input 'megakurs'
const password = process.argv[2];

(async () => {

	const hash = await pbkdf2(password, SALT, 100000, 64, 'sha512');
	if (hash.toString('hex') === PASSWORDHASH) {
		console.log('Logged in.');
	}

})();
