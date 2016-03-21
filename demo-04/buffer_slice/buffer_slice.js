var numbers = new Buffer("1234569");
console.log(numbers.toString());
var slice = numbers.slice(3, 6);
console.log(slice.toString());
console.log(numbers.toString());// 考虑切片后源内容是否变化：无变化
slice[0] = "#".charCodeAt(0);
slice[slice.length-1] = "#".charCodeAt(0);
console.log(slice.toString());
console.log(numbers.toString());