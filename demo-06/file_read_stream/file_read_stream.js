var fs = require('fs');
var options = {
	encoding: 'utf8',
	flag: 'r'
};
var fileReadStream = fs.createReadStream("../file_write_stream/grains.txt", options);
fileReadStream.on('data', function (chunk) {
	console.log("Grains: %s", chunk);
	console.log("Read %d bytes of data.", chunk.length);
});
fileReadStream.on("close", function () {
	console.log("File Closed.");
});