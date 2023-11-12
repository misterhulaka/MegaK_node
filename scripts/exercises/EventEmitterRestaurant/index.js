const { Restaurant } = require('./restaurant');

const megaRestaurant = new Restaurant();
let tableCount = 25;

console.log(megaRestaurant);

megaRestaurant
	.on('RestaurnatOpen', (prompt) => {
		console.log(prompt);
	})
	.on('takeTable', () => {
		tableCount--;
	})
	.on('cancelReservation', (prompt)=>{
		tableCount++;
		console.log(prompt, tableCount);
	})
	
	megaRestaurant.open();

	megaRestaurant.takeTableWithoutReservation();
	megaRestaurant.takeTableWithoutReservation();

	megaRestaurant.cancelTableResevation();
	


	/* 
	new TickTock()
		.on('1sElapsed', (data) => {
			console.log('Hi', data);
		}); 
*/