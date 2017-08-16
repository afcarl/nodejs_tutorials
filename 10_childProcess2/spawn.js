var spawn = require('child_process').spawn;

// var cp2 = spawn('node',["alwaysTalking"]);
// cp2.stdout.on('data',function(data) {
//     console.log(data.toString());
// });

var cp = spawn('node',['alwaystalking']);  //pass "node" as command and "alwaystalking" in argument
// console.log(cp);


cp.stdout.on('data',function(data) {
    console.log(`STDOUT: ${data.toString()}`);
});

cp.stderr.on('data', function(data) {
    console.log('stderr: ' + data);
    //Here is where the error output goes
});

cp.on('close',function() {
    console.log('child process has ended');
    process.exit();
});

setTimeout(function() {
    cp.stdin.write('^C');
},4000);
