const {EventEmitter} = require('events');

function availableTable(tableNumber){
	console.log(`Available table number is ${tableNumber}`);
}

class Restaurant extends EventEmitter {
	
	constructor(){
		super();
	}



	open(){
		this.emit('RestaurnatOpen', availableTable());
	}

	close(){

	}

	reserveTable(){

	}

	cancelTableResevation(){
		this.emit('cancelReservation', 'Reservation canceled')
	}

	takeTableWithoutReservation(){
		this.emit('takeTable', availableTable())
	}

	markTableBroken(){

	}

	cleanupTable(){

	}
}

module.exports = {
	Restaurant,
};