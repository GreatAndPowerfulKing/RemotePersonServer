let http = require('http');
let fs = require('fs');

function log(text) {
	console.log((new Date()).toString() + ': ' + text);
}

http.createServer((request, response) => {
	log('Request: ' + request.method + '. URL: ' + request.url + '. From: ' + request.connection.remoteAddress);
	if (request.method === 'GET' && request.url === '/person') {
		response.writeHead(200, {'Content-Type': 'application/json'});

		var person = {};

		try {
			person = JSON.parse(fs.readFileSync('person.json'));
			if (person.image) {
				person.image = fs.readFileSync(person.image, 'base64');
			}
		} catch (err) {
			log('Error occured while loading person\'s data: ' + err.toString());
		}

		let json = JSON.stringify(person)
		response.end(json);
	} else {
		response.writeHead(400, {'Content-Type': 'text/plain'});
		response.end('Invalid request');
	}
	response.method
	log('Response to: ' + response.connection.remoteAddress);
}).listen(80);