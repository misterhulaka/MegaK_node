const fetch = require('node-fetch');

const cityName = process.argv[2];

const processWeatherData = data => {
	const foundData = data.find(stationData => stationData.stacja === cityName);
	if (!foundData) {
		console.log(`-> ${cityName} <- not found`);
	}
	const {
		cisnienie: pressure,
		wilgotnosc_wzgledna: humidity,
		temperatura: temperature,
	} = foundData;

	const weatherInfo = `In ${cityName} there is ${temperature}°C, ${humidity}% of humidity and pressure of ${pressure} hPa `
	console.log(weatherInfo);
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