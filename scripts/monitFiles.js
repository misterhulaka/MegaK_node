const { readFile } = require('fs');
const { watch } = require('chokidar');
const { normalize } = require('path');

monitDir(process.argv[2]);

function monitDir(dir) {
	try {
		const targetPath = '.' + normalize('/' + dir);

		watch(targetPath, {
			ignoreInitial: true,
			awaitWriteFinish: true,
		})
			.on('all', (event, path) => {
				console.log(`File ${path} -> ${event}`);
				if (event === 'add') {
					console.log(`Reading content of: ${path}`);
					readFile(String(path), 'utf-8', (error, data) => {
						if (error) {
							console.log('Error read file', error);
						} else {
							console.log(data);
						}
					})

				}
			});
	} catch (error) {
		console.log(error);
	}
}


