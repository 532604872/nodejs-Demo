function logCar(logMsg, callback) {
	console.log(logMsg);
	process.nextTick(function () {
	console.log(logMsg + "_next");
		callback(logMsg);
	})
}
var cars = ["Ferrari", "Porsche", "Bugatti"];
for(var idx in cars){
	var message = "Saw a " + cars[idx];
	logCar(message, function () {
		console.log("Normal Callbacl: " + message);
	});
}
for(var idx in cars){
	var message = "Saw a " + cars[idx];
	(function (msg) {
		logCar(msg, function () {
			console.log("Closure Callback: " + msg);
		});
	})(message);
}