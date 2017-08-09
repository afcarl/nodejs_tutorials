var Person = require('./lib/person')

var ben = new Person('Ben Franklin');
var george = new Person('George Washington');

george.on('speak',function(said) {
    console.log(`${this.name} ->  ${said}`);
});

ben.on('speak',function(said) {
    console.log(`${this.name}: ${said}`);
});

ben.emit('speak','Yuhooooooooo!!! may delay but time will not')
george.emit('speak','I am GW')
