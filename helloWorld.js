var path = require('path') //path module already installed with node

var hello = "Hello Node Js";
var justNode = hello.slice(5);

console.log(global.hello); //prints undefined (because every file in node.js is module and every variable has scope only in that module)
console.log(hello); // prints string
console.log(`Rock on World from ${justNode}`); //back tick for template string

console.log(__dirname); //prints full path directory name

console.log(__filename); //prints full path with file name

console.log(`Rock on World from ${path.basename(__filename)}`); //path.basename will print the name of the file
