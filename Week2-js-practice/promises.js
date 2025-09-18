function wait (main) {
    setTimeout(main , 3000);
}

 function setTimeoutPromisified(){
    return new Promise(wait);
}

function main() {
    console.log("Hii I am from main")
}

setTimeoutPromisified().then(main);

// ***Another way***


// function promiseCallback(main) {
//     setTimeout( main , 3000);
// }

// function main() {
//     console.log("main is called");
// }

// promiseCallback(main);




     
