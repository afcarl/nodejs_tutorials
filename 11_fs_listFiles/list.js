var fs = require('fs');

// var files = fs.readdirSync('./lib'); //do not do synchronously

 fs.readdir('./lib',function(err,files) {  //asynchronously
    if (err) {
        throw err;
    }
    console.log(files);

});

console.log('reading files...');
