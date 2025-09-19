// logs hi after 1 Sec
// logs hello  3 sec after step 1
// logs hello  5 sec there after step 2


setTimeout(function () {
    console.log("step 1 print..");
    setTimeout(function () {
        console.log("step 2 print");
        setTimeout (function () {
            console.log("step 3 print");
        } , 5000);
    } , 3000);
} , 1000);
