const fs = require('fs');

function read(err,data){
    console.log(data + "I am running");
}

console.log("I am first");
const contenta = fs.readFile('a.txt', 'utf-8', read);

console.log("I am second");

const contentb = fs.readFile('b.txt', 'utf-8', read);

console.log(contenta + " --  " + "I am sitting here file is not read yet"+ " -- " + contentb);

console.log("Done!");