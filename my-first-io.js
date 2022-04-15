
var fs = require ('fs');

var data = fs.readFileSync('./book.txt');
console.log(data.toString().split('\n').length);
console.log("fin du programme");

