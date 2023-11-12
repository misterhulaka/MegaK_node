const { Restaurant } = require('./restaurant');

const megaRestaurant = new Restaurant();
let tableCount = 25;

console.log(megaRestaurant);

const decTableCount = () => {
	tableCount--;
	console.log(`Dostępnych stolików: ${tableCount}`);
}
const incTableCount = () => {
	tableCount++;
	console.log(`Dostępnych stolików: ${tableCount}`);
}

megaRestaurant
	.on('open', () => console.log('Otwarto restauracje'))
	.on('close', () => console.log('Zamknięto restaurację'))
	.on('reserveTable', decTableCount)
	.on('cancelTableResevation', incTableCount)
	.on('takeTableWithoutReservation', decTableCount)
	.on('markTableBroken', decTableCount)
	.on('cleanupTable', incTableCount)

megaRestaurant.open();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.reserveTable();
megaRestaurant.cancelTableResevation();
megaRestaurant.reserveTable();
megaRestaurant.reserveTable();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.cleanupTable();
megaRestaurant.close();



/*
new TickTock()
	.on('1sElapsed', (data) => {
		console.log('Hi', data);
	}); 
*/