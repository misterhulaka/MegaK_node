const {promisify} = require('util');
const exec = promisify(require('child_process').exec);

exec('dir')
.then(data => {
	console.log(data.stdout);
})