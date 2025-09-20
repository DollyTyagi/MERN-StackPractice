async  function solve () {
   await setTimeoutPromisified(1000);
        console.log("Hiiii");
    }


    solve();

function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
} )
}
