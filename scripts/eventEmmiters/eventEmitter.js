const { EventEmitter } = require('events');

class TickTock extends EventEmitter {
	constructor(){
		super();

		setInterval(() => {
			this.emit('1sElapsed', 'Test');
		}, 1000);

		setInterval(() => {
			this.emit('5sElapsed', 'Test');
		}, 5000);
	
	}
}



function tickTock() {

	const ee = new EventEmitter();

	setInterval(() => {
		ee.emit('secondElapsed', 'Test');
	}, 1000);

	return ee;
}

module.exports = {
	TickTock,
	tickTock,
};