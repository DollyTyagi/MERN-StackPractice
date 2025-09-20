function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
} )
}


async  function solve () {
   await setTimeoutPromisified(1000);
        console.log("Hiiii");
    }


    solve();
    console.log("I am the first")


