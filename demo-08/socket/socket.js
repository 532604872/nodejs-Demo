var net = require('net');
var client = net.connect({port: 8107, host: 'localhost'},function () {
	console.log("Client connected");
	client.write("Some Data\r\n");
});
client.on('data', function (data) {
	console.log(data.toString());
	client.end();
});
client.on('end', function () {
	console.log('Client disconnected');
});
client.on('error', function (err) {
	console.log(err.toString());
});