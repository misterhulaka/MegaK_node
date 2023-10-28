const {promisify} = require('util');
const exec = promisify(require('child_process').exec);

exec('dir')
.then(({stdout, stderr}) => {
	console.log(stdout);
})