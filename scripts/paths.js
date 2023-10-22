const { basename, join, dirname, normalize, resolve } = require('path');


const userPath = safeJoin(__dirname, process.argv[2]);
console.log(userPath);


function dirnameTest() {
	console.log(__dirname);
	const myDirPath = './scripts';
	console.log(basename(myDirPath));
	const fullPath = join(String(__dirname), String(process.argv[2]));
	console.log(fullPath);
}

function dirFileNameDifference() {
	/**
	 * __filename = C:\jsFiles\MegaK_node\scripts\paths.js
	 * __dirnanme = C:\jsFiles\MegaK_node\
	 * dirname(__filename) c:\jsFiles\MegaK_node\scripts
	 * dirname(__dirname) c:\jsFiles\MegaK_node
	 */

	console.log('__filename', __filename);
	console.log('__dirname', __dirname);

	console.log('dirname(__filename)', dirname(__filename));
	console.log('dirname(__dirname)', dirname(__dirname));

	const userPath = normalize(join(String(__dirname), String(process.argv[2])));

	console.log('userPath', userPath);
}

function unsafeJoin(base, target) {
	/**
	 * ../../../Windows 
	 * returns Windows folder
	 */
	return normalize(join(base, target));
}

function safeJoin(base, target) {
/**
 * ../../../Windows
 * returns path to target in base
 */
	const targetPath = '.' + normalize('/' + target);
	return resolve(base, targetPath);
}
