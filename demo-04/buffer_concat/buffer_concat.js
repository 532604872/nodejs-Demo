var af = new Buffer("African Swallow?");
var eu = new Buffer("European Swallow?");
var question = new Buffer("Air Speed Velocity of an");
console.log(Buffer.concat([question, af]).toString());
console.log(Buffer.concat([question, eu]).toString());

console.log(Buffer.concat([question,af], 5).toString());
console.log(Buffer.concat([question,eu], 55).toString());

// Buffer.slice method
var slice = af.slice(7, af.length-1);
slice[0] = "?".charCodeAt(0);
console.log(Buffer.concat([Buffer.concat([question, eu]), slice]).toString());

