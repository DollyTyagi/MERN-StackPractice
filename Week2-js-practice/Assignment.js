// logs hi after 1 Sec
// logs hello  3 sec after step 1
// logs hello  5 sec there after step 2

// setTimeout(function () {
//     console.log("step 1 print..");
//     setTimeout(function () {
//         console.log("step 2 print");
//         setTimeout (function () {
//             console.log("step 3 print");
//         } , 5000);
//     } , 3000);
// } , 1000);

 // *** promisified version ***

//  setTimeoutPromisified(1000).then ( function() { 
//     console.log("step 1");
//     setTimeoutPromisified(3000).then( function () {
//         console.log("step 2");
//         setTimeoutPromisified(5000).then(function () {
//             console.log("step 3");
//         })
//     })
//  })

//  function setTimeoutPromisified(duration) {
//     return new Promise ( function (resolve) {
//         setTimeout(resolve, duration);
//     })
//  }

//   *** Promise Chaining ***

setTimeoutPromisified(1000).then(function (){
    console.log("Step 1");
    return setTimeoutPromisified(3000)
}).then(function () {
    console.log("step 2");
    return setTimeoutPromisified(5000)
}).then(function () {
    console.log("step 3");
})


function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve ,duration)
    })
}
