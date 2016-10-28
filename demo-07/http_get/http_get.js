var http = require('http');
var messages = [
	'Hello World',
	'From a basic Node.js server',
	'Take Luck'
];
http.createServer(function (reg, res) {
	res.setHeader("Content-type", "text/html");
	res.writeHead(200);
	res.write('<html><head><title>Simple HTTP Server</title></head>');
	res.write('<body>');
	for(var idx in messages){
		res.write('\n<h1>' + messages[idx] + '</h1>');
	}
	res.end('\n</bodu></html>');
}).listen(8080);


var http = require('http');
var options = {
	hostname: 'localhost',
	port: '8080'
};
function handleResponse(response) {
	var serverData = '';
	response.on('data', function (chunk) {
		serverData += chunk;
	});
	response.on('end', function () {
		console.log("Response Status: ", response.statusCode);
		console.log("Response Headers: ", response.headers);
		console.log(serverData);
	});
}
http.request(options, function (response) {
	handleResponse(response);
}).end();