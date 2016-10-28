var http = require('http');
var url = require('url');
var qstring = require('querystring');
function sendResponse(weatherData, res) {
	var page = '<html><head><title>External Example</title>' + '<meta http-equiv="Content-Type" content="text/html;charset=utf-8" /><meta http-equiv="Content-Language" content="zh-cn" />' + '</head>' + '<body>' + '<form method="post">' + '请输入IP地址或域名: <input name="city"><br>' + '<input type="submit" value="search">' + '</form>';
	if (weatherData) {
		page += '<h1>来自:</h1><p>' + weatherData + '</p>';
	}
	page += '</bodu></html>';
	res.end(page);
}
function paresWeather(weatherResponse, res) {
	var weatherData = '';
	weatherResponse.on('data', function (chunk) {
		weatherData += chunk;
	});
	weatherResponse.on('end',function () {
		sendResponse(weatherData, res);
	});
}
function getWeather(city, res) {
	var options = {
		host: 'apis.juhe.cn',
		path: '/ip/ip2addr?callback=' + city
	};
	http.request(options, function (weatherResponse) {
		paresWeather(weatherResponse, res);
	}).end();
}
http.createServer(function (req, res) {
	console.log(req.method);
	if (req.method == "POST") {
		var reqData = '';
		req.on('data', function (chunk) {
			reqData += chunk;
		});
		req.on('end',function () {
			var postParams = qstring.parse(reqData);
			getWeather(postParams.city, res);
		});
	} else {
		sendResponse(null, res);
	}
}).listen(8080);