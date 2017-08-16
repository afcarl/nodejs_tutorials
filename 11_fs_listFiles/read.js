var fs = require('fs');
var path = require('path');

// var contents = fs.readFileSync('./lib/sayings.md','UTF-8'); //not synchronously
// console.log(contents);

//for single file
// fs.readFile('./lib/sayings.md','UTF-8',function(err,contents) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(contents);
// });


fs.readdir('./lib',function(err,files) {
    files.forEach(function(fileName) {
        var file = path.join(__dirname,'lib',fileName);
        var stats =  fs.statSync(file);
        if(stats.isFile()){
            fs.readFile(file,'UTF-8',function(err,data) {
                console.log(data);
            });
        }
    });
});
