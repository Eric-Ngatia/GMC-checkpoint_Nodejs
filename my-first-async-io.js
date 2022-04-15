var fs = require ('fs');

var data = fs.readFile( 'book.txt', function(err, data){
    if (err) return console.err('error');
    console.log(data.toString().split('\n').length)
}
)