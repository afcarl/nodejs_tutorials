var fs = require('fs')

// fs.renameSync('./assets/logs','./logs'); //can also be used with assets

// console.log('Directory moved');

// fs.rmdir('./assets',function(err) {
//     if (err) {
//         throw err;
//     }
//     console.log('assets removed');
//
// });

fs.readdirSync('./logs').forEach(function(filename) { //handling all files if directories is not empty
    fs.unlinkSync('./logs/' + filename)
});

fs.rmdir('./logs',function(err) {   //error because canot remove empty directory
    if (err) {
        throw err;
    }

    console.log('logs Directory removed');
})
