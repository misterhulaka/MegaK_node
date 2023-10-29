const { log } = require('console');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

function testPingIIFE() {
	(async () => {
		try {
			const { stdout } = await exec('ping 8.8.hjghj8.8');
			console.log(stdout);
		} catch (error) {
			console.log(error.stdout);
		}
	}
	)();
}

function exeCommand(command) {
	exec(command, (error, stdout, stderr) => {
		console.log({ error, stdout, stderr })
	});
}

function exeComm(command) {
	exec(command, (error, stdout, stderr) => {
		if (error) {
			console.error('Stack error occurred ->', error);
		} else if (stderr) {
			console.error('App error occurred', stderr);
		} else {
			console.log('Program has finished', stdout);
		}
	});
}

// exeCommand(process.argv[2]);

(async () => {
	try {
		const { stdout } = await exec('mspaint.exe');
		console.log(stdout);
	} catch (error) {
		console.error('Error occured:', error);
	}
})();


