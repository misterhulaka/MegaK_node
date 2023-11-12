const { Restaurant } = require('./restaurant');

const megaRestaurant = new Restaurant();
let tableCount = 25;

const tableCountChange = (change) => {
	tableCount += change;
	console.log(`Dostępnych stolików: ${tableCount}`);
}

megaRestaurant
	.on('open', () => console.log('Otwarto restauracje'))
	.on('close', () => console.log('Zamknięto restaurację'))
	.on('tableCountChange', tableCountChange);

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