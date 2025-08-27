"use strict";
const excercise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello");
        }, 2000);
    });
};
console.log(excercise());
