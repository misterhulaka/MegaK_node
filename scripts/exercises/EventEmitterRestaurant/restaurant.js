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
		this.emit('tableCountChange', -1);
	}

	cancelTableResevation(){
		this.emit('tableCountChange', 1);
	}

	takeTableWithoutReservation(){
		this.emit('tableCountChange', -1);
	}
	
	markTableBroken(){
		this.emit('tableCountChange', -1);
	}
	
	cleanupTable(){
		this.emit('tableCountChange', 1);
	}
}

module.exports = {
	Restaurant,
};