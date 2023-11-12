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
		this.emit('reserveTable');
		
	}

	cancelTableResevation(){
		this.emit('cancelTableResevation');
	}

	takeTableWithoutReservation(){
		this.emit('takeTableWithoutReservation');
	}
	
	markTableBroken(){
		this.emit('markTableBroken');
		
	}
	
	cleanupTable(){
		this.emit('cleanupTable');

	}
}

module.exports = {
	Restaurant,
};