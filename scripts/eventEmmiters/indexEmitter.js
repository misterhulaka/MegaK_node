const { TickTock } = require('./eventEmitter');

new TickTock()
	.on('1sElapsed', (data) => {
		console.log('Hi', data);
	});