var dns = require('dns');
console.log("Resolving www.bugbank.cn . . .");
dns.resolve4('www.bugbank.cn', function (err, addresses) {
	console.log('IPv4 addresses: ' + JSON.stringify(addresses, false, ' '));
	addresses.forEach(function (addr) {
		dns.reverse(addr, function (err, domains) {
			console.log("Reverse for " + addr + ": " + JSON.stringify(domains));
		});
	});
});