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

// https://replit.com/@git-asia/watchFile#index.js
/**
 * 
 * 
 * 
 * 
 *
 *const { normalize, join} = require('path');
 *const chokidar = require('chokidar');
 *const { readFile } = require ('fs').promises;
 *
 *const jsExt = '';
 *const watchPath = normalize(join(process.argv[2], jsExt));
 *
 * //Shell command:
 * // node index.js /home/runner/watchFile/
 *
 * // ANSI escape sequence for colors
 * const greenColor = '\x1b[32m';
 * const orangeColor = '\x1b[33m';
 * const redColor = '\x1b[31m';
 * const resetColor = '\x1b[0m';
 *
 * const watcher = chokidar.watch(watchPath, {
 *	ignoreInitial: true,
 *	awaitWriteFinish: true,
 * })
 * 
 * const handleFileChange = async(path, color) => {
 * 	console.log(`${color}File ${path} has been ${color === greenColor ? 'added' : 'changed'}${resetColor} \n`);
 * 	const fileContents = await readFile(path, 'utf8');
 * 	console.log(fileContents)
 * };
 * watcher
 * .on('add', (path) => handleFileChange(path, greenColor))
 * .on('change', (path) => handleFileChange(path, orangeColor))
 * .on('unlink', (path) => console.log(`${redColor}File ${path} has been removed${resetColor} \n`))
 * .on('error', (error) => console.error(`Watcher error ${error} \n`))
 */


