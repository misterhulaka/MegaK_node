const {EventEmitter} = require('events');

class Restaurant extends EventEmitter {
	
	constructor(){
		super();
	}

	open(){
		this.emit('open');
	}
	
	close(){
		this.emit('close');
	}
	
	reserveTable(){
		this.emit('decTable');
	}

	cancelTableResevation(){
		this.emit('incTable');
	}

	takeTableWithoutReservation(){
		this.emit('decTable');
	}
	
	markTableBroken(){
		this.emit('decTable');
	}
	
	cleanupTable(){
		this.emit('incTable');
	}
}

module.exports = {
	Restaurant,
};