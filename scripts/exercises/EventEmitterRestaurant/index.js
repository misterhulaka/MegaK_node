const { Restaurant } = require('./restaurant');

const megaRestaurant = new Restaurant();
let tableCount = 25;

console.log(megaRestaurant);

megaRestaurant
	.on('open', () => console.log('Otwarto restauracje'))
	.on('close', () => console.log('Zamknięto restaurację'))
	.on('reserveTable', () => {
		tableCount--;
		console.log(`Dostępnych stolików: ${tableCount}`);
	})
	.on('cancelTableResevation', () => {
		tableCount++;
		console.log(`Dostępnych stolików: ${tableCount}`);
	})
	.on('takeTableWithoutReservation', () => {
		tableCount--;
		console.log(`Dostępnych stolików: ${tableCount}`);
	})
	.on('markTableBroken', () => {
		tableCount--;
		console.log(`Dostępnych stolików: ${tableCount}`);
	})
	.on('cleanupTable', () => {
		tableCount++;
		console.log(`Dostępnych stolików: ${tableCount}`);
	})

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