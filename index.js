const fetch = require('node-fetch');
const { appendFile } = require('fs').promises;
const { normalize, resolve } = require('path');

function safeJoin(base, target) {
	const targetPath = '.' + normalize('/' + target);
	return resolve(base, targetPath);
}

const getDataFileName = city => safeJoin(`./data/weather/`, `${city}.txt`);

const processWeatherData = async (data, cityName) => {
	const foundData = data.find(stationData => stationData.stacja === cityName);

	if (!foundData) {
		console.log(`-> ${cityName} <- not found in API`);
		return;
	}

	const {
		cisnienie: pressure,
		wilgotnosc_wzgledna: humidity,
		temperatura: temperature,
	} = foundData;

	const weatherInfo = `-> In ${cityName} there is ${temperature}°C, ${humidity}% of humidity and pressure of ${pressure} hPa `
	console.log(weatherInfo);

	const dateTimeString = new Date().toLocaleString();

	await appendFile(getDataFileName(cityName), `${dateTimeString}\n${weatherInfo}\n`);
};

const checkCityWeather = async cityName => {
	try {
		const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop/');
		const data = await res.json();
		await processWeatherData(data, cityName);
	} catch (error) {
		console.log('Error ->', error);
	}

}

checkCityWeather(process.argv[2]);


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