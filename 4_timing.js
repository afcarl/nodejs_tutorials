var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var percentWaited = 0;

// console.log("Wait for it!");
function writeWaitingPercentage(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function() {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime)*100)
    writeWaitingPercentage(percentWaited);
    // console.log(`Waiting ${currentTime/1000} Seconds...`);
},waitInterval);

setTimeout(function() {
    clearInterval(interval)
    writeWaitingPercentage(100)
    console.log('\n\ndone\n');
    // process.exit()
},waitTime);

process.stdout.write('\n')
writeWaitingPercentage(0)
