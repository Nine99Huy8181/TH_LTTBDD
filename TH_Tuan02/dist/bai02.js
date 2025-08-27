"use strict";
const excercise2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
};
const bai02 = excercise2();
bai02.then((val) => {
    console.log(val);
});
