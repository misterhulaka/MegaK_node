const fetch = require('node-fetch');

const cityName = process.argv[2];

const processWeatherData = data => {
	const foundData = data.find(stationData => {
		if (stationData.stacja === cityName) {
			// console.log(foundData)
			return true;
		} else {
			return false;
		}
	});
	console.log(foundData);
};

fetch('https://danepubliczne.imgw.pl/api/data/synop/')
	.then(response => response.json())
	.then(processWeatherData)
	.catch(error => console.log('Error', error));

	// fetch('https://danepubliczne.imgw.pl/api/data/synop/')
	// .then(response => {
	// 	console.log('Answer ->', response);
	// 	return response.json();
	// })
	// // .then(response => response.json())
	// .then(data => console.log(data))
	// .catch(error => console.log('Error', error));

// fetch('https://github.com/')
//     .then(res => res.text())
//     .then(body => console.log(body));