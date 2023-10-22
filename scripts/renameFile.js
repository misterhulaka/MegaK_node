const {rename} = require('fs').promises;

(async () => {

	const oldFile = process.argv[2];
	const newFile = process.argv[3];

	try {
		await rename(oldFile, newFile);
	} catch (error) {
		if (error.code === 'ENOENT') {
			console.log(`${oldFile} does not exxist.`);
		} else{
			console.log('Unknow error', error);
		}
	}

})();