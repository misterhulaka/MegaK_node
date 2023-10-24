const fetch = require('node-fetch');

fetch('https://danepubliczne.imgw.pl/api/data/synop/')
	.then(response => {
		console.log('Answer:');
		console.dir(response);
		console.log('Answer content:');
		console.log(response.json())
	})
	.then(html => console.log(html))
	.catch(error => console.log('Error', error));

// fetch('https://github.com/')
//     .then(res => res.text())
//     .then(body => console.log(body));