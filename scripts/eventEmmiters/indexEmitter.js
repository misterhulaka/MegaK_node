const {tickTock} = require('./eventEmitter');

const events = tickTock();

events.on('secondElapsed', (data) => {
	console.log('Hi', data);
});