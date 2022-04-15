var fs = require('fs');
// var ext = '.' +'txt' ;

var data = fs.readdir('./Folders', function(err, data){
    if (err) return console.err('error');
    console.log(data)
})