const fetch = require('node-fetch');
const { appendFile } = require('fs').promises;
const { normalize, resolve } = require('path');

function safeJoin(base, target) {
	const targetPath = '.' + normalize('/' + target);
	return resolve(base, targetPath);
}

const getDataFileName = city => safeJoin(`./data/weather/`, `${city}.txt`);

const processWeatherData = async data => {
	const sortedData = [...data].sort((a, b) => {
		if (Number(b.temperatura) > Number(a.temperatura)) {
			return 1;
		}
		if (Number(a.temperatura) > Number(b.temperatura)) {
			return -1;
		}
		// return 0;
	});

	sortedData.forEach(element => {
		const {
			temperatura: temperature,
			stacja: city,
			id_stacji: id,
		} = element;
		console.log(`${temperature} -> ${city}:${id}`);
	});
}

const findWarmestPlaceInPoland = async () => {
	try {
		const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop/');
		const data = await res.json();
		await processWeatherData(data);
	} catch (error) {
		console.log('Error ->', error);
	}

}

findWarmestPlaceInPoland();