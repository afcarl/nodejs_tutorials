var exec = require('child_process').exec;

// exec("xdg-open http://google.com"); //opens in default browser (Ubuntu)
// exec('xdg-open .') //opens nautilus(ubuntu)
exec('ls',function (err,stdout) { // to print stdout
    if (err){
        throw err;
    }
    console.log('finish listing');
    console.log(stdout);
})
